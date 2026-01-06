import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/sample', // <--- 내 깃허브 프로젝트 이름(주소 맨 뒤)을 슬래시와 함께 넣으세요.
  assetPrefix: '/sample/', // <--- 똑같이 한 번 더 적어주세요.
};

export default nextConfig;
