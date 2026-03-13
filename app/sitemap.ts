import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllCmsPosts } from "@/lib/blog-cms";
import { SERVICES } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllCmsPosts();
  const blogUrls = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const seoSlugs: Record<string, string> = {
    "ai-strategy-consulting": "/ai-consulting",
    "generative-ai-llm": "/generative-ai",
    "ai-ml-development": "/ai-engineering",
    "ai-powered-software": "/ai-development-services",
  };

  const serviceUrls = SERVICES.map((service) => {
    const path = seoSlugs[service.slug] || `/services/${service.slug}`;
    return {
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/approach`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/claude-training`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/audit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...serviceUrls,
    ...blogUrls,
  ];
}
