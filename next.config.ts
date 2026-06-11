import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/Bharat_CJ_Resume_2026.pdf",
        destination: "/Bharat_CJ_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
