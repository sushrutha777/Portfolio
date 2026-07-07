import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sushrutha S Kottary | Data Scientist & Generative AI Engineer",
    template: "%s | Sushrutha S Kottary",
  },
  description: "Portfolio of Sushrutha S Kottary, a Data Scientist, Machine Learning Engineer, and Generative AI Developer based in Bengaluru. Specializing in RAG, LangChain, Deep Learning, and end-to-end MLOps.",
  keywords: [
    "Sushrutha S Kottary",
    "Sushrutha Kottary",
    "Data Scientist",
    "Machine Learning Engineer",
    "Generative AI Developer",
    "AI Engineer",
    "Python Developer",
    "Deep Learning",
    "NLP",
    "RAG",
    "LangChain",
    "Bengaluru",
    "Portfolio",
  ],
  authors: [{ name: "Sushrutha S Kottary", url: "https://github.com/sushrutha777" }],
  creator: "Sushrutha S Kottary",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sushrutha-s-kottary.web.app/",
    title: "Sushrutha S Kottary | Data Scientist & AI Engineer",
    description: "Data Scientist and Machine Learning Engineer specializing in Generative AI, RAG, and NLP based in Bengaluru.",
    siteName: "Sushrutha S Kottary Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushrutha S Kottary | AI & ML Engineer",
    description: "Data Scientist & AI Engineer specializing in Deep Learning and Generative AI.",
    creator: "@sushrutha", // Placeholder Twitter handle
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#090909] text-slate-200 selection:bg-brand-purple/30`}
      >
        <ParticleBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
