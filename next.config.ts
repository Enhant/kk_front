/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Включает статический экспорт
  basePath: "/kk_frontend", // Укажи имя репозитория
  assetPrefix: "/kk_frontend/",
  images: {
    unoptimized: true, // Отключает оптимизацию изображений (иначе они не будут работать на GitHub Pages)
  },
};

module.exports = nextConfig;
