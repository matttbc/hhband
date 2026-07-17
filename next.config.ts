import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Photos uploaded into the Notion Concerts database are served from here.
    // Any other remote host falls back to an unoptimised <img> — see
    // canOptimise() in components/Concerts.tsx for why.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
