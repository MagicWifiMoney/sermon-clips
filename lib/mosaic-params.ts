/**
 * Maps our ProcessingOptions → Mosaic update_params for tile configuration.
 * Everything flows through `update_params` on POST /agent/{id}/run.
 */
import type {
  ProcessingOptions,
  BrandingConfig,
  PublishMode,
  LanguageConfig,
  CaptionConfig,
  AiMusicConfig,
  RoughCutConfig,
  MotionGraphicsConfig,
  AiAvatarConfig,
  AiAugmentConfig,
  AiVoiceoverConfig,
} from "@/types";

export type MosaicBrandingNodeIds = {
  voiceNodeId?: string;
  watermarkNodeId?: string;
  introNodeId?: string;
  outroNodeId?: string;
};

export type MosaicBrandingPassConfig = {
  targetLanguage: string;
  logoImageId?: string;
  introVideoId?: string;
  outroVideoId?: string;
};

export function buildMosaicBrandingUpdateParams(
  nodeIds: MosaicBrandingNodeIds,
  config: MosaicBrandingPassConfig
): Record<string, unknown> {
  const params: Record<string, unknown> = {};

  if (nodeIds.voiceNodeId) {
    params[nodeIds.voiceNodeId] = {
      target_language: config.targetLanguage,
    };
  }

  if (nodeIds.watermarkNodeId && config.logoImageId) {
    params[nodeIds.watermarkNodeId] = {
      use_custom_logo: "custom",
      image_id: config.logoImageId,
    };
  }

  if (nodeIds.introNodeId && config.introVideoId) {
    params[nodeIds.introNodeId] = {
      use_custom_intro: "custom",
      custom_intro_video_id: config.introVideoId,
    };
  }

  if (nodeIds.outroNodeId && config.outroVideoId) {
    params[nodeIds.outroNodeId] = {
      use_custom_outro: "custom",
      custom_outro_video_id: config.outroVideoId,
    };
  }

  return params;
}

/** Convert our clipDuration string to seconds */
function durationToSeconds(duration: "short" | "medium" | "long"): number {
  switch (duration) {
    case "short": return 25;
    case "medium": return 45;
    case "long": return 75;
  }
}

/** Convert our outputFormats to Mosaic aspect_ratio values */
function formatToAspectRatio(format: string): string {
  switch (format) {
    case "vertical": return "9:16";
    case "landscape": return "16:9";
    case "square": return "1:1";
    default: return "9:16";
  }
}

/** Map our captionStyle to Mosaic tile name */
function captionStyleToTile(style: string): string {
  switch (style) {
    case "cinematic": return "cinematic_captions";
    case "with-emojis": return "captions_with_emojis";
    case "standard":
    default: return "captions";
  }
}

