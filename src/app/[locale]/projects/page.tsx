import ProjectsIntroBlock from "@/components/blocks/projects/projects-intro-block";
import ProjectsGridBlock from "@/components/blocks/projects/projects-grid-block";
import EcosystemNoteBlock from "@/components/blocks/projects/ecosystem-note-block";
import ProjectsCtaBlock from "@/components/blocks/projects/projects-cta-block";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsIntroBlock />
      <ProjectsGridBlock />
      <EcosystemNoteBlock />
      <ProjectsCtaBlock />
    </>
  );
}
