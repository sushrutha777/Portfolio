import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sushrutha S Kottary — a Data Science undergrad at RNS Institute of Technology, Bengaluru, passionate about Machine Learning, Generative AI, Python, and building data-driven solutions. View technical skills in AI, ML, DL, NLP, and more.",
  alternates: {
    canonical: "https://sushrutha-s-kottary.web.app/about",
  },
  openGraph: {
    title: "About Sushrutha S Kottary | Data Science & AI Background",
    description:
      "Data Science undergrad passionate about Machine Learning, Generative AI, and building data-driven solutions. Skills include Python, TensorFlow, PyTorch, LangChain, and more.",
    url: "https://sushrutha-s-kottary.web.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10 pt-16 md:pt-20 pb-10">
      <About />
      <Skills />
    </div>
  );
}
