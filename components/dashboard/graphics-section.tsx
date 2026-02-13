"use client";

import { useState } from "react";
import useSWR from "swr";
import { toast } from "sonner";
import {
  Image,
  Quote,
  Layout,
  Layers,
  Loader2,
  Download,
  Plus,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type GraphicType = "quote_card" | "thumbnail" | "carousel";

interface Graphic {
  id: string;
  type: GraphicType;
  url: string;
  title?: string;
  createdAt: string;
}

interface GraphicsSectionProps {
  sermonId: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const graphicTypeConfig: Record<
  GraphicType,
  { label: string; icon: React.ReactNode; buttonLabel: string }
> = {
  quote_card: {
    label: "Quote Card",
    icon: <Quote className="h-4 w-4" />,
    buttonLabel: "Generate Quote Card",
  },
  thumbnail: {
    label: "Thumbnail",
    icon: <Image className="h-4 w-4" />,
    buttonLabel: "Generate Thumbnail",
  },
  carousel: {
    label: "Carousel",
    icon: <Layers className="h-4 w-4" />,
    buttonLabel: "Generate Carousel",
  },
};

export function GraphicsSection({ sermonId }: GraphicsSectionProps) {
  const { data, error, isLoading, mutate } = useSWR<Graphic[]>(
    `/api/sermons/${sermonId}/graphics`,
    fetcher
  );
  const [generatingType, setGeneratingType] = useState<GraphicType | null>(
    null
  );

  const handleGenerate = async (type: GraphicType) => {
    setGeneratingType(type);
    try {
      const res = await fetch(`/api/sermons/${sermonId}/graphics`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type }),
      });
      if (!res.ok) throw new Error("Failed to generate graphic");
      toast.success(`${graphicTypeConfig[type].label} generation started`);
      mutate();
    } catch {
      toast.error(`Failed to generate ${graphicTypeConfig[type].label.toLowerCase()}`);
    } finally {
      setGeneratingType(null);
    }
  };

  if (isLoading) {
    return (
      <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
        <CardContent className="p-6">
          <div className="flex items-center justify-center py-8 text-[#2D2D2D]/50">
            Loading graphics...
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
            Failed to load graphics
          </div>
        </CardContent>
      </Card>
    );
  }

  const graphics = data ?? [];

  const graphicsByType: Record<GraphicType, Graphic[]> = {
    quote_card: graphics.filter((g) => g.type === "quote_card"),
    thumbnail: graphics.filter((g) => g.type === "thumbnail"),
    carousel: graphics.filter((g) => g.type === "carousel"),
  };

  return (
    <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
      <CardHeader>
        <CardTitle className="text-[#2D2D2D] flex items-center gap-2">
          <Layout className="h-5 w-5 text-[#E8725A]" />
          Graphics
        </CardTitle>
        <CardDescription className="text-[#2D2D2D]/60">
          Quote cards, thumbnails, and carousels for this sermon
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Generate buttons */}
        <div className="flex flex-wrap gap-2">
          {(Object.entries(graphicTypeConfig) as [GraphicType, typeof graphicTypeConfig.quote_card][]).map(
            ([type, config]) => (
              <Button
                key={type}
                variant="secondary"
                size="sm"
                onClick={() => handleGenerate(type)}
                disabled={generatingType !== null}
                className="border-[#E8E4DC] text-[#2D2D2D]/70 hover:border-[#E8725A] hover:text-[#E8725A]"
              >
                {generatingType === type ? (
                  <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
                ) : (
                  <Plus className="h-4 w-4 mr-1.5" />
                )}
                {config.buttonLabel}
              </Button>
            )
          )}
        </div>

        {/* Graphics grid by type */}
        {(Object.entries(graphicTypeConfig) as [GraphicType, typeof graphicTypeConfig.quote_card][]).map(
          ([type, config]) => {
            const items = graphicsByType[type];
            if (items.length === 0) return null;

            return (
              <div key={type} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#E8725A]">{config.icon}</span>
                  <h4 className="text-sm font-medium text-[#2D2D2D]">
                    {config.label}s
                  </h4>
                  <Badge
                    variant="secondary"
                    className="bg-[#F5F1EB] text-[#2D2D2D]/60 border-[#E8E4DC] text-xs"
                  >
                    {items.length}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {items.map((graphic) => (
                    <div
                      key={graphic.id}
                      className="group relative rounded-lg border border-[#E8E4DC] bg-white overflow-hidden"
                    >
                      <div className="aspect-video bg-[#E8E4DC]/30 flex items-center justify-center">
                        {graphic.url ? (
                          <img
                            src={graphic.url}
                            alt={graphic.title ?? config.label}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-[#2D2D2D]/20">
                            {config.icon}
                          </span>
                        )}
                      </div>
                      {graphic.title && (
                        <p className="px-2 py-1.5 text-xs text-[#2D2D2D]/70 truncate">
                          {graphic.title}
                        </p>
                      )}
                      {/* Download overlay */}
                      {graphic.url && (
                        <a
                          href={graphic.url}
                          download
                          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Download className="h-5 w-5 text-white" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        )}

        {graphics.length === 0 && (
          <div className="text-center py-6 text-[#2D2D2D]/50">
            <Image className="h-10 w-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No graphics generated yet</p>
            <p className="text-xs mt-1">
              Generate quote cards, thumbnails, or carousels above
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
