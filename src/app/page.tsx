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
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      description: SITE.description,
      logo: `${SITE.url}/brand/mark-512.png`,
      knowsAbout: [
        "Software Engineering",
        "Web Application Development",
        "Mobile Application Development",
        "System Architecture",
        "Automation",
        "Artificial Intelligence",
        "System Integration",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
