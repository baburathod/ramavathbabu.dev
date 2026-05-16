"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function About() {
  const chips = [
    "MongoDB", "Express.js", "React.js", "Node.js", 
    "REST APIs", "JWT Auth", "Next.js", "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-primary text-xl">01 —</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">About</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <Card className="glass border-white/5 overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-6">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-1">Ramavath Babu</h3>
                <p className="font-mono text-sm text-primary">MERN Stack Developer</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects", value: "5+" },
                { label: "Internship", value: "4mo" },
                { label: "Hackathons", value: "2" },
                { label: "CGPA", value: "7.98" },
              ].map((stat, idx) => (
                <Card key={idx} className="glass border-white/5">
                  <CardContent className="p-4 text-center">
                    <p className="font-heading font-bold text-2xl text-foreground">{stat.value}</p>
                    <p className="font-mono text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-foreground leading-tight">
              MERN Full Stack Developer who ships real products.
            </h3>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Solid hands-on proficiency in MongoDB, Express, React, Node.js. During my internship at Creoverse Academy, I built robust JWT authentication systems, RESTful APIs, and full-stack CRUD applications from the ground up.
              </p>
              <p>
                I am comfortable working across the entire stack — crafting responsive React UIs, engineering secure Express APIs, designing efficient MongoDB schemas, and handling Vercel deployments. My focus is always on writing clean, maintainable code following industry best practices.
              </p>
              <p>
                Beyond my core stack, I have exposure to AI integrations (Gemini, Claude APIs) through competitive hackathon projects, though MERN remains my primary strength. I am currently seeking software engineering internships to further contribute and grow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {chips.map((chip, idx) => (
                <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 font-mono font-normal py-1.5 px-4">
                  {chip}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
