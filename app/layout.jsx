import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.yourdomain.com"),
  title: "Audit-Ready AI & Blockchain Development Company | Furthermore",
  description:
    "Furthermore builds audit-ready AI and blockchain software with dedicated architecture, AI coding agents, senior engineering review, human QA and written audit reports.",
  keywords: [
    "AI and blockchain development company",
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
  authors: [{ name: "Furthermore" }],
  alternates: {
    canonical: "https://www.yourdomain.com/"
  },
  openGraph: {
    title: "Audit-Ready AI & Blockchain Development Company | Furthermore",
    description:
      "Specialist AI and blockchain development with architecture specs, test-driven builds, human QA and written audit reports.",
    url: "https://www.yourdomain.com/",
    siteName: "Furthermore",
    images: [
      {
        url: "/assets/images/banner-right-image.png",
        width: 1200,
        height: 630,
        alt: "Audit-ready AI and blockchain software development company"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit-Ready AI & Blockchain Development Company | Furthermore",
    description:
      "Build AI and blockchain software that ships with architecture specs, passing tests, human QA logs and written audit reports.",
    images: ["/assets/images/banner-right-image.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
