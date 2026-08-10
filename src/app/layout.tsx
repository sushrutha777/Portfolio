import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SwipeNavigation from "@/components/ui/SwipeNavigation";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const SITE_URL = "https://sushrutha-s-kottary.web.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Sushrutha S Kottary",
  appleWebApp: {
    title: "Sushrutha S Kottary",
    statusBarStyle: "default",
    capable: true,
  },
  title: {
    default: "Sushrutha S Kottary | Data Scientist & Generative AI Engineer",
    template: "%s | Sushrutha S Kottary",
  },
  description:
    "Portfolio of Sushrutha S Kottary — Data Scientist, Machine Learning Engineer, and Generative AI Developer based in Bengaluru, India. Specializing in RAG, LangChain, LangGraph, Deep Learning, NLP, and end-to-end MLOps pipelines.",
  keywords: [
    "Sushrutha",
    "Kottary",
    "Sushrutha S Kottary",
    "Sushrutha Kottary",
    "Sushrutha S",
    "S Kottary",
    "Sushrutha S Kottary portfolio",
    "Data Scientist",
    "Machine Learning Engineer",
    "Generative AI Developer",
    "AI Engineer",
    "Python Developer",
    "Deep Learning",
    "NLP",
    "RAG",
    "LangChain",
    "LangGraph",
    "MLOps",
    "TensorFlow",
    "PyTorch",
    "Bengaluru",
    "India",
    "Portfolio",
    "Data Science portfolio",
    "AI portfolio",
  ],
  authors: [
    { name: "Sushrutha S Kottary", url: "https://github.com/sushrutha777" },
  ],
  creator: "Sushrutha S Kottary",
  publisher: "Sushrutha S Kottary",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Sushrutha S Kottary | Data Scientist & AI Engineer",
    description:
      "Data Scientist and Machine Learning Engineer specializing in Generative AI, RAG, LangChain, Deep Learning, and NLP. Based in Bengaluru, India.",
    siteName: "Sushrutha S Kottary",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Sushrutha S Kottary — Data Scientist & AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushrutha S Kottary | AI & ML Engineer",
    description:
      "Data Scientist & AI Engineer specializing in Deep Learning, Generative AI, RAG, and end-to-end MLOps.",
    creator: "@sushrutha",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here once you have it
    // google: "your-google-verification-code",
  },
  category: "technology",
};

// JSON-LD Structured Data for the entire site
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Sushrutha S Kottary",
      url: SITE_URL,
      jobTitle: "Data Scientist & Generative AI Engineer",
      description:
        "Final year Data Science student specializing in AI, ML, Deep Learning, Generative AI, RAG, and LangChain. Based in Bengaluru, India.",
      email: "sushruthaskottary777@gmail.com",
      sameAs: [
        "https://github.com/sushrutha777",
        "https://www.linkedin.com/in/sushrutha-s-kottary-994310291/",
      ],
      knowsAbout: [
        "Data Science",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "Natural Language Processing",
        "RAG (Retrieval-Augmented Generation)",
        "LangChain",
        "LangGraph",
        "Python",
        "TensorFlow",
        "PyTorch",
        "FastAPI",
        "MLOps",
        "Docker",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "RNS Institute of Technology",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Sushrutha S Kottary",
      alternateName: "Sushrutha S Kottary",
      description:
        "Portfolio of Sushrutha S Kottary — Data Scientist, Machine Learning Engineer, and Generative AI Developer.",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Sushrutha S Kottary | Data Scientist & Generative AI Engineer",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#person`,
      },
      mainEntity: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#090909" />
        <meta name="author" content="Sushrutha S Kottary" />
        <meta
          name="google-site-verification"
          content=""
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#090909] text-slate-200 selection:bg-brand-purple/30`}
      >
        
        {/* Global Background Mesh */}
        <div className="fixed inset-0 z-[-1] bg-[#090909]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <SwipeNavigation>
              {children}
            </SwipeNavigation>
          </main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-BF4GNZZR55" />
    </html>
  );
}
