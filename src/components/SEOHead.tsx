import React, { useMemo } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  item: string; // Absolute URL or relative path
}

export interface FaqQuestionItem {
  question: string;
  answer: string;
}

export type PageSchemaType =
  "WebPage" | "WebSite" | "AboutPage" | "ContactPage" | "FAQPage" | "CollectionPage" | "ItemPage";

export interface SEOHeadProps {
  /** Explicit pathname override. If omitted, uses TanStack Router location pathname or "/" */
  path?: string;
  /** Primary page title */
  title?: string;
  /** Meta description */
  description?: string;
  /** Canonical URL override */
  canonical?: string;
  /** Primary Schema.org page type */
  pageType?: PageSchemaType;
  /** Custom breadcrumbs array. If omitted, generated automatically from route */
  breadcrumbs?: BreadcrumbItem[];
  /** Structured FAQ questions if page is an FAQ or contains FAQ accordion */
  faqItems?: FaqQuestionItem[];
  /** Additional custom Schema.org entities to embed in the @graph */
  additionalEntities?: Record<string, unknown>[];
  /** Whether to render a visual, accessible breadcrumb bar (defaults to false) */
  showBreadcrumbBar?: boolean;
  /** Custom class name for the visual breadcrumb bar */
  breadcrumbClassName?: string;
}

export const SITE_ORIGIN = "https://sewanadu.in";

/**
 * Known route metadata mapping for breadcrumb hierarchy and sitelinks
 */
export const ROUTE_REGISTRY: Record<
  string,
  {
    title: string;
    shortTitle: string;
    description: string;
    pageType: PageSchemaType;
    parent?: string;
  }
> = {
  "/": {
    title: "SewaNadu — Indian Central & State Citizen e-Service Directory",
    shortTitle: "Home",
    description:
      "SewaNadu is an independent guide to Indian central and state citizen e-services: service dossiers, eligibility checks, document lists, RTI help and state governance bulletins.",
    pageType: "WebSite",
  },
  "/citizen-guides": {
    title: "Citizen e-Governance Guides & Procedure Manuals — SewaNadu",
    shortTitle: "Citizen Guides",
    description:
      "Authoritative, step-by-step procedure manuals for Indian public services: Aadhaar-PAN linking, EPFO UAN transfers, Passport Tatkaal, PM-Kisan e-KYC, and appeal procedures.",
    pageType: "CollectionPage",
    parent: "/",
  },
  "/faq": {
    title: "Citizen e-Service Help Desk & FAQs — SewaNadu",
    shortTitle: "FAQ & Help Desk",
    description:
      "Comprehensive answers and verified solutions for common Indian public service problems: PAN-Aadhaar mismatch, Ayushman card eligibility, Voter ID e-EPIC, and ration card issues.",
    pageType: "FAQPage",
    parent: "/",
  },
  "/about": {
    title: "About SewaNadu — Independent Indian e-Service Guide",
    shortTitle: "About Us",
    description:
      "Who runs SewaNadu, how our government-service content is researched and updated, and our civic mission to eliminate middlemen.",
    pageType: "AboutPage",
    parent: "/",
  },
  "/editorial-policy": {
    title: "Editorial & Fact-Checking Policy — SewaNadu",
    shortTitle: "Editorial Policy",
    description:
      "Our editorial standards, verification methodology, advertising separation, and corrections process for civic e-service guides on SewaNadu.",
    pageType: "AboutPage",
    parent: "/",
  },
  "/contact": {
    title: "Contact SewaNadu — Corrections & Citizen Support",
    shortTitle: "Contact Desk",
    description:
      "Reach the SewaNadu team to report an outdated document checklist, request a missing government service, or submit editorial inquiries.",
    pageType: "ContactPage",
    parent: "/",
  },
  "/privacy": {
    title: "Privacy Policy — SewaNadu Citizen e-Service Guide",
    shortTitle: "Privacy Policy",
    description:
      "How SewaNadu handles browser storage, cookies, analytics and third-party advertising disclosures for visitors in India.",
    pageType: "WebPage",
    parent: "/",
  },
  "/terms": {
    title: "Terms of Service — SewaNadu",
    shortTitle: "Terms of Service",
    description:
      "Terms of service, fair use policy, and legal disclaimer for using SewaNadu educational civic service directories.",
    pageType: "WebPage",
    parent: "/",
  },
  "/cookies": {
    title: "Cookie Policy — SewaNadu",
    shortTitle: "Cookie Policy",
    description:
      "Detailed explanation of local storage, session cookies, and consent preferences on SewaNadu.",
    pageType: "WebPage",
    parent: "/",
  },
  "/disclaimer": {
    title: "Official Disclaimer — SewaNadu",
    shortTitle: "Official Disclaimer",
    description:
      "Statutory notice: SewaNadu is a strictly non-governmental, independent educational guide. Official government portals are directly referenced for all filings.",
    pageType: "WebPage",
    parent: "/",
  },
};

