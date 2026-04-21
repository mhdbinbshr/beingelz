import { FadeIn } from '../animations/FadeIn';
import { Terminal, Globe, Gamepad2, Shield, Cpu, Clapperboard, PenTool, Focus } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const details = [
    { icon: <Globe strokeWidth={0.5} className="w-24 h-24 md:w-48 md:h-48" />, value: "Web Design & Development" },
    { icon: <Terminal strokeWidth={0.5} className="w-24 h-24 md:w-48 md:h-48" />, value: "Software Development" },
    { icon: <Shield strokeWidth={0.5} className="w-24 h-24 md:w-48 md:h-48" />, value: "Cybersecurity & Ethical Hacking" },
    { icon: <Gamepad2 strokeWidth={0.5} className="w-24 h-24 md:w-48 md:h-48" />, value: "Game Development" },
    { icon: <Cpu strokeWidth={0.5} className="w-24 h-24 md:w-48 md:h-48" />, value: "AI & Emerging Technologies" },
    { icon: <Clapperboard strokeWidth={0.5} className="w-24 h-24 md:w-48 md:h-48" />, value: "Film & Storytelling" },
    { icon: <PenTool strokeWidth={0.5} className="w-24 h-24 md:w-48 md:h-48" />, value: "Editing & Creative Design" },
  ];

  return (
    <section className="py-24 md:py-40 min-h-screen relative z-10 bg-[#020202] overflow-hidden">
      {/* Immersive Rotating Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03], rotate: [0, 180, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-[var(--color-accent)] blur-[250px] rounded-full pointer-events-none mix-blend-screen"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Massive Cinematic Title */}
        <FadeIn>
          <h2 className="font-serif text-[clamp(4rem,15vw,11rem)] font-light tracking-tighter mb-16 md:mb-24 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 text-center">
            The <span className="italic">Polymath</span>
          </h2>
        </FadeIn>
        
        {/* The 'Director Outline' Manifesto Text */}
        <FadeIn delay={0.2}>
          <div className="relative max-w-6xl mx-auto mb-32 md:mb-56 group">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start text-left">
              {/* Main Hook */}
              <div className="lg:col-span-7 relative">
                {/* Visual Anchor Line */}
                <div className="absolute -left-4 md:-left-12 top-2 w-[2px] h-16 md:h-24 bg-[var(--color-accent)] shadow-[0_0_20px_var(--color-accent)]" />
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-white leading-[1.1] tracking-tight">
                  I am Muhammadbinbasheer, a <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-white drop-shadow-md">record-holding technologist</span> & entrepreneur driven by pure innovation.
                </h3>
              </div>
              
              {/* Details Paragraphs */}
              <div className="lg:col-span-5 flex flex-col gap-8 text-white/50 text-base md:text-lg lg:text-xl font-light leading-relaxed font-sans mt-4 lg:mt-0">
                <p className="hover:text-white/80 transition-colors duration-500">
                  With a strong foundation in programming and cybersecurity, I specialize in building scalable digital solutions while ensuring robust security. My expertise extends beyond technology into the creative world, where I actively explore storytelling, filmmaking, and visual design.
                </p>
                <p className="hover:text-white/80 transition-colors duration-500">
                  As a founder working across the tech and film sectors, I focus on merging technical precision with creative vision—developing impactful products and compelling narratives. Currently, I am working on my debut feature film, bringing my storytelling abilities to the big screen.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* The Cinematic Sequence List (Replaces the Grid) */}
        <div className="w-full max-w-6xl mx-auto flex flex-col relative">
          {/* Section Header */}
          <FadeIn delay={0.4}>
            <div className="flex items-center gap-4 mb-4 text-[var(--color-accent)] font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
              <Focus className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} /> Active Disciplines
            </div>
          </FadeIn>

          {/* Interactive Movie Credit Rows */}
          {details.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-t border-white/10 py-10 sm:py-14 md:py-20 hover:border-[var(--color-accent)]/50 transition-colors duration-700 cursor-default overflow-hidden isolate"
            >
              {/* Hover Parallax Beam */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/0 via-[var(--color-accent)]/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out pointer-events-none -z-10" />

              {/* Scene Numbering (Left) */}
              <div className="absolute top-10 sm:top-14 md:top-20 left-0 font-mono text-xs sm:text-sm md:text-base text-white/30 tracking-[0.2em] sm:tracking-[0.4em] transition-all duration-700 group-hover:text-[var(--color-accent)] group-hover:translate-x-2">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Main Text String */}
              <div className="pl-10 sm:pl-16 md:pl-24 relative z-10 flex justify-between items-center w-full">
                <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-light tracking-tighter text-white/50 group-hover:text-white transition-all duration-700 group-hover:italic group-hover:translate-x-2 sm:group-hover:translate-x-8 drop-shadow-2xl pr-4">
                  {item.value}
                </h3>
                
                {/* Massive Hidden Background Icon */}
                <div className="absolute right-0 opacity-0 group-hover:opacity-10 transition-all duration-1000 transform scale-50 group-hover:scale-150 rotate-12 group-hover:rotate-0 text-[var(--color-accent)] pointer-events-none blur-xl group-hover:blur-md hidden sm:block">
                  {item.icon}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10 w-full" />
        </div>
      </div>
    </section>
  );
}
