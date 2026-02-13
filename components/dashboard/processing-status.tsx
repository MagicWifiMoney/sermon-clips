"use client";

import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle, RefreshCw, Mail } from "lucide-react";
import type { SermonStatus } from "@/types";

interface ProcessingStatusProps {
  status: SermonStatus;
  progress: number;
  errorMessage?: string | null;
  onRetry?: () => void;
}

const statusMessages: Record<string, string[]> = {
  UPLOADING: ["Uploading your sermon...", "Preparing your video for processing"],
  PENDING: ["Queued for processing", "Your sermon will begin processing shortly"],
  PROCESSING: [
    "Analyzing your sermon...",
    "Transcribing your message",
    "Finding clip-worthy moments",
    "Extracting the best clips",
    "Adding captions and formatting",
    "Almost done...",
  ],
};

export function ProcessingStatus({ status, progress, errorMessage, onRetry }: ProcessingStatusProps) {
  if (status === "FAILED") {
    return (
      <Card className="text-center py-12">
        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-7 h-7 text-red-500" />
        </div>
        <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Processing Failed</h3>
        <p className="text-[#5c5c5c] mb-6 max-w-sm mx-auto">
          {errorMessage || "Something went wrong while processing your sermon."}
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button variant="secondary" onClick={onRetry}>
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Button
            variant="ghost"
            onClick={() => window.location.href = "mailto:support@sermon-clips.com"}
          >
            <Mail className="w-4 h-4" />
            Contact Support
          </Button>
        </div>
      </Card>
    );
  }

  const messages = statusMessages[status] ?? statusMessages.PROCESSING;
  // Rotate message based on progress
  const msgIndex = Math.min(
    Math.floor((progress / 100) * messages.length),
    messages.length - 1
  );

  return (
    <Card className="text-center py-12">
      <div className="w-14 h-14 rounded-full bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-4">
        <Loader2 className="w-7 h-7 text-[#E8725A] animate-spin" />
      </div>
      <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">
        Processing your sermon...
      </h3>
      <p className="text-sm text-[#5c5c5c] mb-6">{messages[msgIndex]}</p>
      <div className="max-w-sm mx-auto">
        <ProgressBar value={progress} />
      </div>
    </Card>
  );
}
