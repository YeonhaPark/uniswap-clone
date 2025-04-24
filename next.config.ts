import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "token-icons.s3.amazonaws.com",
        pathname: "/**", // 모든 경로 허용
      },
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**", // 모든 경로 허용
      },
      {
        protocol: "https",
        hostname: "assets.coingecko.com", // 추가된 호스트
        pathname: "/**", // 모든 경로 허용
      },
    ],
  },
};

export default nextConfig;
