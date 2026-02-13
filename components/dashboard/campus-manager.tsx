"use client";

import { useState } from "react";
import useSWR from "swr";
import { toast } from "sonner";
import { Building2, Trash2, Plus, Crown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Campus {
  id: string;
  name: string;
  isDefault: boolean;
  createdAt: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function CampusManager() {
  const { data, error, isLoading, mutate } = useSWR<Campus[]>(
    "/api/campuses",
    fetcher
  );
  const [newName, setNewName] = useState("");
  const [creating, setCreating] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newName.trim();
    if (!trimmed) return;

    setCreating(true);
    try {
      const res = await fetch("/api/campuses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmed }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Failed to create campus");
      }
      toast.success(`Campus "${trimmed}" created`);
      setNewName("");
      mutate();
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to create campus"
      );
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/campuses/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete campus");
      toast.success(`Campus "${name}" deleted`);
      mutate();
    } catch {
      toast.error("Failed to delete campus");
    } finally {
      setDeletingId(null);
    }
  };

  if (isLoading) {
    return (
      <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
        <CardContent className="p-6">
          <div className="flex items-center justify-center py-8 text-[#2D2D2D]/50">
            Loading campuses...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
        <CardContent className="p-6">
          <div className="flex items-center justify-center py-8 text-red-500">
            Failed to load campuses
          </div>
        </CardContent>
      </Card>
    );
  }

  const campuses = data ?? [];

  return (
    <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
      <CardHeader>
        <CardTitle className="text-[#2D2D2D] flex items-center gap-2">
          <Building2 className="h-5 w-5 text-[#E8725A]" />
          Campus Management
        </CardTitle>
        <CardDescription className="text-[#2D2D2D]/60">
          Manage campuses for multi-site sermon organization
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 p-3 rounded-lg bg-[#E8725A]/5 border border-[#E8725A]/20">
          <Crown className="h-4 w-4 text-[#E8725A] shrink-0" />
          <p className="text-xs text-[#2D2D2D]/70">
            Multi-campus support is available on the Suite tier.
          </p>
        </div>

        <form onSubmit={handleCreate} className="flex gap-2">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="New campus name..."
            className="flex-1 px-3 py-2 text-sm rounded-md border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/30 focus:border-[#E8725A]"
          />
          <Button
            type="submit"
            disabled={!newName.trim() || creating}
            className="bg-[#E8725A] hover:bg-[#D4624D] text-white"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </form>

        {campuses.length === 0 ? (
          <div className="text-center py-6 text-[#2D2D2D]/50">
            <Building2 className="h-10 w-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No campuses configured</p>
          </div>
        ) : (
          <div className="space-y-2">
            {campuses.map((campus) => (
              <div
                key={campus.id}
                className="flex items-center justify-between gap-3 p-3 rounded-lg border border-[#E8E4DC] bg-white"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Building2 className="h-4 w-4 text-[#2D2D2D]/40 shrink-0" />
                  <span className="font-medium text-sm text-[#2D2D2D] truncate">
                    {campus.name}
                  </span>
                  {campus.isDefault && (
                    <Badge className="bg-[#E8725A]/10 text-[#E8725A] border-[#E8725A]/20 text-xs">
                      Default
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#2D2D2D]/40 hover:text-red-500 hover:bg-red-50 shrink-0"
                  onClick={() => handleDelete(campus.id, campus.name)}
                  disabled={deletingId === campus.id}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
