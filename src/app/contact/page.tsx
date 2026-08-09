import Contact from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sushrutha S Kottary — Data Scientist and Generative AI Engineer based in Bengaluru, India. Open to opportunities in Data Science, Machine Learning, and AI. Reach out via email, LinkedIn, or GitHub.",
  alternates: {
    canonical: "https://sushrutha-s-kottary.web.app/contact",
  },
  openGraph: {
    title: "Contact Sushrutha S Kottary | Hire a Data Scientist & AI Engineer",
    description:
      "Actively seeking roles in Data Science, ML, and Generative AI. Get in touch for collaborations, opportunities, or inquiries.",
    url: "https://sushrutha-s-kottary.web.app/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10 pt-16 md:pt-20 pb-10">
      <Contact />
    </div>
  );
}
