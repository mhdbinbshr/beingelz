import { FadeIn } from '../animations/FadeIn';
import { Award, ShieldCheck, Fingerprint, Bug, Scan, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export function Achievements() {
  const achievements = [
    { 
      id: "01",
      tag: "HONORS",
      icon: <Award size={32} strokeWidth={1} />, 
      title: "Record Holder",
      subtitle: "In the Tech Field"
    },
    { 
      id: "02",
      tag: "OFFENSIVE",
      icon: <ShieldCheck size={32} strokeWidth={1} />, 
      title: "Certified",
      subtitle: "Ethical Hacker"
    },
    { 
      id: "03",
      tag: "FORENSICS",
      icon: <Fingerprint size={32} strokeWidth={1} />, 
      title: "Cyber Forensic",
      subtitle: "Certified in Essentials"
    },
    { 
      id: "04",
      tag: "SECURITY",
      icon: <Bug size={32} strokeWidth={1} />, 
      title: "Active Bug Hunter",
      subtitle: "& Security Tester"
    },
  ];

  return (
    <section className="py-24 md:py-40 min-h-screen relative bg-[#010101] overflow-hidden isolate">
      {/* Heavy Cinematic Lighting / The Vault Look */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-accent)]/20 blur-[150px] rounded-[100%] pointer-events-none mix-blend-screen opacity-50" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#ffffff]/10 blur-[200px] rounded-[100%] pointer-events-none mix-blend-screen opacity-30" />
      
      {/* Vertical Laser Scanline */}
      <motion.div 
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-accent)]/50 to-transparent pointer-events-none z-0 hidden md:block" 
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn className="mb-24 text-center md:text-left">
          <div className="w-full overflow-hidden flex flex-col md:flex-row md:justify-between items-center md:items-end gap-6 border-b border-white/5 pb-10">
            <h2 className="font-serif uppercase whitespace-nowrap tracking-[0.1em] sm:tracking-[0.25em] font-light text-[clamp(0.7rem,3.5vw,5rem)] md:text-[clamp(1.5rem,4vw,6rem)] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[var(--color-accent)]/80 to-[#111111] drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] select-none">
              Achievements <span className="text-[var(--color-accent)] opacity-80">&</span> Certifications
            </h2>
            <div className="flex items-center gap-2 text-[var(--color-text-muted)] font-mono text-[10px] tracking-[0.4em] uppercase">
              <Lock className="w-3 h-3" /> Encrypted Vault
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col w-full max-w-7xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, filter: 'blur(20px)', y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group border-b border-white/5 last:border-none"
            >
              <div className="relative flex flex-col lg:flex-row items-start lg:items-center py-16 lg:py-20 hover:bg-gradient-to-r from-transparent via-white/[0.015] to-transparent transition-colors duration-1000 z-10 px-4 sm:px-10 overflow-hidden isolate">
                
                {/* Horizontal Sweeping Laser on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent)]/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[2.5s] ease-in-out pointer-events-none -z-10" />

                {/* Index / ID Block */}
                <div className="w-24 sm:w-32 lg:w-48 shrink-0 flex flex-col font-mono text-white/20 group-hover:text-[var(--color-accent)] transition-colors duration-700 z-10 mb-8 lg:mb-0">
                  <span className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tighter leading-none">{item.id}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] mt-3 sm:mt-4 opacity-50 group-hover:opacity-100 flex items-center gap-2">
                    <Scan className="w-3 h-3 hidden sm:block" /> {item.tag}
                  </span>
                </div>

                {/* Content Block */}
                <div className="flex-1 relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-8">
                  <div className="flex flex-col group-hover:translate-x-4 lg:group-hover:translate-x-8 transition-transform duration-700 ease-out">
                    <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white/50 group-hover:text-white transition-colors duration-500 font-light tracking-tight leading-none mb-2">
                      {item.title}
                    </h3>
                    <div className="font-sans font-light text-[var(--color-accent)]/60 text-lg sm:text-2xl lg:text-3xl group-hover:text-[var(--color-accent)] transition-colors duration-700">
                      {item.subtitle}
                    </div>
                  </div>

                  {/* Icon Block */}
                  <div className="lg:w-32 lg:h-32 w-16 h-16 shrink-0 rounded-full border border-white/5 flex items-center justify-center text-white/10 group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/30 group-hover:bg-[var(--color-accent)]/[0.02] group-hover:shadow-[0_0_50px_rgba(242,125,38,0.15)] transition-all duration-700 bg-black/50 backdrop-blur-xl group-hover:scale-110">
                    <div className="scale-75 sm:scale-100 lg:scale-[1.5]">
                      {item.icon}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
