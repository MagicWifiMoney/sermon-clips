"use client";

import { useState } from "react";
import useSWR from "swr";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Save, ChevronDown, Trash2, Star } from "lucide-react";
import type { ProcessingTemplate, ProcessingOptions, PublishMode } from "@/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface TemplateSelectorProps {
  processingOptions: ProcessingOptions;
  publishMode: PublishMode;
  onLoad: (options: ProcessingOptions, publishMode: PublishMode) => void;
}

export function TemplateSelector({ processingOptions, publishMode, onLoad }: TemplateSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [showSaveInput, setShowSaveInput] = useState(false);

  const { data, mutate } = useSWR<{ data: ProcessingTemplate[] }>("/api/templates", fetcher);
  const templates = data?.data ?? [];

  const handleLoad = (template: ProcessingTemplate) => {
    const opts = template.processingOptions as unknown as ProcessingOptions;
    onLoad(opts, (template.publishMode as PublishMode) || "review");
    setShowDropdown(false);
    toast.success(`Loaded "${template.name}"`);
  };

  const handleSave = async () => {
    if (!saveName.trim()) return;
    setSaving(true);
    try {
      const res = await fetch("/api/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: saveName.trim(),
          processingOptions,
          publishMode,
        }),
      });
      if (!res.ok) throw new Error("Save failed");
      toast.success(`Template "${saveName}" saved`);
      setSaveName("");
      setShowSaveInput(false);
      mutate();
    } catch {
      toast.error("Failed to save template");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await fetch(`/api/templates/${id}`, { method: "DELETE" });
      toast.success("Template deleted");
      mutate();
    } catch {
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="relative flex items-center gap-2">
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-1.5 text-xs font-medium text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors"
        >
          <Star className="w-3.5 h-3.5" />
          Templates
          <ChevronDown className="w-3 h-3" />
        </button>

        {showDropdown && (
          <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg border border-[#E8E4DC] shadow-lg z-20 py-1">
            {templates.length === 0 ? (
              <p className="px-3 py-2 text-xs text-[#5c5c5c]">No saved templates</p>
            ) : (
              templates.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleLoad(t)}
                  className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-[#2D2D2D] hover:bg-[#F5F1EB] transition-colors"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium text-xs">{t.name}</p>
                    {t.isDefault && (
                      <span className="text-[10px] text-[#E8725A]">Default</span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => handleDelete(t.id, e)}
                    className="p-1 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-3 h-3 text-red-400" />
                  </button>
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {showSaveInput ? (
        <div className="flex items-center gap-1">
          <input
            type="text"
            value={saveName}
            onChange={(e) => setSaveName(e.target.value)}
            placeholder="Template name..."
            className="text-xs px-2 py-1 rounded border border-[#E8E4DC] bg-white w-32 outline-none focus:ring-1 focus:ring-[#E8725A]/50"
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleSave}
            disabled={saving || !saveName.trim()}
            className="text-xs h-6 px-2"
          >
            Save
          </Button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowSaveInput(true)}
          className="flex items-center gap-1 text-xs text-[#5c5c5c] hover:text-[#E8725A] transition-colors"
        >
          <Save className="w-3.5 h-3.5" />
          Save as template
        </button>
      )}
    </div>
  );
}
