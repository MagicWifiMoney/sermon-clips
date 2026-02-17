"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Loader2 } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import type { BrandingConfig, WatermarkPosition } from "@/types";

const WATERMARK_POSITIONS: { value: WatermarkPosition; label: string }[] = [
  { value: "top-left", label: "Top Left" },
  { value: "top-right", label: "Top Right" },
  { value: "bottom-left", label: "Bottom Left" },
  { value: "bottom-right", label: "Bottom Right" },
  { value: "center", label: "Center" },
];

interface BrandingSettingsProps {
  initialConfig: BrandingConfig | null;
}

export function BrandingSettings({ initialConfig }: BrandingSettingsProps) {
  const posthog = usePostHog();
  const [config, setConfig] = useState<BrandingConfig>(initialConfig ?? {});
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);

  const update = (partial: Partial<BrandingConfig>) => {
    setConfig((prev) => ({ ...prev, ...partial }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/settings/branding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
      if (!res.ok) throw new Error("Failed to save branding settings");
      posthog.capture("branding_saved", {
        has_logo: !!config.logoUrl || !!config.logoImageId,
        has_watermark: !!config.watermarkUrl || !!config.watermarkImageId,
      });
      toast.success("Branding settings saved!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const handleFileUpload = async (assetType: "logo" | "watermark" | "intro" | "outro", file: File) => {
    setUploading(assetType);
    try {
      // Step 1: Get presigned upload URL
      const startRes = await fetch("/api/settings/branding/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assetType }),
      });
      if (!startRes.ok) throw new Error("Failed to get upload URL");
      const { data } = await startRes.json();

      // Step 2: Upload the file
      const formData = new FormData();
      if (data.uploadFields) {
        Object.entries(data.uploadFields).forEach(([key, value]) => {
          formData.append(key, value as string);
        });
      }
      formData.append("file", file);

      const uploadRes = await fetch(data.uploadUrl, { method: "POST", body: formData });
      if (!uploadRes.ok) throw new Error("Upload failed");

      // Step 3: Finalize
      const finalizeRes = await fetch("/api/settings/branding/upload", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assetId: data.assetId, assetType }),
      });
      if (!finalizeRes.ok) throw new Error("Finalize failed");
      const { data: result } = await finalizeRes.json();

      // Update local state
      const idFieldMap: Record<string, keyof BrandingConfig> = {
        logo: "logoImageId",
        watermark: "watermarkImageId",
        intro: "introVideoId",
        outro: "outroVideoId",
      };
      update({ [idFieldMap[assetType]]: result.assetId });
      toast.success(`${assetType} uploaded!`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setUploading(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Logo */}
      <Card>
        <h3 className="text-sm font-semibold text-[#2D2D2D] mb-3">Logo</h3>
        <div className="flex items-start gap-4">
          <label className="w-24 h-24 rounded-xl border-2 border-dashed border-[#E8E4DC] flex items-center justify-center bg-[#F5F1EB]/50 shrink-0 cursor-pointer hover:border-[#E8725A]/50 transition-colors">
            {uploading === "logo" ? (
              <Loader2 className="w-6 h-6 text-[#E8725A] animate-spin" />
            ) : config.logoUrl ? (
              <img src={config.logoUrl} alt="Logo" className="w-full h-full object-contain rounded-xl" />
            ) : (
              <Upload className="w-6 h-6 text-[#5c5c5c]/50" />
            )}
            <input
              type="file"
              accept="image/png,image/svg+xml,image/jpeg"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFileUpload("logo", f);
              }}
            />
          </label>
          <div className="flex-1 space-y-2">
            <input
              type="url"
              value={config.logoUrl ?? ""}
              onChange={(e) => update({ logoUrl: e.target.value || undefined })}
              placeholder="Logo URL (or click logo area to upload)"
              className="w-full px-3 py-2 rounded-lg border border-[#E8E4DC] text-sm bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
            />
            <p className="text-xs text-[#5c5c5c]">PNG or SVG, recommended 200x200px</p>
          </div>
        </div>
      </Card>

      {/* Brand Colors */}
      <Card>
        <h3 className="text-sm font-semibold text-[#2D2D2D] mb-3">Brand Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-[#5c5c5c] mb-1.5">Primary Color</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={config.primaryColor ?? "#E8725A"}
                onChange={(e) => update({ primaryColor: e.target.value })}
                className="w-10 h-10 rounded-lg border border-[#E8E4DC] cursor-pointer"
              />
              <input
                type="text"
                value={config.primaryColor ?? "#E8725A"}
                onChange={(e) => update({ primaryColor: e.target.value })}
                className="flex-1 px-3 py-2 rounded-lg border border-[#E8E4DC] text-sm bg-white text-[#2D2D2D] font-mono focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-[#5c5c5c] mb-1.5">Secondary Color</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={config.secondaryColor ?? "#2D2D2D"}
                onChange={(e) => update({ secondaryColor: e.target.value })}
                className="w-10 h-10 rounded-lg border border-[#E8E4DC] cursor-pointer"
              />
              <input
                type="text"
                value={config.secondaryColor ?? "#2D2D2D"}
                onChange={(e) => update({ secondaryColor: e.target.value })}
                className="flex-1 px-3 py-2 rounded-lg border border-[#E8E4DC] text-sm bg-white text-[#2D2D2D] font-mono focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Intro / Outro */}
      <Card>
        <h3 className="text-sm font-semibold text-[#2D2D2D] mb-3">Intro & Outro</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-[#5c5c5c] mb-1.5">Intro Video</label>
            <div className="flex gap-2">
              <input
                type="url"
                value={config.introVideoUrl ?? ""}
                onChange={(e) => update({ introVideoUrl: e.target.value || undefined })}
                placeholder="URL to intro video clip"
                className="flex-1 px-3 py-2 rounded-lg border border-[#E8E4DC] text-sm bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
              />
              <label className="px-3 py-2 rounded-lg border border-[#E8E4DC] text-sm text-[#5c5c5c] hover:bg-[#F5F1EB]/50 cursor-pointer transition-colors flex items-center gap-1.5">
                {uploading === "intro" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                Upload
                <input
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFileUpload("intro", f);
                  }}
                />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-xs text-[#5c5c5c] mb-1.5">Outro Video</label>
            <div className="flex gap-2">
              <input
                type="url"
                value={config.outroVideoUrl ?? ""}
                onChange={(e) => update({ outroVideoUrl: e.target.value || undefined })}
                placeholder="URL to outro video clip"
                className="flex-1 px-3 py-2 rounded-lg border border-[#E8E4DC] text-sm bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
              />
              <label className="px-3 py-2 rounded-lg border border-[#E8E4DC] text-sm text-[#5c5c5c] hover:bg-[#F5F1EB]/50 cursor-pointer transition-colors flex items-center gap-1.5">
                {uploading === "outro" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                Upload
                <input
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFileUpload("outro", f);
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      </Card>

      {/* Watermark */}
      <Card>
        <h3 className="text-sm font-semibold text-[#2D2D2D] mb-3">Watermark</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-[#5c5c5c] mb-1.5">Watermark Image</label>
            <div className="flex gap-2">
              <input
                type="url"
                value={config.watermarkUrl ?? ""}
                onChange={(e) => update({ watermarkUrl: e.target.value || undefined })}
                placeholder="URL to watermark image (PNG with transparency)"
                className="flex-1 px-3 py-2 rounded-lg border border-[#E8E4DC] text-sm bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
              />
              <label className="px-3 py-2 rounded-lg border border-[#E8E4DC] text-sm text-[#5c5c5c] hover:bg-[#F5F1EB]/50 cursor-pointer transition-colors flex items-center gap-1.5">
                {uploading === "watermark" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                Upload
                <input
                  type="file"
                  accept="image/png,image/svg+xml"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFileUpload("watermark", f);
                  }}
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#5c5c5c] mb-1.5">Position</label>
            <div className="grid grid-cols-3 gap-2 max-w-[300px]">
              {WATERMARK_POSITIONS.map((pos) => (
                <button
                  key={pos.value}
                  type="button"
                  onClick={() => update({ watermarkPosition: pos.value })}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors border ${
                    config.watermarkPosition === pos.value
                      ? "border-[#E8725A] bg-[#E8725A]/5 text-[#E8725A]"
                      : "border-[#E8E4DC] text-[#5c5c5c] hover:border-[#2D2D2D]/30"
                  }`}
                >
                  {pos.label}
                </button>
              ))}
            </div>
          </div>

          {/* Opacity */}
          <div>
            <div className="flex items-center justify-between text-xs text-[#5c5c5c]">
              <span>Opacity</span>
              <span>{config.watermarkOpacity ?? 70}%</span>
            </div>
            <input
              type="range"
              min={10}
              max={100}
              value={config.watermarkOpacity ?? 70}
              onChange={(e) => update({ watermarkOpacity: Number(e.target.value) })}
              className="w-full h-1.5 rounded-full appearance-none bg-[#E8E4DC] accent-[#E8725A] cursor-pointer"
            />
          </div>

          {/* Size */}
          <div>
            <div className="flex items-center justify-between text-xs text-[#5c5c5c]">
              <span>Size</span>
              <span>{config.watermarkSize ?? 10}% of width</span>
            </div>
            <input
              type="range"
              min={3}
              max={30}
              value={config.watermarkSize ?? 10}
              onChange={(e) => update({ watermarkSize: Number(e.target.value) })}
              className="w-full h-1.5 rounded-full appearance-none bg-[#E8E4DC] accent-[#E8725A] cursor-pointer"
            />
          </div>

          {/* Margin */}
          <div>
            <label className="block text-xs text-[#5c5c5c] mb-1">Margin (px)</label>
            <input
              type="number"
              min={0}
              max={50}
              value={config.watermarkMargin ?? 10}
              onChange={(e) => update({ watermarkMargin: Number(e.target.value) })}
              className="w-20 px-2 py-1.5 rounded border border-[#E8E4DC] text-xs bg-white"
            />
          </div>
        </div>
      </Card>

      {/* Preview */}
      <Card className="bg-[#2D2D2D]">
        <h3 className="text-sm font-semibold text-white mb-3">Preview</h3>
        <div className="aspect-[9/16] max-w-[200px] mx-auto bg-[#1a1a1a] rounded-lg relative overflow-hidden border border-white/10">
          {/* Watermark preview */}
          {config.watermarkUrl && (
            <div
              className={`absolute ${
                config.watermarkPosition === "top-left" ? "top-2 left-2" :
                config.watermarkPosition === "top-right" ? "top-2 right-2" :
                config.watermarkPosition === "bottom-left" ? "bottom-2 left-2" :
                config.watermarkPosition === "center" ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" :
                "bottom-2 right-2"
              }`}
              style={{
                width: `${config.watermarkSize ?? 10}%`,
                opacity: (config.watermarkOpacity ?? 70) / 100,
              }}
            >
              <img src={config.watermarkUrl} alt="Watermark" className="w-full h-full object-contain" />
            </div>
          )}

          {/* Logo preview */}
          {config.logoUrl && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 opacity-30">
              <img src={config.logoUrl} alt="Logo" className="w-full h-full object-contain" />
            </div>
          )}

          {/* Color bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: config.primaryColor ?? "#E8725A" }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xs text-white/30">Clip Preview</p>
          </div>
        </div>
      </Card>

      <Button onClick={handleSave} disabled={saving} className="w-full">
        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save Branding Settings"}
      </Button>
    </div>
  );
}
