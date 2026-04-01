

const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mlgengtzqglimrtjqwcs.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.openai.com",
        port: "",
        pathname: "/**",
      },
    ],
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
