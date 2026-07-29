import "./globals.css";
import { absoluteSiteUrl, siteConfig } from "../site.config.mjs";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Furthermore" }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "technology",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png"
  },
  alternates: {
    canonical: absoluteSiteUrl("/")
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    url: absoluteSiteUrl("/"),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "Audit-ready AI and blockchain software development company"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "Build AI and blockchain software that ships with architecture specs, passing tests, human QA logs and written audit reports.",
    images: [siteConfig.image]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
