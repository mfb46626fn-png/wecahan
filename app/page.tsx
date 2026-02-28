import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Vision } from "@/components/vision";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Vision />
      <Projects />
      <Footer />
    </>
  );
}
