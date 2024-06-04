/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", port: "" },
      { hostname: "source.unsplash.com" },
    ],
  },
};

export default nextConfig;
