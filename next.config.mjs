/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", port: "" },
      { protocol: "https", hostname: "www.prokoulu.fi", port: "" },
      { hostname: "source.unsplash.com" },
    ],
  },
};

export default nextConfig;
