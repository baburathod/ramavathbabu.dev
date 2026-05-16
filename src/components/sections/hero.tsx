"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-mono text-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for job opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          Ramavath <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">Babu.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-lg md:text-xl text-primary/80 mb-6"
        >
          MERN Full Stack Developer <span className="text-muted-foreground mx-2">·</span> React <span className="text-muted-foreground mx-2">·</span> Node.js <span className="text-muted-foreground mx-2">·</span> MongoDB
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed"
        >
          Building scalable, production-ready full-stack web applications using MongoDB, Express, React, and Node.js.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto"
        >
          <Button asChild size="lg" className="w-full sm:w-auto gap-2 group bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
            <a href="#projects">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto gap-2 glass border-white/10 hover:bg-white/5 rounded-full px-8">
            <a href="#contact">Let's Talk</a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto gap-2 hover:bg-white/5 rounded-full px-8 text-muted-foreground hover:text-foreground">
            <a href="/BABU_RESUME.pdf" download="Ramavath_Babu_Resume.pdf">
              Resume <Download className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-6"
        >
          <a href="https://github.com/baburathod" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/baburathod" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:ramavathbabu137@gmail.com" className="p-3 rounded-full glass text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>

        {/* Premium Terminal Snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 w-full max-w-2xl mx-auto glass rounded-xl text-left border-white/5 overflow-hidden hidden md:block shadow-2xl"
        >
          <div className="bg-[#0c0c0c] border-b border-white/5 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <span className="text-xs text-muted-foreground font-mono ml-2">Windows PowerShell</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
            </div>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed bg-[#0a0a0a]/80 backdrop-blur-md">
            <div className="flex gap-2 mb-4">
              <span className="text-primary">PS C:\Users\ramavathbabu\dev&gt;</span>
              <span className="text-foreground">npm run build</span>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-3"><span className="text-accent">✔</span> MERN full-stack applications</div>
              <div className="flex items-center gap-3"><span className="text-accent">✔</span> REST APIs</div>
              <div className="flex items-center gap-3"><span className="text-accent">✔</span> JWT authentication</div>
              <div className="flex items-center gap-3"><span className="text-accent">✔</span> MongoDB integrations</div>
              <div className="flex items-center gap-3"><span className="text-accent">✔</span> Production-ready React UIs</div>
              <div className="flex items-center gap-3 mt-4 text-green-400">✨ Build successful in 2.4s</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
