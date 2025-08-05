import type { NextConfig } from "next";

const initConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/this-page-does-not-exist",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "---------",
      },
    ],
  },
};



export default initConfig;
