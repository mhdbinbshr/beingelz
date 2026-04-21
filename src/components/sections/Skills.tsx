import { FadeIn } from '../animations/FadeIn';
import { motion } from 'motion/react';
import { Cpu, LayoutTemplate, Shield, Sparkles, Activity } from 'lucide-react';

const skillCategories = [
  {
    id: "DATA / 01",
    title: "Programming",
    icon: <Cpu strokeWidth={1} className="w-16 h-16 md:w-24 md:h-24" />,
    items: ["C", "C++", "Java", "Python"]
  },
  {
    id: "DATA / 02",
    title: "Development",
    icon: <LayoutTemplate strokeWidth={1} className="w-16 h-16 md:w-24 md:h-24" />,
    items: ["Web Development", "Frontend & UI Design", "Backend Systems", "Game Development"]
  },
  {
    id: "DATA / 03",
    title: "Cybersecurity",
    icon: <Shield strokeWidth={1} className="w-16 h-16 md:w-24 md:h-24" />,
    items: ["Ethical Hacking", "Penetration Testing", "Bug Hunting", "Cyber Forensics"]
  },
  {
    id: "DATA / 04",
    title: "Creative Tech",
    icon: <Sparkles strokeWidth={1} className="w-16 h-16 md:w-24 md:h-24" />,
    items: ["Video Editing", "AI Tools & Workflows", "Story Writing", "Scriptwriting"]
  }
];

export function Skills() {
  return (
    <section className="py-24 md:py-40 min-h-screen relative bg-[#000000] overflow-hidden isolate text-left">
      {/* Deep Mainframe Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      
      {/* Underglow */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[var(--color-accent)]/10 blur-[200px] pointer-events-none z-0 mix-blend-screen" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Preserved Cinematic Title Block */}
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8 border-b border-white/10 pb-10 mb-16 md:mb-24 w-full overflow-hidden">
            <h2 className="font-serif uppercase whitespace-nowrap tracking-[0.1em] sm:tracking-[0.25em] font-light text-[clamp(1rem,4.5vw,5rem)] md:text-[clamp(1.5rem,4.5vw,6rem)] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[var(--color-accent)]/80 to-[#111111] drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] select-none text-center md:text-left">
              Core Competencies
            </h2>
            <div className="flex items-center gap-3 text-[var(--color-text-muted)] font-mono text-[10px] tracking-[0.4em] uppercase mb-2">
              <Activity className="w-4 h-4 text-[var(--color-accent)] animate-pulse" /> Live Telemetry
            </div>
          </div>
        </FadeIn>

        {/* The Matrix Pillars (Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 group/matrix perspective-[2000px]">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group-hover/matrix:opacity-40 hover:!opacity-100 transition-opacity duration-700 h-full"
            >
              <div className="relative h-full flex flex-col p-8 sm:p-10 rounded-[2rem] bg-white/[0.015] border border-white/5 overflow-hidden isolate group/card hover:bg-white/[0.03] hover:border-[var(--color-accent)]/40 transition-all duration-700 hover:shadow-[0_30px_100px_rgba(242,125,38,0.15)] hover:-translate-y-2">
                
                {/* Vertical Scanning Laser (Hover) */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent -translate-y-4 group-hover/card:translate-y-[800px] transition-transform duration-[3s] ease-in-out pointer-events-none opacity-0 group-hover/card:opacity-100 z-20 shadow-[0_0_15px_var(--color-accent)]" />

                {/* Massive Background Icon */}
                <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover/card:opacity-10 group-hover/card:text-[var(--color-accent)] transition-all duration-1000 transform group-hover/card:rotate-12 group-hover/card:scale-125 z-0 pointer-events-none">
                  {category.icon}
                </div>

                {/* Header Section */}
                <div className="relative z-10 border-b border-white/10 group-hover/card:border-[var(--color-accent)]/30 pb-6 mb-8 transition-colors duration-700">
                  <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/30 group-hover/card:text-[var(--color-accent)] transition-colors duration-500 mb-4">
                    {category.id}
                  </div>
                  <h3 className="font-serif text-3xl font-light text-white tracking-tight group-hover/card:translate-x-2 transition-transform duration-500">
                    {category.title}
                  </h3>
                </div>

                {/* Data Points */}
                <ul className="flex flex-col gap-5 relative z-10 flex-1">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group/item overflow-hidden">
                      <span className="font-mono text-[var(--color-accent)]/40 group-hover/item:text-[var(--color-accent)] transition-colors duration-300 transform group-hover/item:translate-x-1 shrink-0 mt-1">
                        +
                      </span>
                      <span className="font-light text-lg tracking-wide text-white/50 group-hover/item:text-white transition-all duration-300 transform group-hover/item:translate-x-2">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Anchor Decor */}
                <div className="absolute bottom-6 left-8 flex gap-1 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000">
                  <div className="w-1 h-1 bg-[var(--color-accent)]" />
                  <div className="w-4 h-1 bg-[var(--color-accent)]/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
