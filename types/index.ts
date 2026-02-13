import type { Sermon, Clip, User, SermonStatus } from "@prisma/client";

export type { Sermon, Clip, User, SermonStatus };

export type SermonWithClips = Sermon & {
  clips: Clip[];
};

export type SermonWithUser = Sermon & {
  user: User;
};

export type DashboardStats = {
  totalSermons: number;
  totalClips: number;
  processingCount: number;
};

export type CreateSermonInput = {
  title: string;
  sourceType: "youtube" | "upload";
  sourceUrl?: string;
};

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};
