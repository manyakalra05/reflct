// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
};

export default nextConfig;
<!-- Update 2024-11-26T08:00:18+05:30 -->
<!-- Update 2025-01-10T11:49:28+05:30 -->
<!-- Update 2025-04-13T16:03:42+05:30 -->
<!-- Update 2025-04-23T08:22:50+05:30 -->
<!-- Update 2025-06-20T11:49:00+05:30 -->
<!-- Update 2025-08-01T15:57:08+05:30 -->