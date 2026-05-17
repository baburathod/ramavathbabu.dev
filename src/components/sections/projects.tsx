"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowRight, Layers, LayoutTemplate, ShieldCheck, Cpu, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const filters = ["All", "MERN", "AI/ML", "Full Stack", "Hackathon"];

const projects = [
  {
    title: "SmartATS",
    slug: "smartats",
    badge: "⭐ Hero Project",
    categories: ["AI/ML", "Full Stack"],
    description: "AI-powered ATS resume analyzer with intelligent scoring and recruiter-focused workflows. Engineered to process high volumes of resumes with Gemini AI for precision filtering.",
    tech: ["Next.js 15", "TypeScript", "MongoDB", "Gemini AI", "NextAuth", "Tailwind CSS"],
    highlights: [
      { icon: Cpu, text: "Gemini 1.5 Flash AI scoring integration" },
      { icon: LayoutTemplate, text: "Dedicated Recruiter & Candidate dashboards" },
      { icon: ShieldCheck, text: "NextAuth JWT secure sessions" },
      { icon: Layers, text: "MongoDB Atlas scalable cloud database" }
    ],
    architecture: "Built on a modern serverless architecture using Next.js App Router. The backend leverages server actions and MongoDB for lightning-fast CRUD operations, while the AI pipeline asynchronously processes PDF parsing and Gemini prompt evaluation.",
    github: "https://github.com/baburathod/SmartATS",
    live: "https://smart-ats-two.vercel.app",
    gradient: "from-primary/20 via-accent/10 to-transparent",
    border: "border-primary/30"
  },
  {
    title: "RoadSoS",
    slug: "road-sos",
    badge: "🏆 IIT Madras",
    categories: ["AI/ML", "Hackathon"],
    description: "AI-based emergency response assistant focused on road safety. Led a 5-member team to develop an offline-first PWA capable of operating in low-connectivity highway environments.",
    tech: ["FastAPI", "Python", "SQLite", "PWA"],
    highlights: [
      { icon: Cpu, text: "Multilingual AI chatbot (EN/HI/TE)" },
      { icon: LayoutTemplate, text: "Offline-first PWA architecture" },
      { icon: ShieldCheck, text: "GPS + Haversine distance tracking" },
      { icon: Layers, text: "Real-time panic detection algorithms" }
    ],
    architecture: "Utilizes FastAPI for a high-performance Python backend serving AI models. The frontend is a Progressive Web App (PWA) with Service Workers to ensure critical emergency functions remain accessible offline.",
    github: "https://github.com/baburathod/RoadSoS-AI-Emergency-Services-Finder",
    live: "#",
    gradient: "from-secondary/20 via-primary/10 to-transparent",
    border: "border-secondary/30"
  },
  {
    title: "ArogyaAI",
    slug: "arogya-ai",
    badge: "🏆 IIT BHU",
    categories: ["AI/ML", "Hackathon"],
    description: "AI healthcare emergency platform with multilingual voice interaction. Designed to bridge the accessibility gap in emergency medical services through intuitive body-map UIs.",
    tech: ["Claude AI", "PWA", "JavaScript"],
    highlights: [
      { icon: Cpu, text: "Voice input & multilingual translation" },
      { icon: LayoutTemplate, text: "Interactive visual body-map" },
      { icon: ShieldCheck, text: "Automated emergency SMS dispatch" },
      { icon: Layers, text: "Direct 108 ambulance API integration" }
    ],
    architecture: "Client-heavy architecture leveraging browser APIs for speech-to-text. State management handles complex multi-step emergency reporting workflows, interfacing with Claude AI via serverless endpoints for triage analysis.",
    github: "https://github.com/baburathod/ArogyaAI",
    live: "https://baburathod.github.io/ArogyaAI",
    gradient: "from-accent/20 via-secondary/10 to-transparent",
    border: "border-accent/30"
  },
  {
    title: "MERN Auth System",
    slug: "mern-auth",
    badge: "💼 Internship",
    categories: ["MERN", "Full Stack"],
    description: "Production-style authentication system built during MERN internship at Creoverse Academy. Serves as a robust boilerplate for secure full-stack applications.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      { icon: ShieldCheck, text: "JWT authentication with HttpOnly cookies" },
      { icon: LayoutTemplate, text: "Secure protected route wrappers" },
      { icon: Layers, text: "Modular MVC backend architecture" },
      { icon: Cpu, text: "Dashboard UI with role-based access" }
    ],
    architecture: "Strict MVC pattern implemented in the Node/Express backend. Uses bcrypt for password hashing and standard JWT rotation. The React frontend utilizes context providers for global auth state management.",
    github: "https://github.com/baburathod/mern-stack-internship-project",
    live: "#",
    gradient: "from-primary/20 via-secondary/10 to-transparent",
    border: "border-primary/30"
  },
  {
    title: "Task Manager",
    slug: "task-manager",
    badge: "⚙️ Core System",
    categories: ["MERN", "Full Stack"],
    description: "Full-stack productivity management system demonstrating mastery of containerization and complex relational data modeling in a NoSQL environment.",
    tech: ["React 18", "Node.js", "Express", "Docker"],
    highlights: [
      { icon: Layers, text: "Docker Compose multi-container setup" },
      { icon: LayoutTemplate, text: "Advanced state management" },
      { icon: ShieldCheck, text: "Comprehensive request validation" },
      { icon: Cpu, text: "RESTful API design principles" }
    ],
    architecture: "Containerized using Docker for consistent dev/prod parity. Backend features custom middleware for error handling, JOI validation schemas, and optimized Mongoose aggregation pipelines.",
    github: "https://github.com/baburathod/task-manager",
    live: "#",
    gradient: "from-secondary/20 via-accent/10 to-transparent",
    border: "border-secondary/30"
  }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeFilter === "All" ? true : project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-primary text-xl">04 —</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Case Studies</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-mono text-sm transition-all duration-300 ${
                activeFilter === filter 
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(56,189,248,0.3)]" 
                  : "glass text-muted-foreground hover:text-foreground border border-white/5 hover:border-primary/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project List */}
        <div className="space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10`} />
                
                <div className={`glass rounded-3xl border ${project.border} overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10`}>
                  <div className="grid lg:grid-cols-12 gap-0">
                    
                    {/* Left Side: Title & Tech */}
                    <div className="lg:col-span-5 relative overflow-hidden bg-background/50 border-b lg:border-b-0 lg:border-r border-white/5 p-8 flex flex-col justify-between min-h-[300px] lg:min-h-full">
                      <div className="absolute inset-0 bg-grid opacity-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/80" />
                      
                      <div className="relative z-10 flex justify-between items-start mb-12">
                        <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-foreground border-white/10 backdrop-blur-md px-4 py-1.5 font-mono text-xs">
                          {project.badge}
                        </Badge>
                        <div className="flex gap-2">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full glass hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground">
                            <Github className="w-4 h-4" />
                          </a>
                          {project.live !== "#" && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-primary/20 hover:bg-primary/30 border border-primary/30 transition-colors text-primary">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h3 className="font-heading text-4xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, tIdx) => (
                            <span key={tIdx} className="font-mono text-xs text-primary/80 bg-primary/5 px-2 py-1 rounded border border-primary/10">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Overview & Features */}
                    <div className="lg:col-span-7 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                      <div className="mb-8">
                        <h4 className="font-mono text-sm text-accent mb-3 tracking-wider uppercase">Overview</h4>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="mb-8">
                        <h4 className="font-mono text-sm text-accent mb-4 tracking-wider uppercase">Key Features</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {project.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors">
                              <div className="mt-1 p-1.5 rounded-md bg-white/5 border border-white/5 group-hover/item:border-primary/30 transition-colors">
                                <item.icon className="w-3.5 h-3.5 text-primary" />
                              </div>
                              <span className="text-sm leading-tight mt-1">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-5 rounded-xl bg-background/50 border border-white/5 font-mono text-sm text-muted-foreground/80 leading-relaxed border-l-2 border-l-primary/50">
                        <strong className="text-foreground block mb-2 font-sans">Architecture Insight:</strong>
                        {project.architecture}
                      </div>
                      
                      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full">
                         <Button asChild variant="outline" className="w-full sm:w-auto gap-2 glass hover:bg-white/5 font-mono rounded-full px-8">
                           <a href={`/projects/${project.slug}`}>
                             View Details <ArrowRight className="w-4 h-4" />
                           </a>
                         </Button>
                         
                         {project.live !== "#" && (
                           <Button asChild className="w-full sm:w-auto gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-mono rounded-full px-8">
                             <a href={project.live} target="_blank" rel="noopener noreferrer">
                               <Play className="w-4 h-4 fill-current" /> Live Demo
                             </a>
                           </Button>
                         )}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
