"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-primary text-xl">03 —</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {/* Experience Item */}
            <div className="relative group">
              <div className="glass p-8 md:p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors shadow-lg">
                <div className="flex flex-col gap-2 mb-6">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">MERN Full Stack Intern</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg md:text-xl text-primary font-medium">Creoverse Academy</h4>
                    <span className="text-muted-foreground hidden sm:inline">, Bengaluru</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="font-mono text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">Dec 2025 → Mar 2026</span>
                    <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10 gap-1.5 py-1">
                      <CheckCircle2 className="w-3 h-3" /> Verified Internship
                    </Badge>
                    <span className="font-mono text-xs text-muted-foreground">Cert ID: CRV2026-012</span>
                  </div>
                </div>
                
                <ul className="space-y-3 text-muted-foreground text-base list-none">
                  {[
                    "Built and shipped \"MERN Auth System\" with strong performance rating",
                    "Developed RESTful APIs for user registration, login, CRUD using Express + MongoDB",
                    "Implemented JWT tokens + bcryptjs password hashing",
                    "Full-stack integration: React frontend ↔ Node.js/Express backend",
                    "Clean, modular code following industry conventions"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1.5 text-lg leading-none">▹</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
