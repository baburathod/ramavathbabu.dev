import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const projectsData = {
  "smartats": {
    name: "SmartATS",
    tagline: "AI-powered ATS resume analyzer with intelligent evaluation.",
    overview: "SmartATS is a production-grade Applicant Tracking System that leverages the Gemini API to analyze, score, and rank resumes against job descriptions. It simplifies the recruiter workflow while giving candidates actionable feedback.",
    tech: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Gemini API"],
    github: "https://github.com/baburathod/SmartATS",
    live: "https://smart-ats-two.vercel.app",
    architecture: "The application uses Next.js App Router for server-side rendering and API routes. MongoDB handles candidate and job data, while NextAuth ensures secure role-based access. The Gemini API is integrated server-side to prevent key exposure and optimize response times.",
    challenges: "Handling rate limits from the AI provider and structuring unstructured resume data into a consistent JSON format.",
    image: "/projects/smartats.jpg"
  },
  "mern-auth": {
    name: "MERN Auth System",
    tagline: "Secure, scalable authentication workflow built during internship.",
    overview: "A comprehensive authentication system built as a foundational microservice. It handles user registration, login, JWT token generation, password hashing, and role-based route protection.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "bcrypt"],
    github: "https://github.com/baburathod/mern-stack-internship-project",
    live: "#",
    architecture: "A classic RESTful MVC architecture. The Express backend handles routing and middleware logic (token verification), while React manages the client-side session state.",
    challenges: "Implementing secure HTTP-only cookies for JWT storage to prevent XSS attacks while maintaining seamless client-side routing.",
    image: "/projects/mern-auth.jpg"
  },
  "task-manager": {
    name: "Task Manager",
    tagline: "Production-ready task management API with Docker support.",
    overview: "A scalable REST API for task management featuring advanced filtering, pagination, and sorting capabilities.",
    tech: ["Node.js", "Express", "MongoDB", "Docker"],
    github: "https://github.com/baburathod/task-manager",
    live: "#",
    architecture: "Built with Node.js and Express, heavily utilizing Mongoose for data modeling and validation. The entire application is containerized using Docker for consistent deployment.",
    challenges: "Writing complex MongoDB aggregation pipelines for the advanced filtering and sorting mechanisms."
  },
  "road-sos": {
    name: "RoadSoS",
    tagline: "AI-based emergency response assistant focused on road safety.",
    overview: "An offline-first Progressive Web App designed to assist in highway emergencies. Built during the IIT Madras hackathon, it provides immediate AI-driven triage and emergency dispatch.",
    tech: ["FastAPI", "Python", "SQLite", "PWA"],
    github: "https://github.com/baburathod/RoadSoS-AI-Emergency-Services-Finder",
    live: "#",
    architecture: "The backend is an asynchronous FastAPI service serving a lightweight AI model. The PWA frontend uses service workers to cache critical assets, allowing it to function even in dead zones.",
    challenges: "Optimizing the AI model inference time on limited hardware resources and ensuring flawless offline caching.",
    image: "/projects/road-sos.jpg"
  },
  "arogya-ai": {
    name: "ArogyaAI",
    tagline: "AI healthcare emergency platform with multilingual voice interaction.",
    overview: "A hackathon-winning application that bridges the accessibility gap in medical emergencies using an interactive body-map UI and voice commands.",
    tech: ["Claude AI", "PWA", "JavaScript"],
    github: "https://github.com/baburathod/ArogyaAI",
    live: "https://baburathod.github.io/ArogyaAI",
    architecture: "A client-heavy architecture that relies on native Web Speech APIs for transcription, while forwarding payloads to serverless functions that interface with Claude AI.",
    challenges: "Handling dialect variations in speech-to-text translation and building an intuitive SVG-based body map for non-technical users.",
    image: "/projects/arogya-ai.jpg"
  }
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-background selection:bg-primary/30 selection:text-primary-foreground relative">
        <div className="absolute inset-0 -z-10 bg-grid opacity-100" />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Button asChild variant="ghost" className="mb-12 gap-2 text-muted-foreground hover:text-foreground -ml-4">
            <a href="/#projects">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </a>
          </Button>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tighter">
              {project.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-8 leading-relaxed">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button asChild className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> View Source
                </a>
              </Button>
              {project.live !== "#" && (
                <Button asChild variant="outline" className="gap-2 glass border-white/10 hover:bg-white/5">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          {'image' in project && project.image && (
            <div className="w-full relative aspect-video mb-16 rounded-xl overflow-hidden border border-white/10 shadow-2xl glass flex items-center justify-center bg-black/40">
              <Image 
                src={project.image} 
                alt={`${project.name} preview`} 
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain p-2"
                priority
              />
            </div>
          )}

          <div className="grid md:grid-cols-12 gap-12 max-w-4xl">
            <div className="md:col-span-8 space-y-16">
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                  <span className="text-primary font-mono text-sm">01.</span> Overview
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed glass p-6 border border-white/5 rounded-xl">
                  {project.overview}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                  <span className="text-primary font-mono text-sm">02.</span> Architecture & Engineering
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed glass p-6 border border-white/5 rounded-xl">
                  {project.architecture}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                  <span className="text-primary font-mono text-sm">03.</span> Technical Challenges
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed glass p-6 border border-white/5 rounded-xl border-l-4 border-l-accent">
                  {project.challenges}
                </p>
              </section>
            </div>

            <div className="md:col-span-4">
              <div className="sticky top-32 glass p-6 border border-white/5 rounded-xl">
                <h3 className="text-xl font-heading font-bold mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-md bg-secondary/10 text-secondary border border-secondary/20 font-mono text-xs w-full text-center">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
