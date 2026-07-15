import Education from "@/components/sections/Education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education background of Sushrutha S Kottary — Bachelor of Engineering in CSE (Data Science) at RNS Institute of Technology, Bengaluru (GPA: 9.03). Previously at Expert PU College, Mangaluru (90.5%) and Shri Rama Vidya Kendra, Kalladka (97.6%).",
  alternates: {
    canonical: "https://sushrutha-s-kottary.web.app/education",
  },
  openGraph: {
    title: "Education | Sushrutha S Kottary",
    description:
      "B.E. in CSE (Data Science) at RNSIT, Bengaluru with 9.03 GPA. Strong academic track record across all stages of education.",
    url: "https://sushrutha-s-kottary.web.app/education",
  },
};

export default function EducationPage() {
  return (
    <div className="flex flex-col gap-10 pt-24 pb-4">
      <Education />
    </div>
  );
}
