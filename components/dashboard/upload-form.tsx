"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Youtube, Upload, FileVideo, ArrowRight, Loader2 } from "lucide-react";

export function UploadForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // YouTube tab state
  const [ytTitle, setYtTitle] = useState("");
  const [ytUrl, setYtUrl] = useState("");

  // Upload tab state
  const [uploadTitle, setUploadTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleYoutubeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ytTitle.trim() || !ytUrl.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/sermons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: ytTitle.trim(),
          sourceType: "youtube",
          sourceUrl: ytUrl.trim(),
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create sermon");
      }

      const { data } = await res.json();
      toast.success("Sermon submitted! Processing will begin shortly.");
      router.push(`/dashboard/sermons/${data.id}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
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
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create sermon");
      }

      const { data } = await res.json();

      // Step 2: Start upload (stub — Mosaic team implements)
      try {
        await fetch("/api/upload/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sermonId: data.id }),
        });
      } catch {
        // Expected to fail — stub not implemented
      }

      toast.success("Sermon created! Upload integration coming soon.");
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

  return (
    <Tabs defaultValue="youtube" className="space-y-6">
      <TabsList>
        <TabsTrigger value="youtube">
          <span className="flex items-center gap-2">
            <Youtube className="w-4 h-4" />
            YouTube Link
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
              <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">
                Sermon Title
              </label>
              <input
                type="text"
                value={ytTitle}
                onChange={(e) => setYtTitle(e.target.value)}
                placeholder="e.g. Sunday Sermon - Feb 9"
                className="w-full px-4 py-2.5 rounded-lg border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50 focus:border-[#E8725A]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">
                YouTube URL
              </label>
              <input
                type="url"
                value={ytUrl}
                onChange={(e) => setYtUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                className="w-full px-4 py-2.5 rounded-lg border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50 focus:border-[#E8725A]"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting || !ytTitle.trim() || !ytUrl.trim()}
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Start Processing
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </Card>
      </TabsContent>

      {/* Upload Tab */}
      <TabsContent value="upload">
        <Card>
          <form onSubmit={handleFileUpload} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">
                Sermon Title
              </label>
              <input
                type="text"
                value={uploadTitle}
                onChange={(e) => setUploadTitle(e.target.value)}
                placeholder="e.g. Sunday Sermon - Feb 9"
                className="w-full px-4 py-2.5 rounded-lg border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50 focus:border-[#E8725A]"
                required
              />
            </div>

            {/* Drop zone */}
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
                  <p className="text-xs text-[#5c5c5c]">
                    {(file.size / (1024 * 1024)).toFixed(1)} MB
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="w-10 h-10 text-[#5c5c5c]/50 mx-auto" />
                  <p className="text-sm text-[#5c5c5c]">
                    Drag & drop your video file here
                  </p>
                  <p className="text-xs text-[#5c5c5c]/70">
                    or click to browse
                  </p>
                  <p className="text-xs text-[#5c5c5c]/50 mt-2">
                    MP4, MOV, AVI &middot; Max 5GB
                  </p>
                </div>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting || !uploadTitle.trim() || !file}
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Upload & Process
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
