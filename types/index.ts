import type {
  Sermon,
  Clip,
  User,
  SermonStatus,
  SocialAccount,
  ClipPublication,
  ClipAnalytics,
  ScheduledPost,
  ContentPiece,
  ContentType,
  ContentStatus,
  ProcessingTemplate,
  SermonSeries,
  Montage,
  Graphic,
  Campus,
  SuggestedClip,
  Course,
} from "@prisma/client";

export type {
  Sermon,
  Clip,
  User,
  SermonStatus,
  SocialAccount,
  ClipPublication,
  ClipAnalytics,
  ScheduledPost,
  ContentPiece,
  ContentType,
  ContentStatus,
  ProcessingTemplate,
  SermonSeries,
  Montage,
  Graphic,
  Campus,
  SuggestedClip,
  Course,
};

// --- Composite Types ---

export type SermonWithClips = Sermon & {
  clips: Clip[];
};

export type SermonWithUser = Sermon & {
  user: User;
};

export type ClipWithPublications = Clip & {
  publications: ClipPublication[];
};

export type SermonWithClipsAndPublications = Sermon & {
  clips: ClipWithPublications[];
};

export type SermonWithClipsAndContent = Sermon & {
  clips: Clip[];
  contentPieces: ContentPiece[];
};

export type SermonWithSeries = Sermon & {
  series: SermonSeries | null;
};

// --- Dashboard Stats ---

export type DashboardStats = {
  totalSermons: number;
  totalClips: number;
  processingCount: number;
};

// --- Create Sermon Input ---

export type CreateSermonInput = {
  title: string;
  sourceType: "youtube" | "upload";
  sourceUrl?: string;
  processingOptions?: ProcessingOptions;
  publishMode?: PublishMode;
  seriesId?: string;
  campusId?: string;
};

// --- API Response ---

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};

// --- Processing Options ---

export type ProcessingOptions = {
  clipCount: number;
  clipDuration: "short" | "medium" | "long";
  captionStyle: "none" | "standard" | "cinematic" | "with-emojis";
  outputFormats: OutputFormat[];
  features: ProcessingFeatures;
  applyBranding: boolean;
};

export type OutputFormat = "vertical" | "landscape" | "square";

export type ProcessingFeatures = {
  silenceRemoval?: boolean;
  audioEnhancement?: boolean;
  colorCorrection?: boolean;
  aiBackgroundMusic?: boolean;
  aiBRoll?: boolean;
  motionGraphics?: boolean;
  aiAvatar?: boolean;
  aiVoiceover?: AiVoiceoverConfig;
  aiAugment?: boolean;
  roughCut?: boolean;
  voiceModification?: boolean;
  aiMusic?: AiMusicConfig;
  viralShorts?: boolean;
};

export type AiVoiceoverConfig = {
  enabled: boolean;
  language?: string;
  voice?: string;
};

export type AiMusicConfig = {
  enabled: boolean;
  genre?: string;
  volume?: number;
};

export type LanguageConfig = {
  targetLanguages: string[];
  translateCaptions: boolean;
  voiceoverLanguage?: string;
  voiceoverVoice?: string;
};

export type PublishMode = "auto" | "review" | "draft";

// --- Branding ---

export type BrandingConfig = {
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  introVideoUrl?: string;
  outroVideoUrl?: string;
  watermarkUrl?: string;
  watermarkPosition?: WatermarkPosition;
};

export type WatermarkPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

// --- YouTube Channel ---

export type YouTubeChannelConfig = {
  channelId: string;
  channelUrl: string;
  channelName: string;
  thumbnailUrl?: string;
  subscriberCount?: number;
  autoProcess: boolean;
  defaultProcessingOptions?: ProcessingOptions;
};

// --- Social Publishing ---

export type SocialPlatform = "tiktok" | "instagram" | "youtube" | "facebook" | "x" | "linkedin";

export type DripSchedule = {
  enabled: boolean;
  slots: DripSlot[];
};

export type DripSlot = {
  day: string;
  time: string;
  platform: SocialPlatform;
};

export type PublicationStatus = "draft" | "scheduled" | "publishing" | "published" | "failed";

// --- Content Generation ---

export type GenerateContentRequest = {
  types: ContentType[];
  platform?: SocialPlatform;
};

export type TranscriptSegment = {
  start: number;
  end: number;
  text: string;
  speaker?: string;
};

export type Transcript = {
  segments: TranscriptSegment[];
};

export type CreateClipFromTranscriptRequest = {
  startTime: number;
  endTime: number;
  title?: string;
};

// --- Templates ---

export type ProcessingTemplateInput = {
  name: string;
  description?: string;
  isDefault?: boolean;
  processingOptions: ProcessingOptions;
  publishMode?: PublishMode;
};

// --- Series ---

