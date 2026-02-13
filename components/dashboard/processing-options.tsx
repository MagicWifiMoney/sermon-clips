"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { TierBadge } from "@/components/dashboard/plan-gate";
import { ChevronDown, ChevronUp, Lock } from "lucide-react";
import type { ProcessingOptions, OutputFormat, PublishMode } from "@/types";

const CLIP_COUNTS = [3, 5, 7, 10] as const;

const DURATION_OPTIONS = [
  { value: "short" as const, label: "Short", desc: "15-30s" },
  { value: "medium" as const, label: "Medium", desc: "30-60s" },
  { value: "long" as const, label: "Long", desc: "60-90s" },
];

const CAPTION_STYLES = [
  { value: "none" as const, label: "None" },
  { value: "standard" as const, label: "Standard" },
  { value: "cinematic" as const, label: "Cinematic" },
  { value: "with-emojis" as const, label: "With Emojis" },
];

const FORMAT_OPTIONS: { value: OutputFormat; label: string; desc: string }[] = [
  { value: "vertical", label: "Vertical", desc: "9:16" },
  { value: "landscape", label: "Landscape", desc: "16:9" },
  { value: "square", label: "Square", desc: "1:1" },
];

const ENHANCEMENT_OPTIONS = [
  { key: "silenceRemoval" as const, label: "Silence Removal" },
  { key: "audioEnhancement" as const, label: "Audio Enhancement" },
  { key: "colorCorrection" as const, label: "Color Correction" },
  { key: "aiBackgroundMusic" as const, label: "AI Background Music" },
  { key: "aiBRoll" as const, label: "AI B-Roll" },
  { key: "motionGraphics" as const, label: "Motion Graphics" },
];

const AI_OPTIONS = [
  { key: "aiAvatar" as const, label: "AI Avatar", feature: "aiAvatar" },
  { key: "aiAugment" as const, label: "AI Augment", feature: "aiAvatar" },
  { key: "roughCut" as const, label: "Rough Cut", feature: "aiAvatar" },
  { key: "voiceModification" as const, label: "Voice Modification", feature: "aiVoiceover" },
  { key: "viralShorts" as const, label: "Viral Shorts", feature: "viralShorts" },
];

const PUBLISH_MODES: { value: PublishMode; label: string; desc: string }[] = [
  { value: "auto", label: "Auto-publish", desc: "Clips publish immediately when ready" },
  { value: "review", label: "Review first", desc: "Review clips before publishing" },
  { value: "draft", label: "Download only", desc: "Just generate clips for download" },
];

const MUSIC_GENRES = ["Ambient", "Worship", "Cinematic", "Acoustic", "Piano", "Orchestral"];

interface ProcessingOptionsProps {
  value: ProcessingOptions;
  onChange: (options: ProcessingOptions) => void;
  publishMode: PublishMode;
  onPublishModeChange: (mode: PublishMode) => void;
}

export const DEFAULT_PROCESSING_OPTIONS: ProcessingOptions = {
  clipCount: 5,
  clipDuration: "medium",
  captionStyle: "standard",
  outputFormats: ["vertical", "landscape", "square"],
  features: {},
  applyBranding: false,
};

