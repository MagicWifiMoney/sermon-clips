"use client";

import { useState } from "react";
import useSWR from "swr";
import { toast } from "sonner";
import { FileText, Trash2, Clock, Film, MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TemplateOptions {
  clipCount?: number;
  maxDuration?: number;
  captionStyle?: string;
  formats?: string[];
  bRoll?: boolean;
  music?: boolean;
  eyeContact?: boolean;
}

interface Template {
  id: string;
  name: string;
  description: string | null;
  options: TemplateOptions;
  createdAt: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function TemplateManager() {
  const { data, error, isLoading, mutate } = useSWR<Template[]>(
    "/api/templates",
    fetcher
  );
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string, name: string) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/templates/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete template");
      toast.success(`Template "${name}" deleted`);
      mutate();
    } catch {
      toast.error("Failed to delete template");
    } finally {
      setDeletingId(null);
    }
  };

  const formatOptionsSummary = (options: TemplateOptions): string[] => {
    const parts: string[] = [];
    if (options.clipCount) parts.push(`${options.clipCount} clips`);
    if (options.maxDuration) parts.push(`${options.maxDuration}s max`);
    if (options.captionStyle) parts.push(options.captionStyle + " captions");
    if (options.formats?.length) parts.push(options.formats.join(", "));
    if (options.bRoll) parts.push("B-roll");
    if (options.music) parts.push("Music");
    if (options.eyeContact) parts.push("Eye contact");
    return parts;
  };

  if (isLoading) {
    return (
      <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
        <CardContent className="p-6">
          <div className="flex items-center justify-center py-8 text-[#2D2D2D]/50">
            Loading templates...
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
            Failed to load templates
          </div>
        </CardContent>
      </Card>
    );
  }

  const templates = data ?? [];

  return (
    <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
      <CardHeader>
        <CardTitle className="text-[#2D2D2D] flex items-center gap-2">
          <FileText className="h-5 w-5 text-[#E8725A]" />
          Processing Templates
        </CardTitle>
        <CardDescription className="text-[#2D2D2D]/60">
          Saved processing configurations for quick reuse
        </CardDescription>
      </CardHeader>
      <CardContent>
        {templates.length === 0 ? (
          <div className="text-center py-8 text-[#2D2D2D]/50">
            <FileText className="h-10 w-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No templates yet</p>
            <p className="text-xs mt-1">
              Save a processing configuration to create your first template
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {templates.map((template) => {
              const summaryParts = formatOptionsSummary(template.options);
              return (
                <div
                  key={template.id}
                  className="flex items-start justify-between gap-4 p-4 rounded-lg border border-[#E8E4DC] bg-white"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-[#2D2D2D] truncate">
                      {template.name}
                    </h4>
                    {template.description && (
                      <p className="text-sm text-[#2D2D2D]/60 mt-0.5 line-clamp-2">
                        {template.description}
                      </p>
                    )}
                    {summaryParts.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {summaryParts.map((part) => (
                          <Badge
                            key={part}
                            variant="secondary"
                            className="bg-[#F5F1EB] text-[#2D2D2D]/70 border-[#E8E4DC] text-xs"
                          >
                            {part}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#2D2D2D]/40 hover:text-red-500 hover:bg-red-50 shrink-0"
                    onClick={() => handleDelete(template.id, template.name)}
                    disabled={deletingId === template.id}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
