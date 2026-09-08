import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        let origin = "https://sewanadu.in";
        if (request) {
          try {
            const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
            const proto = request.headers.get("x-forwarded-proto") || "https";
            if (host && !host.includes("localhost") && !host.includes("127.0.0.1")) {
              origin = `${proto}://${host}`;
            } else {
              origin = "https://sewanadu.in";
            }
          } catch {
            origin = "https://sewanadu.in";
          }
        }

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "daily", priority: "1.0" },
          { path: "/citizen-guides", changefreq: "weekly", priority: "0.9" },
          { path: "/faq", changefreq: "weekly", priority: "0.8" },
          { path: "/editorial-policy", changefreq: "monthly", priority: "0.7" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/privacy", changefreq: "yearly", priority: "0.5" },
          { path: "/terms", changefreq: "yearly", priority: "0.5" },
          { path: "/cookies", changefreq: "yearly", priority: "0.4" },
          { path: "/disclaimer", changefreq: "yearly", priority: "0.4" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${origin}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
