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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.paystack.co https://*.paystack.com https://www.googletagmanager.com https://*.google-analytics.com; " +
              "style-src 'self' 'unsafe-inline' https://*.paystack.co https://*.paystack.com https://fonts.googleapis.com; " +
              "img-src 'self' data: blob: https: http:; " +
              "font-src 'self' data: https://*.paystack.co https://*.paystack.com https://fonts.gstatic.com; " +
              "connect-src 'self' https://*.paystack.co https://*.paystack.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; " +
              "frame-src 'self' https://*.paystack.co https://*.paystack.com; " +
              "object-src 'none'; " +
              "base-uri 'self'; " +
              "form-action 'self' https://*.paystack.co https://*.paystack.com; " +
              "frame-ancestors 'self'; " +
              'upgrade-insecure-requests;',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
