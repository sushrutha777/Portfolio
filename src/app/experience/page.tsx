import Experience from "@/components/sections/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience of Sushrutha S Kottary — Data Science Intern at Lloyds Banking Group (Job Simulation). Conducted EDA, built classification models for customer churn prediction, and diagnosed class imbalance issues.",
  alternates: {
    canonical: "https://sushrutha-s-kottary.web.app/experience",
  },
  openGraph: {
    title: "Work Experience | Sushrutha S Kottary",
    description:
      "Data Science internship experience at Lloyds Banking Group. Built classification models, performed EDA, and solved customer churn prediction challenges.",
    url: "https://sushrutha-s-kottary.web.app/experience",
  },
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-10 pt-16 md:pt-20 pb-10">
      <Experience />
    </div>
  );
}
