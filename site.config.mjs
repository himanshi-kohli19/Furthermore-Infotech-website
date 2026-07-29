const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.furmotech.com";

const siteUrl = rawSiteUrl.replace(/\/+$/, "");
const lastModified = process.env.NEXT_PUBLIC_SITE_LASTMOD || "2026-07-29";

export const siteConfig = {
  name: "Furthermore",
  legalName: "Furthermore Technologies",
  url: siteUrl,
  title: "Audit-Ready AI, Blockchain & Web3 Development Company | Furthermore",
  description:
    "Furthermore builds audit-ready AI agents, blockchain platforms, Web3 products and custom software with architecture, test-driven development, human QA and written audit reports.",
  ogDescription:
    "Specialist AI agent, blockchain and Web3 development with architecture specs, test-driven builds, human QA and written audit reports.",
  locale: "en_US",
  lastModified,
  image: "/assets/images/furthermore/hero-office-window.png",
  keywords: [
    "AI and blockchain development company",
    "Web3 development company",
    "audit-ready software",
    "AI agent development company",
    "AI automation services",
    "blockchain development company",
    "test-driven development agency",
    "VARA compliant software development",
    "MiCA compliance software",
    "EU AI Act compliance software",
    "RWA tokenization development",
    "digital wallet development company",
    "custom software development company",
    "mobile app development services",
    "Next.js development company",
    "Web3 development services",
    "generative AI development company",
    "system design consulting services"
  ],
  socialLinks: [
    "https://www.linkedin.com/company/furthermore-technologies",
    "https://x.com/furthermoretech",
    "https://www.instagram.com/furthermoretech",
    "https://www.facebook.com/furthermoretech"
  ],
  indexableRoutes: [
    {
      path: "/",
      title: "Furthermore homepage",
      description:
        "Audit-ready AI, blockchain, Web3 and custom software development services.",
      changeFrequency: "weekly",
      priority: "1.0"
    }
  ],
  nonIndexableRoutes: [
    {
      path: "/thank-you",
      title: "Thank-you confirmation page"
    }
  ],
  services: [
    "AI agent development and automation",
    "RAG applications and workflow automation",
    "Blockchain, Web3 and RWA tokenization development",
    "Digital wallet and smart contract development",
    "Custom software, SaaS, web and mobile app engineering",
    "Compliance-aware product engineering for regulated markets"
  ]
};

export function absoluteSiteUrl(path = "/") {
  const cleanPath = path.replace(/^\/+/, "");
  return new URL(cleanPath, `${siteConfig.url}/`).href;
}
