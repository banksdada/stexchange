import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const paths = ["", "/how-it-works", "/eligibility", "/safeguards", "/universities", "/faq", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() }));
}
