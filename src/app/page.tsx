import { NavBar } from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Portfolio } from "@/components/portfolio";
import { Technology } from "@/components/technology";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
