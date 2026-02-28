import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Ventures } from "@/components/ventures";
import { Leadership } from "@/components/leadership";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Ventures />
      <Leadership />
      <Contact />
      <Footer />
    </>
  );
}
