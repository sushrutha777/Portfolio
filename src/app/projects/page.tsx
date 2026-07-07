import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10 pt-24 pb-20">
      <Projects />
      <Achievements />
    </div>
  );
}
