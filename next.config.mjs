/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // For static export to Firebase
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
