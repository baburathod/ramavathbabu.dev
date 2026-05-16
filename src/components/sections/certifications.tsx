"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    icon: "🛰️",
    title: "AI/ML for Geodata Analysis",
    issuer: "ISRO (IIRS)",
    date: "Sep 2024"
  },
  {
    icon: "🐍",
    title: "Python Programming",
    issuer: "GUVI (HCL)",
    date: "Aug 2024"
  },
  {
    icon: "🌱",
    title: "Marketing Internship",
    issuer: "Muskurahat Foundation (Internshala)",
    date: "Sep 2024"
  },
  {
    icon: "🤝",
    title: "Social Entrepreneurship",
    issuer: "Hamari Pahchan NGO (Internshala)",
    date: "Aug 2024"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-primary text-xl">05 —</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Certifications</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="glass h-full border-white/5 hover:border-accent/50 transition-all duration-300 group">
                <CardContent className="p-6 flex items-center gap-5">
                  <div className="text-4xl group-hover:scale-110 transition-transform shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">{cert.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 font-mono text-sm">
                      <span className="text-muted-foreground">{cert.issuer}</span>
                      <span className="hidden sm:inline text-white/20">•</span>
                      <span className="text-primary">{cert.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
