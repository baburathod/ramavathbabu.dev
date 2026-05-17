import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background/50 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-heading font-bold tracking-tighter">
              Ramavath <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">Babu.</span>
            </a>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              MERN Full Stack Developer
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 font-mono text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-4">
            <a href="https://github.com/baburathod" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/baburathod" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-[#0A66C2] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:ramavathbabu137@gmail.com" className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground/50">
          <p>© {new Date().getFullYear()} Ramavath Babu All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
