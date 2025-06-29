import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://res.cloudinary.com/dsgtmtcmt/image/upload/**"),
    ],
  },
};

export default nextConfig;
