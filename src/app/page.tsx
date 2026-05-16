import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Hackathons } from "@/components/sections/hackathons";
import { GithubStats } from "@/components/sections/github-stats";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="bg-noise" />
      <main className="flex min-h-screen flex-col selection:bg-primary/30 selection:text-primary-foreground relative">
        <div className="absolute inset-0 -z-10 bg-grid opacity-100" />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hackathons />
        <Certifications />
        <GithubStats />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
