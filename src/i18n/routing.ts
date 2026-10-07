import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

export const locales = ["en", "zh-CN", "de", "ja"] as const;

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: siteConfig.defaultLocale as Locale,
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
