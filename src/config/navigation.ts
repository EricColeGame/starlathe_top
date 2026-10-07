import type { ComponentType } from "react";

export type NavigationItem = {
  key: string;
  path: string;
  icon: ComponentType<{ className?: string }>;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG: NavigationItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
