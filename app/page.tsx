import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowIWork from "@/components/HowIWork";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <HowIWork />
      <Work />
      <Contact />
    </main>
  );
}
