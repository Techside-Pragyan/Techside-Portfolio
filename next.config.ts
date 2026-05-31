import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents clickjacking: stops other websites from embedding this site in an iframe
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Prevents MIME-type sniffing attacks
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controls referrer information sent when navigating away
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Prevents browser from loading page over HTTP if HTTPS is available
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Disables dangerous browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Content Security Policy: controls what resources the browser can load
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // unsafe-eval needed for Next.js dev
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://avatars.githubusercontent.com https://ghchart.rshah.org https://github-readme-activity-graph.vercel.app https://github-readme-stats.vercel.app https://github-readme-streak-stats.herokuapp.com",
      "connect-src 'self' https://api.github.com",
      "frame-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
