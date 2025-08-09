import type { NextConfig } from "next";

const initConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oztrbfpzldmpjlrgbely.supabase.co",
      },
    ],
  },
};

export default initConfig;
