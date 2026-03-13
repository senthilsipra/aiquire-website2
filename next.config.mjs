

const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [],
  },
  experimental: {
    mdxRs: true,
  },
  async rewrites() {
    return [
      {
        source: "/ai-consulting",
        destination: "/services/ai-strategy-consulting",
      },
      {
        source: "/generative-ai",
        destination: "/services/generative-ai-llm",
      },
      {
        source: "/ai-engineering",
        destination: "/services/ai-ml-development",
      },
      {
        source: "/ai-development-services",
        destination: "/services/ai-powered-software",
      },
      {
        source: "/ai-strategy",
        destination: "/services/ai-strategy-consulting",
      },
    ];
  },
};

export default nextConfig;
