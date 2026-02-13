import type { Sermon, Clip, User, SermonStatus, SocialAccount, ClipPublication, ClipAnalytics, ScheduledPost } from "@prisma/client";

export type { Sermon, Clip, User, SermonStatus, SocialAccount, ClipPublication, ClipAnalytics, ScheduledPost };

export type SermonWithClips = Sermon & {
  clips: Clip[];
};

export type SermonWithUser = Sermon & {
  user: User;
};

export type ClipWithPublications = Clip & {
  publications: ClipPublication[];
};

export type SermonWithClipsAndPublications = Sermon & {
  clips: ClipWithPublications[];
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
  processingOptions?: ProcessingOptions;
  publishMode?: PublishMode;
};

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};

// --- Processing Options ---

export type ProcessingOptions = {
  clipCount: number;
  clipDuration: "short" | "medium" | "long";
  captionStyle: "none" | "standard" | "cinematic" | "with-emojis";
  outputFormats: OutputFormat[];
  features: ProcessingFeatures;
  applyBranding: boolean;
};

export type OutputFormat = "vertical" | "landscape" | "square";

export type ProcessingFeatures = {
  silenceRemoval?: boolean;
  audioEnhancement?: boolean;
  colorCorrection?: boolean;
  aiBackgroundMusic?: boolean;
  aiBRoll?: boolean;
  motionGraphics?: boolean;
};

export type PublishMode = "auto" | "review" | "draft";

// --- Branding ---

export type BrandingConfig = {
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  introVideoUrl?: string;
  outroVideoUrl?: string;
  watermarkUrl?: string;
  watermarkPosition?: WatermarkPosition;
};

export type WatermarkPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

// --- YouTube Channel ---

export type YouTubeChannelConfig = {
  channelId: string;
  channelUrl: string;
  channelName: string;
  thumbnailUrl?: string;
  subscriberCount?: number;
  autoProcess: boolean;
  defaultProcessingOptions?: ProcessingOptions;
};

// --- Social Publishing ---

export type SocialPlatform = "tiktok" | "instagram" | "youtube" | "facebook" | "x" | "linkedin";

export type DripSchedule = {
  enabled: boolean;
  slots: DripSlot[];
};

export type DripSlot = {
  day: string;
  time: string;
  platform: SocialPlatform;
};

export type PublicationStatus = "draft" | "scheduled" | "publishing" | "published" | "failed";

// --- Plans ---

export type PlanTier = "starter" | "growth" | "automation" | "professional" | "suite";

export const PLAN_LIMITS: Record<PlanTier, { clipCount: number; formats: number; features: string[] }> = {
  starter: { clipCount: 3, formats: 1, features: [] },
  growth: { clipCount: 5, formats: 3, features: ["reframe"] },
  automation: { clipCount: 10, formats: 3, features: ["reframe", "youtubeAutoSync", "socialPublishing", "dripScheduling", "aiCaptions"] },
  professional: { clipCount: 15, formats: 3, features: ["reframe", "youtubeAutoSync", "socialPublishing", "dripScheduling", "aiCaptions", "branding", "audioEnhancement", "silenceRemoval", "analytics"] },
  suite: { clipCount: 15, formats: 3, features: ["reframe", "youtubeAutoSync", "socialPublishing", "dripScheduling", "aiCaptions", "branding", "audioEnhancement", "silenceRemoval", "analytics", "aiAvatar", "multiCampus", "batchProcessing", "apiAccess"] },
};

// --- Analytics ---

export type AnalyticsSummary = {
  totalViews: number;
  engagementRate: number;
  topPlatform: SocialPlatform | null;
  bestClipId: string | null;
  bestClipTitle: string | null;
};

export type ClipPerformanceRow = {
  clipId: string;
  clipTitle: string;
  sermonTitle: string;
  platforms: SocialPlatform[];
  views: number;
  likes: number;
  shares: number;
  comments: number;
  publishedAt: string;
};

export type DateRange = "7d" | "30d" | "90d" | "custom";
