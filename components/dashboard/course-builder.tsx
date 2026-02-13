"use client";

import { useState } from "react";
import useSWR from "swr";
import { toast } from "sonner";
import {
  GraduationCap,
  BookOpen,
  Loader2,
  MessageSquare,
  Film,
  ChevronDown,
  ChevronRight,
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

interface CourseClip {
  id: string;
  title: string;
  duration?: number;
}

interface CourseModule {
  week: number;
  title: string;
  summary: string;
  scriptureRefs: string[];
  discussionQuestions: string[];
  clips: CourseClip[];
}

interface Course {
  id: string;
  title: string;
  modules: CourseModule[];
  createdAt: string;
}

interface CourseBuilderProps {
  seriesId: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function CourseBuilder({ seriesId }: CourseBuilderProps) {
  const { data, error, isLoading, mutate } = useSWR<Course | null>(
    `/api/series/${seriesId}/course`,
    fetcher
  );
  const [generating, setGenerating] = useState(false);
  const [expandedWeeks, setExpandedWeeks] = useState<Set<number>>(new Set());

  const toggleWeek = (week: number) => {
    setExpandedWeeks((prev) => {
      const next = new Set(prev);
      if (next.has(week)) {
        next.delete(week);
      } else {
        next.add(week);
      }
      return next;
    });
  };

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch(`/api/series/${seriesId}/course`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Failed to generate course");
      toast.success("Course generation started");
      mutate();
    } catch {
      toast.error("Failed to generate course");
    } finally {
      setGenerating(false);
    }
  };

  if (isLoading) {
    return (
      <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
        <CardContent className="p-6">
          <div className="flex items-center justify-center py-8 text-[#2D2D2D]/50">
            Loading course data...
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
            Failed to load course data
          </div>
        </CardContent>
      </Card>
    );
  }

  const course = data;

  return (
    <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
      <CardHeader>
        <CardTitle className="text-[#2D2D2D] flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-[#E8725A]" />
          Course Builder
        </CardTitle>
        <CardDescription className="text-[#2D2D2D]/60">
          Generate a structured course from this sermon series
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!course ? (
          /* No course yet - show generate button */
          <div className="text-center py-8">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-[#2D2D2D]/20" />
            <p className="text-sm text-[#2D2D2D]/60 mb-4">
              No course has been generated for this series yet. Generate one to
              create weekly modules with discussion questions and linked clips.
            </p>
            <Button
              onClick={handleGenerate}
              disabled={generating}
              className="bg-[#E8725A] hover:bg-[#D4624D] text-white"
            >
              {generating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating Course...
                </>
              ) : (
                <>
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Generate Course
                </>
              )}
            </Button>
          </div>
        ) : (
          /* Course exists - show modules */
          <div className="space-y-3">
            {course.title && (
              <h3 className="font-semibold text-lg text-[#2D2D2D]">
                {course.title}
              </h3>
            )}

            {course.modules.map((module) => {
              const isExpanded = expandedWeeks.has(module.week);

              return (
                <div
                  key={module.week}
                  className="border border-[#E8E4DC] rounded-lg overflow-hidden bg-white"
                >
                  {/* Module header */}
                  <button
                    onClick={() => toggleWeek(module.week)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F5F1EB]/50 transition-colors text-left"
                  >
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-[#2D2D2D]/40 shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-[#2D2D2D]/40 shrink-0" />
                    )}
                    <Badge className="bg-[#E8725A]/10 text-[#E8725A] border-[#E8725A]/20 text-xs shrink-0">
                      Week {module.week}
                    </Badge>
                    <span className="flex-1 font-medium text-sm text-[#2D2D2D] truncate">
                      {module.title}
                    </span>
                  </button>

                  {/* Module content */}
                  {isExpanded && (
                    <div className="border-t border-[#E8E4DC] px-4 py-4 space-y-4">
                      {/* Summary */}
                      <p className="text-sm text-[#2D2D2D]/70">
                        {module.summary}
                      </p>

                      {/* Scripture refs */}
                      {module.scriptureRefs.length > 0 && (
                        <div className="space-y-1.5">
                          <h5 className="text-xs font-medium text-[#2D2D2D]/50 uppercase tracking-wide flex items-center gap-1.5">
                            <BookOpen className="h-3.5 w-3.5" />
                            Scripture References
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {module.scriptureRefs.map((ref) => (
                              <Badge
                                key={ref}
                                variant="secondary"
                                className="bg-[#F5F1EB] text-[#2D2D2D]/70 border-[#E8E4DC] text-xs"
                              >
                                {ref}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Discussion questions */}
                      {module.discussionQuestions.length > 0 && (
                        <div className="space-y-1.5">
                          <h5 className="text-xs font-medium text-[#2D2D2D]/50 uppercase tracking-wide flex items-center gap-1.5">
                            <MessageSquare className="h-3.5 w-3.5" />
                            Discussion Questions
                          </h5>
                          <ol className="space-y-1.5 pl-4">
                            {module.discussionQuestions.map((q, i) => (
                              <li
                                key={i}
                                className="text-sm text-[#2D2D2D]/70 list-decimal"
                              >
                                {q}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Linked clips */}
                      {module.clips.length > 0 && (
                        <div className="space-y-1.5">
                          <h5 className="text-xs font-medium text-[#2D2D2D]/50 uppercase tracking-wide flex items-center gap-1.5">
                            <Film className="h-3.5 w-3.5" />
                            Linked Clips
                          </h5>
                          <div className="space-y-1">
                            {module.clips.map((clip) => (
                              <div
                                key={clip.id}
                                className="flex items-center gap-2 px-3 py-2 rounded border border-[#E8E4DC] bg-[#F5F1EB]/50"
                              >
                                <Film className="h-3.5 w-3.5 text-[#E8725A] shrink-0" />
                                <span className="text-sm text-[#2D2D2D] truncate flex-1">
                                  {clip.title}
                                </span>
                                {clip.duration && (
                                  <span className="text-xs text-[#2D2D2D]/40 shrink-0">
                                    {Math.floor(clip.duration / 60)}:
                                    {String(clip.duration % 60).padStart(2, "0")}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
