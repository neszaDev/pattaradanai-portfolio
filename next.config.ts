import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Older public URLs from the previous site layout.
  async redirects() {
    return [
      { source: "/project/:slug", destination: "/projects/:slug", permanent: true },
      { source: "/about/:page(education|skills)", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