export function buildMosaicUpdateParams(
  options: ProcessingOptions,
  branding?: BrandingConfig | null,
  publishMode?: PublishMode,
  clipPrompt?: string,
  languageConfig?: LanguageConfig | null,
): Record<string, unknown> {
  const params: Record<string, unknown> = {};

  // --- Clips tile ---
  const durationSeconds = options.clipDurationSeconds ?? durationToSeconds(options.clipDuration);
  params.clips = {
    number_of_clips: options.clipCount,
    duration_seconds: durationSeconds,
    ...(clipPrompt || options.clipPrompt ? { prompt: clipPrompt || options.clipPrompt } : {}),
  };

  // --- Captions tile ---
  if (options.captionStyle !== "none") {
    const tileName = captionStyleToTile(options.captionStyle);
    const captionParams: Record<string, unknown> = {
      enabled: true,
      style: options.captionStyle === "standard" ? "colored_words" : options.captionStyle,
    };

    // Rich caption config overrides the simple style
    if (options.captionConfig?.enabled) {
      const cc = options.captionConfig;
      captionParams.style = cc.style;
      if (cc.baseColor) captionParams.base_color = cc.baseColor;
      if (cc.highlightColor) captionParams.highlight_color = cc.highlightColor;
      if (cc.strokeColor) captionParams.stroke_color = cc.strokeColor;
      if (cc.fontFamily) captionParams.font_family = cc.fontFamily;
      if (cc.fontWeight) captionParams.font_weight = cc.fontWeight;
      if (cc.fontSize) captionParams.font_size = cc.fontSize;
      if (cc.verticalPosition != null) captionParams.vertical_position = cc.verticalPosition;
      if (cc.minWords != null) captionParams.min_words = cc.minWords;
      if (cc.maxWords != null) captionParams.max_words = cc.maxWords;
    }

    params[tileName] = captionParams;
  }

  // --- Reframe tile ---
  if (options.outputFormats.length > 0) {
    params.reframe = {
      aspect_ratios: options.outputFormats.map(formatToAspectRatio),
      dynamic_zoom: options.dynamicZoom ?? true,
    };
  }

  // --- Silence Removal tile ---
  if (options.features.silenceRemoval) {
    params.silence_removal = {
      enabled: true,
      remove_filler_words: options.features.silenceRemovalFillerWords ?? false,
    };
  }

  // --- Audio Enhance tile ---
  if (options.features.audioEnhancement) {
    params.audio_enhance = { enabled: true };
  }

  // --- Color Correction tile ---
  if (options.features.colorCorrection) {
    const cc = options.features.colorCorrection;
    params.color_correction = typeof cc === "string"
      ? { enabled: true, preset: cc }
      : { enabled: true };
  }

  // --- AI Music tile ---
  const musicConfig = options.features.aiMusic;
  if (musicConfig?.enabled || options.features.aiBackgroundMusic) {
    const music: Record<string, unknown> = { enabled: true };
    if (musicConfig) {
      if (musicConfig.genre) music.genre = musicConfig.genre;
      if (musicConfig.mood) music.mood = musicConfig.mood;
      if (musicConfig.intensity != null) music.intensity = musicConfig.intensity;
      if (musicConfig.bpm != null) music.bpm = musicConfig.bpm;
      if (musicConfig.prompt) music.prompt = musicConfig.prompt;
      if (musicConfig.volume != null) music.volume = musicConfig.volume;
    }
    params.ai_music = music;
  }

  // --- AI B-Roll tile ---
  if (options.features.aiBRoll) {
    params.ai_broll = { enabled: true };
  }

  // --- Motion Graphics tile ---
  if (options.features.motionGraphics) {
    const mg = options.features.motionGraphics;
    if (typeof mg === "object") {
      params.motion_graphics = {
        enabled: true,
        ...(mg.stylePrompt ? { style_prompt: mg.stylePrompt } : {}),
        ...(mg.fullScreen != null ? { full_screen: mg.fullScreen } : {}),
        ...(mg.preset ? { preset: mg.preset } : {}),
      };
    } else {
      params.motion_graphics = { enabled: true };
    }
  }

  // --- Rough Cut tile ---
  if (options.features.roughCut) {
    const rc = options.features.roughCut;
    if (typeof rc === "object") {
      params.rough_cut = {
        enabled: true,
        ...(rc.prompt ? { prompt: rc.prompt } : {}),
        ...(rc.targetDurationSeconds ? { target_duration_seconds: rc.targetDurationSeconds } : {}),
        ...(rc.mood ? { mood: rc.mood } : {}),
      };
    } else {
      params.rough_cut = { enabled: true };
    }
  }

  // --- AI Voiceover tile ---
  const voiceover = options.features.aiVoiceover;
  if (voiceover?.enabled) {
    params.ai_voiceover = {
      enabled: true,
      ...(voiceover.voice ? { voice_id: voiceover.voice } : {}),
      ...(voiceover.script ? { script: voiceover.script } : {}),
      ...(voiceover.language ? { language: voiceover.language } : {}),
    };
  }

  // --- AI Avatar tile ---
  if (options.features.aiAvatar) {
    const av = options.features.aiAvatar;
    if (typeof av === "object") {
      params.ai_avatar = {
        enabled: true,
        ...(av.avatarId ? { avatar_id: av.avatarId } : {}),
        ...(av.script ? { script: av.script } : {}),
        ...(av.voiceId ? { voice_id: av.voiceId } : {}),
      };
    } else {
      params.ai_avatar = { enabled: true };
    }
  }

  // --- AI Augment tile ---
  if (options.features.aiAugment) {
    const aug = options.features.aiAugment;
    if (typeof aug === "object") {
      params.ai_augment = {
        enabled: true,
        ...(aug.style ? { style: aug.style } : {}),
        ...(aug.effect ? { effect: aug.effect } : {}),
      };
    } else {
      params.ai_augment = { enabled: true };
    }
  }

  // --- Watermark tile (from branding) ---
  if (branding?.watermarkImageId || branding?.watermarkUrl) {
    const watermarkParams: Record<string, unknown> = {
      position: branding.watermarkPosition ?? "bottom-right",
      ...(branding.watermarkSize != null ? { size_percent: branding.watermarkSize } : {}),
      ...(branding.watermarkOpacity != null ? { opacity: branding.watermarkOpacity } : {}),
      ...(branding.watermarkMargin != null ? { margin_px: branding.watermarkMargin } : {}),
    };

    if (branding.watermarkImageId) {
      watermarkParams.image_id = branding.watermarkImageId;
    } else if (branding.watermarkUrl) {
      watermarkParams.image_url = branding.watermarkUrl;
    }

    params.watermark = watermarkParams;
  }

  // --- Intro tile (from branding) ---
  if (branding?.introVideoId || branding?.introVideoUrl) {
    params.intro = branding.introVideoId
      ? { video_id: branding.introVideoId }
      : { intro_video_url: branding.introVideoUrl };
  }

  // --- Outro tile (from branding) ---
  if (branding?.outroVideoId || branding?.outroVideoUrl) {
    params.outro = branding.outroVideoId
      ? { video_id: branding.outroVideoId }
      : { outro_video_url: branding.outroVideoUrl };
  }

  // --- Destination tile (social publishing) ---
  if (publishMode === "auto" || publishMode === "review") {
    params.destination = {
      mode: publishMode === "auto" ? "publish" : "review",
      ...(options.captionPrompt ? { caption_prompt: options.captionPrompt } : {}),
    };
  }

  // --- Voice tile (translation/dubbing) ---
  if (languageConfig && languageConfig.targetLanguages.length > 0) {
    params.voice = {
      target_language: languageConfig.targetLanguages[0],
      lip_sync: languageConfig.lipSync ?? false,
      preserve_background_audio: languageConfig.preserveBackgroundAudio ?? true,
      ...(languageConfig.safewords?.length ? { safewords: languageConfig.safewords } : {}),
    };
  }

  return params;
}
