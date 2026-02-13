"use client";

import { useRouter } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Confetti } from "./confetti";

export function CelebrationScreen({ churchName }: { churchName?: string }) {
  const router = useRouter();

  return (
    <div className="text-center space-y-6">
      <Confetti />

      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-10 h-10 text-green-600" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#2D2D2D]">
          You&apos;re all set{churchName ? `, ${churchName}` : ""}!
        </h2>
        <p className="text-[#5c5c5c] max-w-sm mx-auto">
          Your first sermon is completely free. Let&apos;s turn it into scroll-stopping clips.
        </p>
      </div>

      <button
        onClick={() => router.push("/dashboard?welcome=true")}
        className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium text-base transition-all hover:shadow-xl hover:shadow-[#E8725A]/30"
      >
        Clip My First Sermon (Free)
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
