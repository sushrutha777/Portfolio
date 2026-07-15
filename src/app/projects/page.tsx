import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore AI and Machine Learning projects by Sushrutha S Kottary — including an Agentic RAG system with LangChain & LangGraph, Stock Movement Reason Finder, Multi-Language Invoice Q&A, and Movie Review Sentiment Analysis with MLOps (Docker, CI/CD).",
  alternates: {
    canonical: "https://sushrutha-s-kottary.web.app/projects",
  },
  openGraph: {
    title: "Projects by Sushrutha S Kottary | AI, ML & Generative AI",
    description:
      "AI/ML projects: Agentic RAG System, Stock Movement Analyzer, Multi-Language Invoice Q&A, Sentiment Analysis with MLOps. Built with Python, LangChain, Gemini, PyTorch, and FastAPI.",
    url: "https://sushrutha-s-kottary.web.app/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10 pt-24 pb-4">
      <Projects />
      <Achievements />
    </div>
  );
}
