import type { ComponentType } from "react";
import { BookOpen, Cog, Users, TrendingUp, Newspaper, MessagesSquare, Gamepad2 } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: ComponentType<{ className?: string }>;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "updates", path: "/updates", icon: Newspaper, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
