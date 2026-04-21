import { FadeIn } from '../animations/FadeIn';
import { motion } from 'motion/react';
import { Code2, ShieldAlert, MonitorSmartphone, Film } from 'lucide-react';

export function Experience() {
  const phases = [
    {
      id: "DIRECTIVE / 01",
      title: "Tech Solutions",
      desc: "Developed and deployed multiple tech solutions.",
      icon: <Code2 strokeWidth={0.5} size={48} />
    },
    {
      id: "DIRECTIVE / 02",
      title: "Cybersecurity",
      desc: "Worked on cybersecurity testing and vulnerability assessment.",
      icon: <ShieldAlert strokeWidth={0.5} size={48} />
    },
    {
      id: "DIRECTIVE / 03",
      title: "Web Development",
      desc: "Designed and developed websites and applications.",
      icon: <MonitorSmartphone strokeWidth={0.5} size={48} />
    },
    {
      id: "DIRECTIVE / 04",
      title: "Film Production",
      desc: "Actively involved in storytelling and film production.",
      icon: <Film strokeWidth={0.5} size={48} />
    }
  ];

  return (
    <section className="py-24 md:py-40 min-h-screen relative bg-[#010101] overflow-hidden isolate">
      {/* Cinematic Conic Spotlight / Anomaly */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-[-20%] w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] bg-[conic-gradient(from_90deg_at_50%_50%,_var(--color-accent)_0%,_transparent_10%,_transparent_50%,_var(--color-accent)_100%)] opacity-10 blur-[150px] pointer-events-none -z-10 rounded-full hidden md:block"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Single-Line Cinematic Title (Maintained from previous state) */}
        <FadeIn>
          <div className="w-full overflow-hidden flex justify-center md:justify-start border-b border-white/5 pb-10 mb-20 md:mb-32">
            <h2 className="font-serif uppercase whitespace-nowrap tracking-[0.1em] sm:tracking-[0.25em] font-light text-[clamp(0.9rem,4vw,5.5rem)] md:text-[clamp(1.5rem,4.5vw,7rem)] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[var(--color-accent)]/80 to-[#111111] drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] select-none text-center md:text-left">
              Professional Experience
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Fixed / Sticky Manifesto */}
          <div className="lg:w-5/12 relative w-full">
            <div className="lg:sticky lg:top-40">
              <FadeIn delay={0.2}>
                <div className="inline-flex items-center gap-4 mb-8 sm:mb-10">
                  <div className="w-8 h-[1px] bg-[var(--color-accent)]" />
                  <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--color-accent)]">Entrepreneur & Founder</span>
                </div>
                
                <h3 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] tracking-tighter mb-8 max-w-lg">
                  Bridging <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">Code</span> <br className="hidden sm:block" />
                  <span className="text-white/20">&</span> <span className="italic text-[var(--color-accent)] text-shadow-sm">Cinema.</span>
                </h3>
                
                <p className="text-white/40 font-light font-sans text-base sm:text-lg md:text-xl leading-relaxed tracking-wide max-w-md border-l border-[var(--color-accent)]/30 pl-6">
                  Working across technology and film sectors, building innovative solutions and creative projects.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Cascading Mission Directives */}
          <div className="lg:w-7/12 flex flex-col gap-6 sm:gap-8 md:gap-12 w-full">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, filter: 'blur(15px)', x: 40 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group p-8 sm:p-10 md:p-14 border border-white/5 bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-1000 overflow-hidden isolate rounded-[2rem] sm:rounded-[3rem]"
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-1000 pointer-events-none -z-10" />

                {/* Animated Cinematic Crop Marks (Top Left & Bottom Right) */}
                <div className="absolute top-6 left-6 w-6 sm:w-8 h-6 sm:h-8 border-t border-l border-white/10 group-hover:border-[var(--color-accent)] transition-colors duration-700 pointer-events-none" />
                <div className="absolute bottom-6 right-6 w-6 sm:w-8 h-6 sm:h-8 border-b border-r border-white/10 group-hover:border-[var(--color-accent)] transition-colors duration-700 pointer-events-none" />

                <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-8 group-hover:border-[var(--color-accent)]/50 transition-colors duration-1000">
                  <span className="font-mono text-[9px] sm:text-[10px] md:text-xs text-[var(--color-text-muted)] tracking-[0.3em] sm:tracking-[0.5em] uppercase group-hover:text-[var(--color-accent)] transition-colors duration-500">
                    {phase.id}
                  </span>
                  <div className="text-white/10 group-hover:text-[var(--color-accent)] transition-all duration-1000 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_20px_rgba(242,125,38,0.5)]">
                    {phase.icon}
                  </div>
                </div>

                <div className="relative z-10 group-hover:translate-x-2 transition-transform duration-700 ease-out">
                  <h4 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white/60 group-hover:text-white transition-colors duration-700 font-light tracking-tighter mb-4 sm:mb-6 leading-tight">
                    {phase.title}
                  </h4>
                  <p className="font-sans font-light text-white/30 group-hover:text-white/70 transition-colors duration-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
