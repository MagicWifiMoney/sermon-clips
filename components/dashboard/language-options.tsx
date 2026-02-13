"use client";

import { Globe } from "lucide-react";
import { TierBadge } from "@/components/dashboard/plan-gate";
import type { LanguageConfig } from "@/types";

const LANGUAGES = [
  { code: "es", label: "Spanish" },
  { code: "pt", label: "Portuguese" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "ko", label: "Korean" },
  { code: "zh", label: "Chinese" },
  { code: "ja", label: "Japanese" },
  { code: "ar", label: "Arabic" },
];

interface LanguageOptionsProps {
  value: LanguageConfig;
  onChange: (config: LanguageConfig) => void;
}

export function LanguageOptions({ value, onChange }: LanguageOptionsProps) {
  const toggleLanguage = (code: string) => {
    const langs = value.targetLanguages.includes(code)
      ? value.targetLanguages.filter((l) => l !== code)
      : [...value.targetLanguages, code];
    onChange({ ...value, targetLanguages: langs });
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4 text-[#5c5c5c]" />
        <label className="text-sm font-medium text-[#2D2D2D]">Multi-Language</label>
        <TierBadge feature="multiLanguage" />
      </div>

      <label className="flex items-center gap-2.5 text-sm">
        <input
          type="checkbox"
          checked={value.translateCaptions}
          onChange={(e) => onChange({ ...value, translateCaptions: e.target.checked })}
          className="rounded border-[#E8E4DC] text-[#E8725A] focus:ring-[#E8725A]/50"
        />
        <span className="text-[#2D2D2D]">Translate captions</span>
      </label>

      <div className="flex flex-wrap gap-2">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => toggleLanguage(lang.code)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              value.targetLanguages.includes(lang.code)
                ? "bg-[#E8725A] text-white"
                : "bg-[#F5F1EB] text-[#2D2D2D] hover:bg-[#E8E4DC]"
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
