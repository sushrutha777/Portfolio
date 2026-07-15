import Certifications from "@/components/sections/Certifications";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications of Sushrutha S Kottary — IBM RAG & Agentic AI, DeepLearning.AI TensorFlow Developer, IBM Data Science, Generative AI with LLMs, RAG Bootcamp (LangChain, LangGraph), and Complete Data Science & ML Bootcamp.",
  alternates: {
    canonical: "https://sushrutha-s-kottary.web.app/certifications",
  },
  openGraph: {
    title: "Certifications | Sushrutha S Kottary",
    description:
      "Verified certifications in AI, ML, and Data Science from IBM, DeepLearning.AI, Coursera, and Udemy. Includes RAG, TensorFlow, LLMs, and NLP.",
    url: "https://sushrutha-s-kottary.web.app/certifications",
  },
};

export default function CertificationsPage() {
  return (
    <div className="flex flex-col gap-10 pt-24 pb-4">
      <Certifications />
    </div>
  );
}