export function ProcessingOptionsPanel({
  value,
  onChange,
  publishMode,
  onPublishModeChange,
}: ProcessingOptionsProps) {
  const [expanded, setExpanded] = useState(false);

  const update = (partial: Partial<ProcessingOptions>) => {
    onChange({ ...value, ...partial });
  };

  const toggleFormat = (fmt: OutputFormat) => {
    const formats = value.outputFormats.includes(fmt)
      ? value.outputFormats.filter((f) => f !== fmt)
      : [...value.outputFormats, fmt];
    if (formats.length > 0) update({ outputFormats: formats });
  };

  const toggleBoolFeature = (key: string, checked: boolean) => {
    update({ features: { ...value.features, [key]: checked } });
  };

  return (
    <Card className="p-0 overflow-hidden">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#F5F1EB]/50 transition-colors"
      >
        <div>
          <h3 className="text-sm font-semibold text-[#2D2D2D]">Processing Options</h3>
          <p className="text-xs text-[#5c5c5c] mt-0.5">
            {value.clipCount} clips &middot; {DURATION_OPTIONS.find((d) => d.value === value.clipDuration)?.desc} &middot; {value.captionStyle} captions
          </p>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 text-[#5c5c5c]" /> : <ChevronDown className="w-4 h-4 text-[#5c5c5c]" />}
      </button>

      {expanded && (
        <div className="px-5 pb-5 space-y-5 border-t border-[#E8E4DC]">
          {/* Clip Count */}
          <div className="pt-4">
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Number of Clips</label>
            <div className="flex gap-2">
              {CLIP_COUNTS.map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => update({ clipCount: count })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    value.clipCount === count
                      ? "bg-[#E8725A] text-white"
                      : "bg-[#F5F1EB] text-[#2D2D2D] hover:bg-[#E8E4DC]"
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          {/* Clip Duration */}
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Clip Duration</label>
            <div className="flex gap-2">
              {DURATION_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => update({ clipDuration: opt.value })}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-sm transition-colors text-center ${
                    value.clipDuration === opt.value
                      ? "bg-[#E8725A] text-white"
                      : "bg-[#F5F1EB] text-[#2D2D2D] hover:bg-[#E8E4DC]"
                  }`}
                >
                  <span className="font-medium">{opt.label}</span>
                  <span className="block text-xs opacity-75">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Caption Style */}
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Caption Style</label>
            <select
              value={value.captionStyle}
              onChange={(e) => update({ captionStyle: e.target.value as ProcessingOptions["captionStyle"] })}
              className="w-full px-4 py-2.5 rounded-lg border border-[#E8E4DC] bg-white text-[#2D2D2D] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
            >
              {CAPTION_STYLES.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          {/* Output Formats */}
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Output Formats</label>
            <div className="flex gap-2">
              {FORMAT_OPTIONS.map((fmt) => (
                <button
                  key={fmt.value}
                  type="button"
                  onClick={() => toggleFormat(fmt.value)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-sm transition-colors text-center border ${
                    value.outputFormats.includes(fmt.value)
                      ? "border-[#E8725A] bg-[#E8725A]/5 text-[#E8725A]"
                      : "border-[#E8E4DC] text-[#5c5c5c] hover:border-[#2D2D2D]/30"
                  }`}
                >
                  <span className="font-medium">{fmt.label}</span>
                  <span className="block text-xs opacity-75">{fmt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Enhancements */}
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
              Enhancements
              <span className="text-xs text-[#5c5c5c] font-normal ml-1">(Professional+)</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {ENHANCEMENT_OPTIONS.map((opt) => (
                <label
                  key={opt.key}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-[#E8E4DC] cursor-pointer hover:bg-[#F5F1EB]/50 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={value.features[opt.key] ?? false}
                    onChange={(e) => toggleBoolFeature(opt.key, e.target.checked)}
                    className="rounded border-[#E8E4DC] text-[#E8725A] focus:ring-[#E8725A]/50"
                  />
                  <span className="text-sm text-[#2D2D2D]">{opt.label}</span>
                  <Lock className="w-3 h-3 text-[#5c5c5c]/50 ml-auto" />
                </label>
              ))}
            </div>
          </div>

          {/* AI Music Config */}
          <div>
            <label className="flex items-center gap-2.5 mb-2">
              <span className="text-sm font-medium text-[#2D2D2D]">AI Background Music</span>
              <TierBadge feature="audioEnhancement" />
            </label>
            <div className="space-y-2 pl-1">
              <label className="flex items-center gap-2.5 text-sm">
                <input
                  type="checkbox"
                  checked={value.features.aiMusic?.enabled ?? false}
                  onChange={(e) =>
                    update({
                      features: {
                        ...value.features,
                        aiMusic: { ...(value.features.aiMusic ?? { enabled: false }), enabled: e.target.checked },
                      },
                    })
                  }
                  className="rounded border-[#E8E4DC] text-[#E8725A] focus:ring-[#E8725A]/50"
                />
                <span className="text-[#2D2D2D]">Enable AI music</span>
              </label>
              {value.features.aiMusic?.enabled && (
                <div className="flex gap-2 flex-wrap">
                  {MUSIC_GENRES.map((genre) => (
                    <button
                      key={genre}
                      type="button"
                      onClick={() =>
                        update({
                          features: {
                            ...value.features,
                            aiMusic: { ...(value.features.aiMusic ?? { enabled: true }), genre },
                          },
                        })
                      }
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        value.features.aiMusic?.genre === genre
                          ? "bg-[#E8725A] text-white"
                          : "bg-[#F5F1EB] text-[#2D2D2D] hover:bg-[#E8E4DC]"
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* AI Features */}
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">AI Features</label>
            <div className="grid grid-cols-2 gap-2">
              {AI_OPTIONS.map((opt) => (
                <label
                  key={opt.key}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-[#E8E4DC] cursor-pointer hover:bg-[#F5F1EB]/50 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={(value.features[opt.key as keyof typeof value.features] as boolean) ?? false}
                    onChange={(e) => toggleBoolFeature(opt.key, e.target.checked)}
                    className="rounded border-[#E8E4DC] text-[#E8725A] focus:ring-[#E8725A]/50"
                  />
                  <span className="text-sm text-[#2D2D2D]">{opt.label}</span>
                  <TierBadge feature={opt.feature} />
                </label>
              ))}
            </div>
          </div>

          {/* AI Voiceover */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm font-medium text-[#2D2D2D]">AI Voiceover</label>
              <TierBadge feature="aiVoiceover" />
            </div>
            <label className="flex items-center gap-2.5 text-sm mb-2">
              <input
                type="checkbox"
                checked={value.features.aiVoiceover?.enabled ?? false}
                onChange={(e) =>
                  update({
                    features: {
                      ...value.features,
                      aiVoiceover: {
                        ...(value.features.aiVoiceover ?? { enabled: false }),
                        enabled: e.target.checked,
                      },
                    },
                  })
                }
                className="rounded border-[#E8E4DC] text-[#E8725A] focus:ring-[#E8725A]/50"
              />
              <span className="text-[#2D2D2D]">Enable AI voiceover</span>
            </label>
            {value.features.aiVoiceover?.enabled && (
              <div className="flex gap-2">
                <select
                  value={value.features.aiVoiceover?.language ?? ""}
                  onChange={(e) =>
                    update({
                      features: {
                        ...value.features,
                        aiVoiceover: {
                          ...(value.features.aiVoiceover ?? { enabled: true }),
                          language: e.target.value,
                        },
                      },
                    })
                  }
                  className="text-sm px-3 py-1.5 rounded-lg border border-[#E8E4DC] bg-white text-[#2D2D2D] outline-none focus:ring-1 focus:ring-[#E8725A]/50"
                >
                  <option value="">Select language</option>
                  <option value="es">Spanish</option>
                  <option value="pt">Portuguese</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="ko">Korean</option>
                </select>
              </div>
            )}
          </div>

          {/* Apply Branding */}
          <label className="flex items-center gap-3 px-3 py-3 rounded-lg border border-[#E8E4DC] cursor-pointer hover:bg-[#F5F1EB]/50 transition-colors">
            <input
              type="checkbox"
              checked={value.applyBranding}
              onChange={(e) => update({ applyBranding: e.target.checked })}
              className="rounded border-[#E8E4DC] text-[#E8725A] focus:ring-[#E8725A]/50"
            />
            <div>
              <span className="text-sm font-medium text-[#2D2D2D]">Apply my branding</span>
              <span className="block text-xs text-[#5c5c5c]">Logo, intro/outro, watermark from settings</span>
            </div>
          </label>

          {/* Publish Mode */}
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">After Processing</label>
            <div className="space-y-2">
              {PUBLISH_MODES.map((mode) => (
                <label
                  key={mode.value}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                    publishMode === mode.value
                      ? "border-[#E8725A] bg-[#E8725A]/5"
                      : "border-[#E8E4DC] hover:bg-[#F5F1EB]/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="publishMode"
                    value={mode.value}
                    checked={publishMode === mode.value}
                    onChange={() => onPublishModeChange(mode.value)}
                    className="text-[#E8725A] focus:ring-[#E8725A]/50"
                  />
                  <div>
                    <span className="text-sm font-medium text-[#2D2D2D]">{mode.label}</span>
                    <span className="block text-xs text-[#5c5c5c]">{mode.desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
