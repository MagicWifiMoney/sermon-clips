import { UploadForm } from "@/components/dashboard/upload-form";

export default function UploadPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Upload a Sermon</h1>
        <p className="text-[#5c5c5c] mt-1">
          Paste a YouTube link or upload a video file to create clips
        </p>
      </div>
      <UploadForm />
    </div>
  );
}
