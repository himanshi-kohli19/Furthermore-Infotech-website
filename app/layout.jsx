import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.yourdomain.com"),
  title: "AI & Blockchain Development Company | Furthermore",
  description:
    "Furthermore is an AI and blockchain development company building AI agents, automation workflows, RWA platforms, digital wallets, mobile apps and custom software.",
  keywords: [
    "AI and blockchain development company",
    "AI agent development company",
    "AI automation services",
    "blockchain development company",
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
    title: "AI & Blockchain Development Company | Furthermore",
    description:
      "AI, blockchain and software solutions built for startups and enterprises moving from idea to scalable digital product.",
    url: "https://www.yourdomain.com/",
    siteName: "Furthermore",
    images: [
      {
        url: "/assets/images/banner-right-image.png",
        width: 1200,
        height: 630,
        alt: "AI and blockchain software development company"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Blockchain Development Company | Furthermore",
    description:
      "Build AI agents, automation workflows, RWA platforms, digital wallets, web apps, mobile apps and custom software.",
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