/**
 * Generate standard breadcrumb chain for any route
 */
export function generateBreadcrumbTrail(pathname: string): BreadcrumbItem[] {
  const cleanPath = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  if (cleanPath === "/") {
    return [{ name: "Home", item: `${SITE_ORIGIN}/` }];
  }

  const trail: BreadcrumbItem[] = [{ name: "Home", item: `${SITE_ORIGIN}/` }];

  // Check if it is a legal/policy sub-path
  const isLegalDoc = [
    "/privacy",
    "/terms",
    "/cookies",
    "/disclaimer",
    "/editorial-policy",
  ].includes(cleanPath);

  if (isLegalDoc) {
    trail.push({
      name: "Policy & Governance",
      item: `${SITE_ORIGIN}/editorial-policy`,
    });
  }

  const routeMeta = ROUTE_REGISTRY[cleanPath];
  const pageLabel =
    routeMeta?.shortTitle ||
    cleanPath
      .replace(/^\//, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  trail.push({
    name: pageLabel,
    item: `${SITE_ORIGIN}${cleanPath}`,
  });

  return trail;
}

/**
 * Builds the complete Schema.org @graph JSON-LD structure
 */
export function buildRouteStructuredData(
  pathname: string,
  options?: {
    title?: string;
    description?: string;
    canonical?: string;
    pageType?: PageSchemaType;
    breadcrumbs?: BreadcrumbItem[];
    faqItems?: FaqQuestionItem[];
    additionalEntities?: Record<string, unknown>[];
  },
): Record<string, unknown> {
  const cleanPath = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  const routeMeta = ROUTE_REGISTRY[cleanPath];
  const canonicalUrl = options?.canonical || `${SITE_ORIGIN}${cleanPath === "/" ? "" : cleanPath}`;
  const pageTitle = options?.title || routeMeta?.title || "SewaNadu — Civic Portal";
  const pageDesc =
    options?.description ||
    routeMeta?.description ||
    "Independent Indian e-service directory and procedural guide.";
  const pageType = options?.pageType || routeMeta?.pageType || "WebPage";

  // 1. Organization entity
  const organizationEntity = {
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    name: "SewaNadu",
    alternateName: "Sewa Nadu Civic Portal",
    url: SITE_ORIGIN,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_ORIGIN}/icon-512.png`,
      width: 512,
      height: 512,
    },
    email: "sevanadudotcom@gmail.com",
    description:
      "Independent educational portal and citizen directory of Indian central and state government e-services.",
    publishingPrinciples: `${SITE_ORIGIN}/editorial-policy`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "sevanadudotcom@gmail.com",
      contactType: "citizen support",
      availableLanguage: ["English", "Hindi", "Tamil", "Telugu", "Kannada", "Marathi", "Bengali"],
    },
  };

  // 2. WebSite entity with Sitelinks Searchbox and key Sitelinks parts
  const websiteEntity = {
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: "SewaNadu — Civic Policy & Governance Portal",
    alternateName: ["SewaNadu", "Sewa Nadu", "sewanadu.in"],
    description:
      "An independent directory of Indian central and state citizen e-services with guidelines, eligibility checks, and document dossiers.",
    publisher: {
      "@id": `${SITE_ORIGIN}/#organization`,
    },
    inLanguage: ["en-IN", "hi-IN"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_ORIGIN}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    hasPart: [
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/citizen-guides`,
        url: `${SITE_ORIGIN}/citizen-guides`,
        name: "Citizen e-Governance Guides & Procedure Manuals",
        description:
          "Step-by-step procedure manuals for Indian public services, document verification checklists, and appeal procedures.",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/faq`,
        url: `${SITE_ORIGIN}/faq`,
        name: "Citizen Help Desk & FAQs",
        description:
          "Frequently asked questions regarding Aadhaar, PAN, Ration, Voter ID, DBT, and Ayushman Bharat.",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/about`,
        url: `${SITE_ORIGIN}/about`,
        name: "About SewaNadu",
        description: "Independent civic mission, research methodology, and editorial standards.",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/editorial-policy`,
        url: `${SITE_ORIGIN}/editorial-policy`,
        name: "Editorial & Fact-Checking Policy",
        description:
          "Principles, sourcing standards, and verification procedures governing citizen guides.",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/contact`,
        url: `${SITE_ORIGIN}/contact`,
        name: "Contact & Citizen Support Desk",
        description:
          "Reach editorial desks to report outdated procedures, missing schemes, or corrections.",
      },
    ],
  };

  // 3. SiteNavigationElement list (Google Sitelinks booster)
  const navigationListEntity = {
    "@type": "ItemList",
    "@id": `${SITE_ORIGIN}/#navigation`,
    name: "Main Site Navigation",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Citizen Guides",
        description: "Authoritative procedure manuals and document checklists",
        url: `${SITE_ORIGIN}/citizen-guides`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Citizen Help Desk & FAQs",
        description: "Direct answers to complex civic registration and grievance queries",
        url: `${SITE_ORIGIN}/faq`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "About SewaNadu",
        description: "Our civic mission and editorial independence",
        url: `${SITE_ORIGIN}/about`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Editorial & Fact-Checking Policy",
        description: "Methodology and official gazette sourcing standards",
        url: `${SITE_ORIGIN}/editorial-policy`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Contact Desk",
        description: "Report corrections or request missing government services",
        url: `${SITE_ORIGIN}/contact`,
      },
    ],
  };

  // 4. BreadcrumbList entity
  const breadcrumbItems = options?.breadcrumbs || generateBreadcrumbTrail(cleanPath);
  const breadcrumbEntity = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: breadcrumbItems.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${SITE_ORIGIN}${item.item}`,
    })),
  };

  // 5. Page-specific entity
  const pageEntity: Record<string, unknown> = {
    "@type": pageType === "WebSite" ? "WebPage" : pageType,
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageTitle,
    description: pageDesc,
    isPartOf: {
      "@id": `${SITE_ORIGIN}/#website`,
    },
    breadcrumb: {
      "@id": `${canonicalUrl}#breadcrumb`,
    },
    publisher: {
      "@id": `${SITE_ORIGIN}/#organization`,
    },
    inLanguage: ["en-IN", "hi-IN"],
  };

  // If FAQ page or FAQ questions provided
  let faqEntity: Record<string, unknown> | null = null;
  if (pageType === "FAQPage" || (options?.faqItems && options.faqItems.length > 0)) {
    const faqList = options?.faqItems || [
      {
        question:
          "Why is my PAN-Aadhaar linking failing due to name or date of birth mismatch, and how can I resolve it?",
        answer:
          "UIDAI and the Income Tax Department use strict alphanumeric matching. Update either Aadhaar or PAN first before paying the late fee under Section 234H.",
      },
      {
        question:
          "How do I complete PM-Kisan mandatory e-KYC if fingerprint biometrics fail at the CSC Kendra?",
        answer:
          "Beneficiaries can use OTP e-KYC on pmkisan.gov.in using Aadhaar-linked mobile or use the PM-KISAN Face Authentication mobile app.",
      },
      {
        question:
          "Is a driving license or vehicle RC stored in DigiLocker legally accepted during traffic police checks?",
        answer:
          "Yes. Under Rule 139 of the Central Motor Vehicles Rules and MoRTH notifications, digital documents in DigiLocker or mParivahan are treated on par with physical original certificates.",
      },
      {
        question:
          "Who is eligible for the Ayushman Bharat PM-JAY ₹5 Lakh annual health cover and how do I download the card?",
        answer:
          "Ayushman Bharat PM-JAY provides cashless hospitalization up to ₹5 Lakhs per family per year, plus expanded universal coverage for all senior citizens aged 70+.",
      },
    ];

    faqEntity = {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      isPartOf: {
        "@id": `${canonicalUrl}#webpage`,
      },
      mainEntity: faqList.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    };
  }

  // Assemble full @graph
  const graph: Record<string, unknown>[] = [
    organizationEntity,
    websiteEntity,
    navigationListEntity,
    breadcrumbEntity,
    pageEntity,
  ];

  if (faqEntity) {
    graph.push(faqEntity);
  }

  if (options?.additionalEntities && options.additionalEntities.length > 0) {
    graph.push(...options.additionalEntities);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/**
 * Returns a script tag descriptor compatible with TanStack Router head: () => ({ scripts: [...] })
 */
export function getRouteJsonLdScript(
  pathname: string,
  options?: Parameters<typeof buildRouteStructuredData>[1],
) {
  const jsonLd = buildRouteStructuredData(pathname, options);
  return {
    type: "application/ld+json",
    children: JSON.stringify(jsonLd),
  };
}

/**
 * Main SEOHead Component
 * Dynamically injects structured JSON-LD data into the document head and renders optional breadcrumbs
 */
export function SEOHead({
  path,
  title,
  description,
  canonical,
  pageType,
  breadcrumbs,
  faqItems,
  additionalEntities,
  showBreadcrumbBar = false,
  breadcrumbClassName,
}: SEOHeadProps) {
  // Gracefully determine current path
  let currentPath = path;
  try {
    const loc = useLocation();
    if (!currentPath && loc?.pathname) {
      currentPath = loc.pathname;
    }
  } catch {
    // Fallback if rendered outside TanStack Router context
  }

  if (!currentPath && typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }
  const resolvedPath = currentPath || "/";

  // Build JSON-LD structured data graph
  const structuredData = useMemo(() => {
    return buildRouteStructuredData(resolvedPath, {
      title,
      description,
      canonical,
      pageType,
      breadcrumbs,
      faqItems,
      additionalEntities,
    });
  }, [
    resolvedPath,
    title,
    description,
    canonical,
    pageType,
    breadcrumbs,
    faqItems,
    additionalEntities,
  ]);

  const breadcrumbTrail = useMemo(() => {
    return breadcrumbs || generateBreadcrumbTrail(resolvedPath);
  }, [breadcrumbs, resolvedPath]);

  const jsonLdString = useMemo(() => {
    return JSON.stringify(structuredData);
  }, [structuredData]);

  return (
    <>
      {/* Dynamic JSON-LD Structured Data for Crawlers & Rich Sitelinks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
        id={`seo-jsonld-${resolvedPath.replace(/\//g, "-") || "root"}`}
      />

      {/* Accessible, Visual Breadcrumbs when requested */}
      {showBreadcrumbBar && breadcrumbTrail.length > 1 && (
        <nav
          aria-label="Breadcrumb"
          className={
            breadcrumbClassName ||
            "mb-4 flex items-center gap-1.5 text-xs text-stone-500 font-sans flex-wrap"
          }
        >
          <ol className="flex items-center gap-1.5 flex-wrap list-none p-0 m-0">
            {breadcrumbTrail.map((crumb, idx) => {
              const isLast = idx === breadcrumbTrail.length - 1;
              const linkTarget = crumb.item.replace(SITE_ORIGIN, "") || "/";
              return (
                <li key={crumb.item + idx} className="flex items-center gap-1.5">
                  {idx > 0 && (
                    <ChevronRight
                      className="w-3.5 h-3.5 text-stone-400 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  {isLast ? (
                    <span
                      aria-current="page"
                      className="font-medium text-stone-800 truncate max-w-[200px] sm:max-w-none"
                    >
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      to={linkTarget}
                      className="hover:text-amber-700 hover:underline transition flex items-center gap-1 text-stone-500"
                    >
                      {idx === 0 && <Home className="w-3 h-3 text-stone-400" aria-hidden="true" />}
                      <span>{crumb.name}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </>
  );
}

export default SEOHead;
