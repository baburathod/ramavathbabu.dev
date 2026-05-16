"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Open mailto link
    const mailtoLink = `mailto:ramavathbabu137@gmail.com?subject=${encodeURIComponent(formData.subject || "Contact from Portfolio")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Opening mail client...",
      description: "Redirecting to your default email application.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-primary text-xl">07 —</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Contact</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-4xl font-bold mb-6 text-foreground leading-tight">
              Looking for a MERN Stack developer?
            </h3>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              I'm currently available for full-time roles, internships, and freelance projects. 
              If you have an opportunity that matches my skills, or just want to say hi, my inbox is always open!
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Mail, label: "Email", value: "ramavathbabu137@gmail.com", href: "mailto:ramavathbabu137@gmail.com", color: "text-primary", bg: "bg-primary/10" },
                { icon: Phone, label: "Phone", value: "+91 7075514067", href: "tel:+917075514067", color: "text-accent", bg: "bg-accent/10" },
                { icon: Linkedin, label: "LinkedIn", value: "baburathod", href: "https://linkedin.com/in/baburathod", color: "text-[#0A66C2]", bg: "bg-[#0A66C2]/10" },
                { icon: Github, label: "GitHub", value: "baburathod", href: "https://github.com/baburathod", color: "text-foreground", bg: "bg-foreground/10" },
              ].map((contact, idx) => (
                <a key={idx} href={contact.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 glass p-4 rounded-xl hover:bg-white/5 transition-colors border border-white/5">
                  <div className={`p-3 rounded-lg ${contact.bg} ${contact.color} shrink-0`}>
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{contact.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors truncate text-sm">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-white/5 flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-muted-foreground mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all font-mono"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all font-mono"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block font-mono text-xs text-muted-foreground mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all font-mono"
                  placeholder="Internship Opportunity"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-xs text-muted-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none font-mono"
                  placeholder="Hello Ramavath, I'd like to discuss..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2 group bg-primary text-primary-foreground hover:bg-primary/90 mt-2 font-mono">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
