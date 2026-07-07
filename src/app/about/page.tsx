import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10 pt-24 pb-4">
      <About />
      <Skills />
    </div>
  );
}
