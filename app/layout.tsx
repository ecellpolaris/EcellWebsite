import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecell.polariscampus.com"),
  title: {
    default: `${site.brand} · ${site.tagline}`,
    template: `%s · ${site.brand}`,
  },
  description: `${site.brand} is the campus founder operating system inside ${site.collegeName}, Bengaluru. Pre incubation, pitch leagues, operator hours, and The Arena.`,
  keywords: [
    "E Cell PST",
    "Polaris School of Technology",
    "Bengaluru startups",
    "student founders",
    "FORGE pre incubation",
    "IGNITE pitch league",
    "The Arena",
    "Saahi Dubey",
  ],
  authors: [{ name: "E Cell PST WebOps", url: site.instagram }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ecell.polariscampus.com",
    title: `${site.brand} · ${site.tagline}`,
    description: `From hostel rooms to term sheets. Official Entrepreneurship Cell of ${site.collegeName}, Bengaluru.`,
    siteName: site.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} · ${site.tagline}`,
    description: `From hostel rooms to term sheets. Official Entrepreneurship Cell of ${site.collegeName}, Bengaluru.`,
  },
  icons: {
    icon: [
      { url: "/team/ecell-logo.jpeg", type: "image/jpeg" },
      { url: "/ecell-logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/team/ecell-logo.jpeg",
    apple: "/team/ecell-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand,
    alternateName: "SPARK Polaris",
    url: "https://ecell.polariscampus.com",
    logo: "https://ecell.polariscampus.com/team/ecell-logo.jpeg",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressCountry: "IN",
    },
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: site.collegeName,
      url: site.websiteCampus,
    },
  };

  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink selection:bg-lime selection:text-ink font-body">
        <NoiseOverlay />
        <Navbar />
        <main id="main-content" className="min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