export type SermonSeriesInput = {
  name: string;
  description?: string;
  imageUrl?: string;
  startDate?: string;
  endDate?: string;
};

// --- Montage ---

export type TransitionStyle = "crossfade" | "fade-to-black" | "cut" | "slide" | "zoom";

export type MontageRequest = {
  title: string;
  clipIds: string[];
  transitionStyle?: TransitionStyle;
};

// --- Graphics ---

export type GraphicType = "quote_card" | "thumbnail" | "carousel";

export type GraphicStyle = {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  template?: string;
};

export type GenerateGraphicRequest = {
  type: GraphicType;
  text?: string;
  style?: GraphicStyle;
};

// --- Batch Processing ---

export type BatchProcessRequest = {
  sermonIds: string[];
  processingOptions?: ProcessingOptions;
};

export type BatchProcessStatus = {
  sermonId: string;
  status: SermonStatus;
  progress: number;
};

// --- ROI ---

export type RoiMetrics = {
  timeSavedMinutes: number;
  contentPiecesGenerated: number;
  platformReachMultiplier: number;
  costPerClip: number;
  estimatedManualCost: number;
};

// --- Smart Clips ---

export type ClipTopic =
  | "faith"
  | "hope"
  | "humor"
  | "call-to-action"
  | "emotional-peak"
  | "testimony"
  | "scripture"
  | "practical-advice";

// --- Course ---

export type CourseModule = {
  week: number;
  title: string;
  summary: string;
  scriptures: string[];
  discussionQuestions: string[];
  clipIds: string[];
};

export type GenerateCourseRequest = {
  seriesId: string;
  title?: string;
};

// --- Plans ---

export type PlanTier = "free" | "starter" | "growth" | "automation" | "professional" | "suite";

export type OnboardingData = {
  churchName?: string;
  role?: "pastor" | "comms-director" | "volunteer" | "other";
  primaryGoal?: "grow-social" | "save-time" | "reach-more-people" | "repurpose-content";
};

export const PLAN_LIMITS: Record<
  PlanTier,
  {
    clipCount: number;
    formats: number;
    features: string[];
    monthlyPrice: number;
    yearlyPrice: number;
    sermonsPerMonth: number;
  }
> = {
  free: {
    clipCount: 5,
    formats: 1,
    monthlyPrice: 0,
    yearlyPrice: 0,
    sermonsPerMonth: 1,
    features: [],
  },
  starter: {
    clipCount: 3,
    formats: 1,
    monthlyPrice: 29,
    yearlyPrice: 278,
    sermonsPerMonth: 4,
    features: [],
  },
  growth: {
    clipCount: 5,
    formats: 3,
    monthlyPrice: 59,
    yearlyPrice: 566,
    sermonsPerMonth: 8,
    features: ["reframe"],
  },
  automation: {
    clipCount: 10,
    formats: 3,
    monthlyPrice: 149,
    yearlyPrice: 1430,
    sermonsPerMonth: -1,
    features: [
      "reframe", "youtubeAutoSync", "socialPublishing", "dripScheduling",
      "aiCaptions", "contentGeneration", "transcript", "templates", "series",
    ],
  },
  professional: {
    clipCount: 15,
    formats: 3,
    monthlyPrice: 299,
    yearlyPrice: 2870,
    sermonsPerMonth: -1,
    features: [
      "reframe", "youtubeAutoSync", "socialPublishing", "dripScheduling",
      "aiCaptions", "branding", "audioEnhancement", "silenceRemoval", "analytics",
      "contentGeneration", "transcript", "templates", "series", "aiVoiceover",
      "multiLanguage", "montage", "graphics", "roi", "viralShorts",
    ],
  },
  suite: {
    clipCount: 15,
    formats: 3,
    monthlyPrice: 599,
    yearlyPrice: 5750,
    sermonsPerMonth: -1,
    features: [
      "reframe", "youtubeAutoSync", "socialPublishing", "dripScheduling",
      "aiCaptions", "branding", "audioEnhancement", "silenceRemoval", "analytics",
      "aiAvatar", "multiCampus", "batchProcessing", "apiAccess",
      "contentGeneration", "transcript", "templates", "series", "aiVoiceover",
      "multiLanguage", "montage", "graphics", "roi", "viralShorts",
    ],
  },
};

// --- Analytics ---

export type AnalyticsSummary = {
  totalViews: number;
  engagementRate: number;
  topPlatform: SocialPlatform | null;
  bestClipId: string | null;
  bestClipTitle: string | null;
};

export type ClipPerformanceRow = {
  clipId: string;
  clipTitle: string;
  sermonTitle: string;
  platforms: SocialPlatform[];
  views: number;
  likes: number;
  shares: number;
  comments: number;
  publishedAt: string;
};

export type DateRange = "7d" | "30d" | "90d" | "custom";
