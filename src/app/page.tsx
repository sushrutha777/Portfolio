import Hero from "@/components/sections/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sushrutha S Kottary | Data Scientist & Generative AI Engineer",
  description:
    "Portfolio of Sushrutha S Kottary — Data Scientist, Machine Learning Engineer, and Generative AI Developer based in Bengaluru. Specializing in RAG, LangChain, Deep Learning, NLP, and MLOps.",
  alternates: {
    canonical: "https://sushrutha-s-kottary.web.app/",
  },
  openGraph: {
    title: "Sushrutha S Kottary | Data Scientist & Generative AI Engineer",
    description:
      "Data Scientist and Machine Learning Engineer specializing in Generative AI, RAG, and NLP based in Bengaluru.",
    url: "https://sushrutha-s-kottary.web.app/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
    </div>
  );
}
