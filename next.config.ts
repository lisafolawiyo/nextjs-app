import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'lisafolawiyo.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'images.pexels.com',
      // },
      {
        protocol: 'https',
        hostname: 'tan-lyrebird-945101.hostingersite.com',
      },
    ],
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
