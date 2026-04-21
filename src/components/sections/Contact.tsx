import { FadeIn } from '../animations/FadeIn';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Instagram, ArrowUpRight, RadioTower } from 'lucide-react';

export function Contact() {
  const endpoints = [
    {
      id: "SECURE COMMS / 01",
      label: "Gmail",
      value: "beingelzey@gmail.com",
      href: "mailto:beingelzey@gmail.com",
      icon: <Mail className="w-8 h-8 xl:w-12 xl:h-12" strokeWidth={0.5} />
    },
    {
      id: "SECURE COMMS / 02",
      label: "WhatsApp",
      value: "+91 8848918633",
      href: "https://wa.me/918848918633",
      icon: <MessageSquare className="w-8 h-8 xl:w-12 xl:h-12" strokeWidth={0.5} />
    },
    {
      id: "SECURE COMMS / 03",
      label: "Instagram",
      value: "@muhammadbinbasheer",
      href: "https://www.instagram.com/muhammadbinbasheer?igsh=MWU2NTc3dHM4YXVjZQ==",
      icon: <Instagram className="w-8 h-8 xl:w-12 xl:h-12" strokeWidth={0.5} />
    }
  ];

  return (
    <footer className="relative min-h-screen bg-[#000000] pt-32 pb-12 overflow-hidden isolate flex flex-col justify-between">
      {/* Visual Grounding - Radar / Sonar wave emission */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none mix-blend-screen overflow-hidden">
        <motion.div
          animate={{ scale: [1, 4], opacity: [0.8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-[300px] h-[300px] rounded-full border border-[var(--color-accent)]"
        />
        <motion.div
          animate={{ scale: [1, 4], opacity: [0.8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeOut", delay: 2 }}
          className="absolute w-[300px] h-[300px] rounded-full border border-[var(--color-accent)]"
        />
        <motion.div
          animate={{ scale: [1, 4], opacity: [0.8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeOut", delay: 4 }}
          className="absolute w-[300px] h-[300px] rounded-full border border-[var(--color-accent)]"
        />
      </div>

      {/* Massive Global Underglow */}
      <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[120vw] h-[800px] bg-[var(--color-accent)]/10 blur-[250px] pointer-events-none z-0 mix-blend-screen" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Cinematic Single-Line Title */}
        <FadeIn>
          <div className="w-full overflow-hidden flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 lg:gap-8 border-b border-white/5 pb-10 mb-16 md:mb-24">
            <h2 className="font-serif uppercase whitespace-nowrap tracking-[0.1em] sm:tracking-[0.25em] font-light text-[clamp(1.5rem,4vw,6rem)] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[var(--color-accent)]/80 to-[#111111] drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] select-none text-center lg:text-left">
              Initiate Transmission
            </h2>
            <div className="flex items-center gap-3 text-[var(--color-text-muted)] font-mono text-[10px] tracking-[0.4em] uppercase mb-2">
              <RadioTower className="w-4 h-4 text-[var(--color-accent)] animate-pulse" /> Awaiting Signal
            </div>
          </div>
        </FadeIn>

        {/* The Communication Endpoints */}
        <div className="flex flex-col gap-6 md:gap-8 mb-32 max-w-6xl mx-auto xl:ml-0">
          {endpoints.map((endpoint, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <a
                href={endpoint.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 lg:p-14 rounded-[2rem] bg-white/[0.015] border border-white/5 hover:bg-white/[0.03] hover:border-[var(--color-accent)]/30 transition-all duration-700 overflow-hidden isolate shadow-2xl hover:shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
              >
                 {/* Laser Sweep Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent)]/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[2s] ease-in-out pointer-events-none -z-10" />

                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 w-full">
                   {/* Mechanical Icon Pod */}
                   <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-[1.5rem] border border-white/5 bg-black/60 flex items-center justify-center text-white/20 group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/40 group-hover:scale-110 group-hover:shadow-[inset_0_0_30px_rgba(242,125,38,0.1)] transition-all duration-700 shrink-0 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-700" />
                     {endpoint.icon}
                   </div>

                   <div className="flex flex-col w-full overflow-hidden">
                     <div className="flex gap-4 items-center mb-4 sm:mb-6">
                       <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-500">
                         {endpoint.id}
                       </span>
                       <span className="h-[1px] w-8 bg-white/10 group-hover:w-24 group-hover:bg-[var(--color-accent)]/50 transition-all duration-1000 ease-out" />
                     </div>

                     <h3 className="font-serif text-[clamp(1.2rem,3.5vw,4.5rem)] text-white/60 group-hover:text-white transition-all duration-700 font-light tracking-tighter leading-[1.1] group-hover:translate-x-2 sm:group-hover:translate-x-4 ease-out truncate block overflow-hidden max-w-[90vw]">
                       {endpoint.value}
                     </h3>
                     
                     <div className="flex items-center gap-3 mt-4 sm:mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                       <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rotate-45" />
                       <span className="font-mono font-light text-[var(--color-accent)]/80 text-xs sm:text-sm tracking-[0.3em] uppercase">
                         Access Protocol: {endpoint.label}
                       </span>
                     </div>
                   </div>
                </div>

                {/* Ambient Target Reticle (Right) */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-12 transition-all duration-1000 ease-out text-[var(--color-accent)] hidden lg:block">
                  <ArrowUpRight strokeWidth={0.5} className="w-32 h-32 opacity-10 group-hover:opacity-30 transition-opacity duration-1000 scale-50 group-hover:scale-100 drop-shadow-[0_0_20px_var(--color-accent)]" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Cinematic System Footer / Credits */}
        <FadeIn delay={0.4}>
          <div className="border-t border-white/10 pt-10 pb-4 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] text-white/30 uppercase">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[0_0_10px_var(--color-accent)]" /> 
              Transmission Line Secure
            </div>
            <div className="text-center group hover:text-white transition-colors duration-300">
              <span className="text-white/10 group-hover:text-[var(--color-accent)] transition-colors">//</span> &copy; {new Date().getFullYear()} MUHAMMADBINBASHEER <span className="text-white/10 group-hover:text-[var(--color-accent)] transition-colors">//</span>
            </div>
            <div>
              End of Line.
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
