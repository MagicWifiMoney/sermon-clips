"use client";

import { useState } from "react";
import useSWR from "swr";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Layers, Loader2 } from "lucide-react";
import type { SermonSeries } from "@/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function SeriesManager() {
  const { data, mutate } = useSWR<{ data: SermonSeries[] }>("/api/series", fetcher);
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const series = data?.data ?? [];

  const handleCreate = async () => {
    if (!name.trim()) return;
    setCreating(true);
    try {
      const res = await fetch("/api/series", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), description: description.trim() || undefined }),
      });
      if (!res.ok) throw new Error("Create failed");
      toast.success(`Series "${name}" created`);
      setName("");
      setDescription("");
      setShowForm(false);
      mutate();
    } catch {
      toast.error("Failed to create series");
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id: string, seriesName: string) => {
    try {
      const res = await fetch(`/api/series/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      toast.success(`"${seriesName}" deleted`);
      mutate();
    } catch {
      toast.error("Failed to delete series");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-[#2D2D2D]">Sermon Series</h3>
          <p className="text-xs text-[#5c5c5c]">Organize sermons into multi-week series</p>
        </div>
        <Button size="sm" variant="secondary" onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4" />
          New Series
        </Button>
      </div>

      {showForm && (
        <Card className="p-4 space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Series name..."
            className="w-full text-sm px-3 py-2 rounded-lg border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 outline-none focus:ring-1 focus:ring-[#E8725A]/50"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)..."
            rows={2}
            className="w-full text-sm px-3 py-2 rounded-lg border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 outline-none focus:ring-1 focus:ring-[#E8725A]/50 resize-none"
          />
          <div className="flex gap-2">
            <Button size="sm" onClick={handleCreate} disabled={creating || !name.trim()}>
              {creating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Create"}
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
          </div>
        </Card>
      )}

      {series.length === 0 ? (
        <div className="text-center py-8">
          <Layers className="w-8 h-8 text-[#5c5c5c]/30 mx-auto mb-2" />
          <p className="text-xs text-[#5c5c5c]">No series yet</p>
        </div>
      ) : (
        <div className="space-y-2">
          {series.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-[#E8E4DC] bg-white"
            >
              <div>
                <p className="text-sm font-medium text-[#2D2D2D]">{s.name}</p>
                {s.description && (
                  <p className="text-xs text-[#5c5c5c] mt-0.5">{s.description}</p>
                )}
              </div>
              <button
                onClick={() => handleDelete(s.id, s.name)}
                className="p-1.5 rounded hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-4 h-4 text-red-400" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
