"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, GitBranch, Star, GitCommit, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function GithubStats() {
  const [liveStats, setLiveStats] = useState({
    repos: "6+",
    primaryStack: "MERN",
    liveDeploys: "2",
    hackathons: "2"
  });

  useEffect(() => {
    // Fetch live data from GitHub API
    fetch("https://api.github.com/users/baburathod")
      .then(res => res.json())
      .then(data => {
        if (data.public_repos) {
          setLiveStats(prev => ({
            ...prev,
            repos: data.public_repos.toString()
          }));
        }
      })
      .catch(err => console.error("Error fetching GitHub stats:", err));
  }, []);

  return (
    <section id="github-stats" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-primary text-xl">06 —</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">GitHub Activity</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Stats & Chart */}
          <div className="md:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Total Repos", value: liveStats.repos, icon: GitBranch, color: "text-primary" },
                { label: "Primary Stack", value: liveStats.primaryStack, icon: GitCommit, color: "text-secondary" },
                { label: "Live Deploys", value: liveStats.liveDeploys, icon: ExternalLink, color: "text-accent" },
                { label: "Hackathons", value: liveStats.hackathons, icon: Star, color: "text-yellow-400" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <Card className="glass border-white/5 h-full">
                    <CardContent className="p-5 flex flex-col items-center justify-center gap-2 text-center">
                      <stat.icon className={`w-6 h-6 ${stat.color} mb-1`} />
                      <h3 className="font-heading text-2xl font-bold text-foreground">{stat.value}</h3>
                      <p className="font-mono text-xs text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="glass border-white/5">
                <CardContent className="p-6">
                  <h4 className="font-heading font-bold text-lg mb-4">Top Languages</h4>
                  <div className="space-y-4">
                    {[
                      { lang: "JavaScript", percent: 45, color: "bg-yellow-400" },
                      { lang: "TypeScript", percent: 22, color: "bg-blue-400" },
                      { lang: "Python", percent: 18, color: "bg-green-400" },
                      { lang: "HTML/CSS", percent: 15, color: "bg-orange-400" },
                    ].map((item) => (
                      <div key={item.lang}>
                        <div className="flex justify-between font-mono text-xs mb-1 text-muted-foreground">
                          <span>{item.lang}</span>
                          <span>{item.percent}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full ${item.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button asChild variant="outline" className="w-full glass border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground gap-2 font-mono group">
                <a href="https://github.com/baburathod" target="_blank" rel="noopener noreferrer">
                  View Full GitHub Profile <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Repositories */}
          <div className="md:col-span-7 space-y-4">
            <h4 className="font-mono text-sm text-muted-foreground mb-2 px-2">Featured Repositories</h4>
            {[
              { name: "SmartATS", desc: "AI-powered ATS resume analyzer with intelligent resume evaluation.", tech: "TypeScript" },
              { name: "ArogyaAI", desc: "Healthcare-focused AI application integrating frontend and backend workflows.", tech: "JavaScript" },
              { name: "RoadSoS-AI-Emergency-Services-Finder", desc: "AI-based emergency services finder for rapid road safety.", tech: "Python" },
              { name: "mern-stack-internship-project", desc: "Authentication-based full-stack MERN application.", tech: "JavaScript" },
            ].map((repo, idx) => (
              <motion.a
                href={`https://github.com/baburathod/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="block group"
              >
                <Card className="glass border-white/5 hover:border-secondary/50 transition-colors">
                  <CardContent className="p-5 flex items-start gap-4">
                    <Github className="w-6 h-6 text-muted-foreground mt-1 group-hover:text-secondary transition-colors shrink-0" />
                    <div>
                      <h5 className="font-heading font-bold text-foreground group-hover:text-secondary transition-colors mb-1">{repo.name}</h5>
                      <p className="text-sm text-muted-foreground mb-3">{repo.desc}</p>
                      <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {repo.tech}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
