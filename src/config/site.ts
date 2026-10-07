export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Starlathe Wiki",
  shortName: "Starlathe",
  logoText: "S",
  tagline: "Ships, Trading & Galaxy Exploration Guides",
  description: "Starlathe Wiki provides complete space simulation guides, ship builds, trading tips, fleet strategies, exploration information, and everything players need.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://starlathe.top",
  supportEmail: "support@starlathe.top",
  gameUrl: "https://store.steampowered.com/app/5090060/Starlathe/",
  heroVideoId: "JoAlHSxHB44", // Starlathe — Official Gameplay Trailer
  social: {
    discord: "https://steamcommunity.com/app/5090060/",
    youtube: "https://www.youtube.com/watch?v=JoAlHSxHB44",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
