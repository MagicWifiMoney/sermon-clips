"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus, Trash2, Loader2, Zap } from "lucide-react";
import type { SocialPlatform, DripSlot } from "@/types";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const PLATFORMS: { value: SocialPlatform; label: string }[] = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "tiktok", label: "TikTok" },
  { value: "youtube", label: "YouTube" },
  { value: "x", label: "X" },
  { value: "linkedin", label: "LinkedIn" },
];

interface DripScheduleProps {
  sermonId: string;
}

export function DripSchedule({ sermonId }: DripScheduleProps) {
  const [slots, setSlots] = useState<DripSlot[]>([]);
  const [saving, setSaving] = useState(false);

  const addSlot = () => {
    setSlots([...slots, { day: "Monday", time: "09:00", platform: "instagram" }]);
  };

  const updateSlot = (index: number, updates: Partial<DripSlot>) => {
    setSlots(slots.map((s, i) => (i === index ? { ...s, ...updates } : s)));
  };

  const removeSlot = (index: number) => {
    setSlots(slots.filter((_, i) => i !== index));
  };

  const applyPreset = () => {
    setSlots([
      { day: "Monday", time: "09:00", platform: "instagram" },
      { day: "Wednesday", time: "09:00", platform: "tiktok" },
      { day: "Friday", time: "09:00", platform: "facebook" },
    ]);
    toast.success("Applied Mon/Wed/Fri preset");
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sermonId, slots }),
      });
      if (!res.ok) throw new Error("Failed to save schedule");
      toast.success("Drip schedule saved!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#E8725A]" />
            <h3 className="text-sm font-semibold text-[#2D2D2D]">Drip Schedule</h3>
          </div>
          <Button variant="ghost" size="sm" onClick={applyPreset}>
            <Zap className="w-3.5 h-3.5" />
            Mon/Wed/Fri Preset
          </Button>
        </div>

        {/* Week overview */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {DAYS.map((day) => {
            const daySlots = slots.filter((s) => s.day === day);
            return (
              <div key={day} className="text-center">
                <p className="text-[10px] text-[#5c5c5c] mb-1">{day.slice(0, 3)}</p>
                <div
                  className={`h-10 rounded-lg flex items-center justify-center ${
                    daySlots.length > 0
                      ? "bg-[#E8725A]/10 border border-[#E8725A]/30"
                      : "bg-[#F5F1EB]/50 border border-[#E8E4DC]"
                  }`}
                >
                  {daySlots.length > 0 && (
                    <span className="text-xs font-medium text-[#E8725A]">{daySlots.length}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Slot list */}
        <div className="space-y-2">
          {slots.map((slot, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#E8E4DC] bg-white"
            >
              <select
                value={slot.day}
                onChange={(e) => updateSlot(i, { day: e.target.value })}
                className="px-2 py-1.5 rounded-md border border-[#E8E4DC] text-xs bg-white text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
              >
                {DAYS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>

              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#5c5c5c]" />
                <input
                  type="time"
                  value={slot.time}
                  onChange={(e) => updateSlot(i, { time: e.target.value })}
                  className="px-2 py-1.5 rounded-md border border-[#E8E4DC] text-xs bg-white text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
                />
              </div>

              <select
                value={slot.platform}
                onChange={(e) => updateSlot(i, { platform: e.target.value as SocialPlatform })}
                className="px-2 py-1.5 rounded-md border border-[#E8E4DC] text-xs bg-white text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
              >
                {PLATFORMS.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>

              <button
                onClick={() => removeSlot(i)}
                className="ml-auto p-1 text-[#5c5c5c] hover:text-red-500 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-3">
          <Button variant="secondary" size="sm" onClick={addSlot}>
            <Plus className="w-3.5 h-3.5" />
            Add Slot
          </Button>
          {slots.length > 0 && (
            <Button size="sm" onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Save Schedule"}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
