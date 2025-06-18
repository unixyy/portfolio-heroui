// import { Link } from "@heroui/link";
import Education from "@/components/education";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Xp from "@/components/xp";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Hero />
      <Skills />
      <Xp />
      <Education />
      <Projects />
    </DefaultLayout>
  );
}
