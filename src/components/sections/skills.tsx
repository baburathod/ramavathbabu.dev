"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    icon: "⚛️",
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind", "HTML", "CSS", "Bootstrap"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "NextAuth", "bcryptjs"],
  },
  {
    icon: "🗄️",
    title: "Database",
    skills: ["MongoDB", "Mongoose", "MongoDB Atlas", "SQL", "SQLite"],
  },
  {
    icon: "🤖",
    title: "AI / ML",
    skills: ["Machine Learning", "Python", "OpenCV", "Gemini AI", "FastAPI"],
  },
  {
    icon: "🔧",
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Docker", "Postman", "VS Code", "Jupyter"],
  },
  {
    icon: "💻",
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-primary text-xl">02 —</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="glass h-full border-white/5 hover:border-primary/30 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="font-heading text-xl flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <Badge key={sIdx} variant="outline" className="bg-white/5 border-white/10 hover:border-primary/50 text-foreground font-mono font-normal py-1 px-3 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
