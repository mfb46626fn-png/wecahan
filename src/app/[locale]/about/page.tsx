import AboutIntroBlock from "@/components/blocks/about/about-intro-block";
import WhoWeAreBlock from "@/components/blocks/about/who-we-are-block";
import WhatWeBuildDetailBlock from "@/components/blocks/about/what-we-build-detail-block";
import HowWeThinkBlock from "@/components/blocks/about/how-we-think-block";
import AboutFocusAreasBlock from "@/components/blocks/about/about-focus-areas-block";
import FoundersBlock from "@/components/blocks/about/founders-block";
import AboutClosingBlock from "@/components/blocks/about/about-closing-block";

export default function AboutPage() {
  return (
    <>
      <AboutIntroBlock />
      <WhoWeAreBlock />
      <WhatWeBuildDetailBlock />
      <HowWeThinkBlock />
      <AboutFocusAreasBlock />
      <FoundersBlock />
      <AboutClosingBlock />
    </>
  );
}
