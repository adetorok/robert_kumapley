import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/speaking",
    "/case-highlights",
    "/media",
    "/mygoal",
    "/contact",
    "/resources",
    "/insights",
    "/speaker-kit",
    "/hire",
    "/privacy",
    "/terms",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
