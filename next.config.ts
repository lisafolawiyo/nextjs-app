import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tan-lyrebird-945101.hostingersite.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/archive',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
