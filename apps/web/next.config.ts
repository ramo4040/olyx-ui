import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
  images: {
    remotePatterns: [new URL("https://www.gravatar.com/avatar/**?d=identicon")],
  },
};

export default nextConfig;
