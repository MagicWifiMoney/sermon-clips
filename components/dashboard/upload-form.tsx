"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProcessingOptionsPanel, DEFAULT_PROCESSING_OPTIONS } from "@/components/dashboard/processing-options";
import { Youtube, Upload, FileVideo, ArrowRight, Loader2, Link as LinkIcon } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { TemplateSelector } from "@/components/dashboard/template-selector";
import { SeriesSelector } from "@/components/dashboard/series-selector";
import type { ProcessingOptions, PublishMode } from "@/types";

export function UploadForm() {
  const router = useRouter();
  const posthog = usePostHog();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // YouTube tab state
  const [ytTitle, setYtTitle] = useState("");
  const [ytUrl, setYtUrl] = useState("");

  // URL tab state
  const [urlTitle, setUrlTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  // Upload tab state
  const [uploadTitle, setUploadTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Shared processing options
  const [processingOptions, setProcessingOptions] = useState<ProcessingOptions>(DEFAULT_PROCESSING_OPTIONS);
  const [publishMode, setPublishMode] = useState<PublishMode>("review");
  const [seriesId, setSeriesId] = useState<string | null>(null);

  const submitSermon = async (title: string, sourceType: string, sourceUrl?: string) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/sermons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          sourceType,
          sourceUrl: sourceUrl?.trim(),
          processingOptions,
          publishMode,
          seriesId: seriesId || undefined,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create sermon");
      }

      const { data } = await res.json();
      posthog.capture("sermon_created", { source_type: sourceType, has_processing_options: !!processingOptions, publish_mode: publishMode });
      toast.success("Sermon submitted! Processing will begin shortly.");
      router.push(`/dashboard/sermons/${data.id}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleYoutubeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ytTitle.trim() || !ytUrl.trim()) return;
    await submitSermon(ytTitle, "youtube", ytUrl);
  };

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlTitle.trim() || !videoUrl.trim()) return;
    await submitSermon(urlTitle, "url", videoUrl);
  };

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadTitle.trim() || !file) return;

    setIsSubmitting(true);
    try {
      // Step 1: Create sermon record
      const res = await fetch("/api/sermons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: uploadTitle.trim(),
          sourceType: "upload",
          processingOptions,
          publishMode,
          seriesId: seriesId || undefined,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create sermon");
      }

      const { data } = await res.json();

      // Step 2: Get signed upload URL from Mosaic
      const startRes = await fetch("/api/upload/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sermonId: data.id }),
      });

      if (!startRes.ok) {
        throw new Error("Failed to get upload URL");
      }

      const { uploadUrl, uploadFields, videoId } = await startRes.json();

      // Step 3: Upload file directly to Mosaic's signed URL
      const formData = new FormData();
      if (uploadFields) {
        Object.entries(uploadFields).forEach(([key, value]) => {
          formData.append(key, value as string);
        });
      }
      formData.append("file", file);

      const uploadRes = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) {
        throw new Error("File upload failed");
      }

      // Step 4: Finalize upload + trigger processing
      const finalizeRes = await fetch("/api/upload/finalize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sermonId: data.id, videoId }),
      });

      if (!finalizeRes.ok) {
        throw new Error("Failed to finalize upload");
      }

      posthog.capture("sermon_created", { source_type: "upload", file_size_mb: +(file.size / (1024 * 1024)).toFixed(1), publish_mode: publishMode });
      toast.success("Video uploaded! Processing has started.");
      router.push(`/dashboard/sermons/${data.id}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && dropped.type.startsWith("video/")) {
      setFile(dropped);
    } else {
      toast.error("Please drop a video file (MP4, MOV, AVI)");
    }
  }, []);

  const inputClasses = "w-full px-4 py-2.5 rounded-lg border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50 focus:border-[#E8725A]";

  return (
    <div className="space-y-6">
      <Tabs defaultValue="youtube" className="space-y-6">
        <TabsList>
          <TabsTrigger value="youtube">
            <span className="flex items-center gap-2">
              <Youtube className="w-4 h-4" />
              YouTube Link
            </span>
          </TabsTrigger>
          <TabsTrigger value="url">
            <span className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4" />
              Video URL
            </span>
          </TabsTrigger>
          <TabsTrigger value="upload">
            <span className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload File
            </span>
          </TabsTrigger>
        </TabsList>

        {/* YouTube Tab */}
        <TabsContent value="youtube">
          <Card>
            <form onSubmit={handleYoutubeSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Sermon Title</label>
                <input
                  type="text"
                  value={ytTitle}
                  onChange={(e) => setYtTitle(e.target.value)}
                  placeholder="e.g. Sunday Sermon - Feb 9"
                  className={inputClasses}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">YouTube URL</label>
                <input
                  type="url"
                  value={ytUrl}
                  onChange={(e) => setYtUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                  className={inputClasses}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !ytTitle.trim() || !ytUrl.trim()}>
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span>Start Processing</span><ArrowRight className="w-5 h-5" /></>}
              </Button>
            </form>
          </Card>
        </TabsContent>

        {/* Video URL Tab */}
        <TabsContent value="url">
          <Card>
            <form onSubmit={handleUrlSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Sermon Title</label>
                <input
                  type="text"
                  value={urlTitle}
                  onChange={(e) => setUrlTitle(e.target.value)}
                  placeholder="e.g. Sunday Sermon - Feb 9"
                  className={inputClasses}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Video URL</label>
                <input
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="Vimeo, Dropbox, Google Drive link..."
                  className={inputClasses}
                  required
                />
                <p className="text-xs text-[#5c5c5c] mt-1">Supports Vimeo, Dropbox, and Google Drive links</p>
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !urlTitle.trim() || !videoUrl.trim()}>
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span>Start Processing</span><ArrowRight className="w-5 h-5" /></>}
              </Button>
            </form>
          </Card>
        </TabsContent>

        {/* Upload Tab */}
        <TabsContent value="upload">
          <Card>
            <form onSubmit={handleFileUpload} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Sermon Title</label>
                <input
                  type="text"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="e.g. Sunday Sermon - Feb 9"
                  className={inputClasses}
                  required
                />
              </div>

              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
                  dragOver
                    ? "border-[#E8725A] bg-[#E8725A]/5"
                    : file
                    ? "border-green-400 bg-green-50"
                    : "border-[#E8E4DC] hover:border-[#E8725A]/50"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) setFile(f);
                  }}
                />
                {file ? (
                  <div className="space-y-2">
                    <FileVideo className="w-10 h-10 text-green-500 mx-auto" />
                    <p className="text-sm font-medium text-[#2D2D2D]">{file.name}</p>
                    <p className="text-xs text-[#5c5c5c]">{(file.size / (1024 * 1024)).toFixed(1)} MB</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="w-10 h-10 text-[#5c5c5c]/50 mx-auto" />
                    <p className="text-sm text-[#5c5c5c]">Drag & drop your video file here</p>
                    <p className="text-xs text-[#5c5c5c]/70">or click to browse</p>
                    <p className="text-xs text-[#5c5c5c]/50 mt-2">MP4, MOV, AVI &middot; Max 5GB</p>
                  </div>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !uploadTitle.trim() || !file}>
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span>Upload & Process</span><ArrowRight className="w-5 h-5" /></>}
              </Button>
            </form>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Template + Series Selectors */}
      <div className="flex items-center gap-4 flex-wrap">
        <TemplateSelector
          processingOptions={processingOptions}
          publishMode={publishMode}
          onLoad={(opts, pm) => { setProcessingOptions(opts); setPublishMode(pm); }}
        />
        <SeriesSelector value={seriesId} onChange={setSeriesId} />
      </div>

      {/* Processing Options (shared across all tabs) */}
      <ProcessingOptionsPanel
        value={processingOptions}
        onChange={setProcessingOptions}
        publishMode={publishMode}
        onPublishModeChange={setPublishMode}
      />
    </div>
  );
}
