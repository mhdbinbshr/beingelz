import { FadeIn } from '../animations/FadeIn';
import { motion } from 'motion/react';
import { Play, Flame, Film } from 'lucide-react';

export function CreativeWork() {
  const acts = [
    { 
      id: "ACT I",
      title: "Story & Script Writing", 
      desc: "Crafting foundational narratives and intricate world-building."
    },
    { 
      id: "ACT II",
      title: "Original Concepts", 
      desc: "Developing raw ideas into fully realized cinematic blueprints."
    },
    { 
      id: "ACT III",
      title: "Feature Film", 
      desc: "Currently working on my debut feature film."
    }
  ];

  return (
    <section className="py-24 md:py-40 min-h-screen relative bg-[#000000] overflow-hidden isolate">
      {/* Cinematic Environmental Projection Beams */}
      <div className="absolute top-0 right-[10%] w-[120%] h-[150%] max-w-[1500px] bg-[conic-gradient(from_200deg_at_100%_0%,_transparent_0%,_var(--color-accent)_10%,_transparent_20%)] opacity-[0.07] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-accent)]/20 blur-[200px] rounded-full pointer-events-none mix-blend-screen opacity-40 z-0" />
      
      {/* Animated Film Scratches / Grain overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Preserved Single-Line Title */}
        <FadeIn>
          <div className="w-full overflow-hidden flex justify-center lg:justify-start border-b border-white/5 pb-10 mb-16 md:mb-24">
            <h2 className="font-serif uppercase whitespace-nowrap tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] font-light text-[clamp(1rem,4.5vw,5rem)] lg:text-[clamp(1.2rem,3.2vw,4.5rem)] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[var(--color-accent)]/80 to-[#111111] drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] select-none text-center lg:text-left">
              Film <span className="text-[var(--color-accent)] opacity-80">&</span> Creative Work
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: The Director's Logs */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none border-l-2 border-[var(--color-accent)] bg-white/[0.02] mb-12 relative overflow-hidden group">
                 {/* Sweep effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                 <Film className="w-4 h-4 text-[var(--color-accent)]" />
                 <span className="text-[10px] md:text-xs font-mono text-white/70 tracking-[0.4em] uppercase relative z-10">Director's Log</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight tracking-tighter mb-16">
                Cinema is a <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent)]/40 relative">
                  parallel journey.
                  <svg className="absolute w-full h-3 -bottom-2 left-0 text-[var(--color-accent)]/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 0" fill="transparent" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </h3>
            </FadeIn>

            <div className="flex flex-col gap-8 w-full">
              {acts.map((act, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.4 + (idx * 0.15), duration: 0.8, ease: "easeOut" }}
                  className="group relative flex items-start gap-6 cursor-default isolate"
                >
                  <div className="mt-1 flex-shrink-0 relative">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-all duration-500 overflow-hidden relative">
                       <Play className="w-4 h-4 text-white/30 group-hover:text-[var(--color-accent)] ml-1 transition-colors duration-500 z-10" />
                       <div className="absolute left-0 top-0 w-full h-full bg-[var(--color-accent)] scale-0 group-hover:scale-100 transition-transform duration-700 origin-left opacity-20 -z-10" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 relative">
                    <div className="flex items-end gap-4">
                      <span className="font-mono text-[10px] text-[var(--color-accent)]/60 tracking-[0.2em] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {act.id}
                      </span>
                      <div className="h-[1px] flex-1 bg-white/5 mb-[0.4rem]" />
                    </div>
                    
                    <h4 className="font-serif text-2xl md:text-3xl text-white/80 group-hover:text-white transition-colors duration-500 font-light tracking-tight group-hover:translate-x-2 ease-out transform">
                      {act.title}
                    </h4>
                    <p className="font-sans font-light text-white/30 group-hover:text-white/60 transition-colors duration-500 text-sm md:text-base max-w-sm group-hover:translate-x-2 ease-out transform delay-75">
                      {act.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image / Glowing Lightbox */}
          <div className="order-1 lg:order-2 perspective-[2500px]">
            <FadeIn delay={0.4}>
              <motion.div 
                whileHover={{ rotateY: -8, rotateX: 4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl mx-auto max-w-lg isolate group"
              >
                {/* Physical Bezel & Backlight */}
                <div className="absolute inset-[-4px] rounded-[2rem] bg-gradient-to-br from-white/20 via-transparent to-[var(--color-accent)]/40 pointer-events-none -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-sm" />
                <div className="absolute inset-0 rounded-3xl bg-black/50 pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-[var(--color-accent)]/50 transition-colors duration-1000 pointer-events-none z-20" />
                
                {/* "REC" Overlay */}
                <div className="absolute top-6 right-6 z-30 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 group-hover:border-[var(--color-accent)]/30 transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                  <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-white">REC</span>
                </div>

                {/* Director Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-30 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-700">
                   <div className="font-mono text-[10px] text-[var(--color-accent)] tracking-[0.4em] uppercase mb-2">Cinematography</div>
                   <div className="font-serif italic text-3xl font-light text-white tracking-tighter">Director's Cut</div>
                </div>

                {/* The Master Image */}
                <div className="w-full h-full overflow-hidden rounded-3xl bg-[#111]">
                  <img 
                    src="https://ik.imagekit.io/dto1zguat/IMG_20260415_235224.png?updatedAt=1776748400052" 
                    alt="Film Production & Creative Work"
                    className="object-cover w-full h-full filter saturate-50 contrast-125 group-hover:saturate-125 transition-all duration-[1.5s] ease-out transform group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
