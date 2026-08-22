import { NavBar } from "@/components/nav-bar";
import { Splash } from "@/components/splash";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { OurProjects } from "@/components/our-projects";
import { Technology } from "@/components/technology";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { SectionConnector } from "@/components/section-connector";

export default function Home() {
  return (
    <>
      <Splash />
      <NavBar />
      <main id="main" className="flex-1">
        <Hero />
        <SectionConnector>
          <About />
          <Services />
          <Process />
          <OurProjects />
          <Technology />
          <CTA />
        </SectionConnector>
      </main>
      <Footer />
    </>
  );
}
