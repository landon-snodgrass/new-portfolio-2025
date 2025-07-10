import { ContentWrapper } from "@/components/ContentWrapper";
import { getAllExperience } from "@/lib/experience";
import { getAllProjects } from "@/lib/project";

export default function Home() {
  const experiences = getAllExperience();
  const projects = getAllProjects();

  return <ContentWrapper experiences={experiences} projects={projects} />;
}
