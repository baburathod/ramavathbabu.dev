"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Rocket, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const hackathons = [
  {
    name: "Pravega Innovation Hackathon",
    organizer: "IISc Bangalore",
    icon: Rocket,
    type: "AI & Web Apps"
  },
  {
    name: "Techno-Hack",
    organizer: "IIT Jammu",
    icon: Code2,
    type: "Full Stack"
  },
  {
    name: "Celesta Hackathon",
    organizer: "IIT Patna",
    icon: Trophy,
    type: "Software Engineering"
  },
  {
    name: "GDG Buildathon",
    organizer: "Google Developer Groups",
    icon: Code2,
    type: "Web Development"
  },
  {
    name: "AI Academia Showcase",
    organizer: "AI Academia",
    icon: Rocket,
    type: "AI/ML Integration"
  },
  {
    name: "ByteBattle",
    organizer: "Tech Fest",
    icon: Trophy,
    type: "Competitive Programming"
  }
];

export function Hackathons() {
  return (
    <section id="hackathons" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-primary text-xl">04.5 —</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Hackathons & Competitions</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hackathons.map((hackathon, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="glass h-full border-white/5 hover:border-primary/30 transition-all group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <hackathon.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                    {hackathon.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 font-mono">
                    <MapPin className="w-3 h-3" />
                    {hackathon.organizer}
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground">
                    {hackathon.type}
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
