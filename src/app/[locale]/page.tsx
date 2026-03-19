import HomeHeroBlock from "@/components/blocks/home/home-hero-block";
import WhatWeBuildBlock from "@/components/blocks/home/what-we-build-block";
import AboutSnapshotBlock from "@/components/blocks/home/about-snapshot-block";
import FocusAreasBlock from "@/components/blocks/home/focus-areas-block";
import SelectedProjectsBlock from "@/components/blocks/home/selected-projects-block";
import FoundersSnapshotBlock from "@/components/blocks/home/founders-snapshot-block";
import VisionMissionBlock from "@/components/blocks/home/vision-mission-block";
import FinalContactCtaBlock from "@/components/blocks/home/final-contact-cta-block";

export default function HomePage() {
  return (
    <>
      <HomeHeroBlock />
      <WhatWeBuildBlock />
      <AboutSnapshotBlock />
      <FocusAreasBlock />
      <SelectedProjectsBlock />
      <FoundersSnapshotBlock />
      <VisionMissionBlock />
      <FinalContactCtaBlock />
    </>
  );
}
