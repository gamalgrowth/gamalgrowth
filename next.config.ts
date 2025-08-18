import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
              connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com;
              img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com;
              frame-src 'self' https://www.googletagmanager.com;
              style-src 'self' 'unsafe-inline';
            `.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
