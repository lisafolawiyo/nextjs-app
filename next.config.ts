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
  experimental: {
    optimizePackageImports: ['react-paystack'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Mark react-paystack as external for server-side rendering
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push('react-paystack');
      }
    }
    return config;
  },
};

export default nextConfig;
