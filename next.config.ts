import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
      // You should also add the other domain you used earlier
      {
        protocol: "https",
        hostname: "assets.prebuiltui.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;