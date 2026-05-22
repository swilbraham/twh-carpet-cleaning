import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://elfsightcdn.com https://static.elfsight.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://elfsightcdn.com https://static.elfsight.com; " +
      "font-src 'self' data: https://fonts.gstatic.com https://elfsightcdn.com https://static.elfsight.com; " +
      "img-src 'self' data: blob: https://www.google.com https://maps.gstatic.com https://*.googleusercontent.com https://*.elfsight.com https://*.elfsightcdn.com https://static.elfsight.com; " +
      "frame-src 'self' https://www.google.com https://*.elfsight.com https://*.elfsightcdn.com; " +
      "connect-src 'self' https://api.web3forms.com https://maps.googleapis.com https://vitals.vercel-insights.com https://*.elfsight.com https://*.elfsightcdn.com https://static.elfsight.com; " +
      "frame-ancestors 'none';",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
