import { motion } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Fingerprint, Lock, Terminal, Film, Cpu, RadioTower } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const navLinks = [
    { name: 'Polymath Origin', path: '/about', id: '01', icon: Fingerprint },
    { name: 'Encrypted Vault', path: '/achievements', id: '02', icon: Lock },
    { name: 'Directives', path: '/experience', id: '03', icon: Terminal },
    { name: 'Director\'s Cut', path: '/cinema', id: '04', icon: Film },
    { name: 'Data Mainframe', path: '/skills', id: '05', icon: Cpu },
    { name: 'Secure Comms', path: '/contact', id: '06', icon: RadioTower },
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#000000] z-0 isolate py-20"
    >
      {/* 1. CINEMATIC BACKGROUND */}
      {/* Deep Center Underglow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] bg-[var(--color-accent)]/10 blur-[200px] rounded-full pointer-events-none mix-blend-screen opacity-40 z-0" />
      
      {/* Slow Projector Beam (Rotating) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0%,_var(--color-accent)_5%,_transparent_15%,_transparent_50%,_var(--color-accent)_55%,_transparent_65%)] opacity-[0.04] mix-blend-screen pointer-events-none -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 z-10 flex flex-col items-center justify-center w-full relative">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(30px)" }}
           animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
           transition={{ duration: 4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
           className="relative w-72 h-80 md:w-96 md:h-[450px] lg:w-[450px] lg:h-[550px] mb-8 md:mb-12 group flex items-center justify-center p-4"
        >
          <div 
             className="w-full h-full relative flex items-center justify-center z-10"
             style={{ 
               maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 75%)", 
               WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 75%)" 
             }}
          >
             {/* The Master Shot */}
             <motion.img 
                src="https://ik.imagekit.io/dto1zguat/IMG_20260222_203102.png" 
                alt="Director Profile"
                initial={{ scale: 1.15, filter: "brightness(0) contrast(1.5)" }}
                animate={{ scale: 1, filter: "brightness(1.1) contrast(1.1)", opacity: [0, 1] }}
                transition={{ duration: 5, ease: "easeOut" }}
                className="w-full h-full object-contain filter grayscale-[0.3] brightness-[1.1] group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-[3s] ease-out mix-blend-screen"
                referrerPolicy="no-referrer"
             />

             {/* REC Overlay */}
             <div className="absolute top-12 right-12 sm:top-16 sm:right-16 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_red]" />
                <span className="font-mono text-[9px] tracking-[0.3em] text-red-500 font-bold">REC</span>
             </div>
           </div>
        </motion.div>

        {/* Massive Title Block */}
        <div className="overflow-visible mb-12 flex flex-col items-center justify-center w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-center w-full flex flex-col items-center"
          >
            <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] xl:text-[6.5rem] font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-white/90 to-[#111111] leading-[0.9] pb-2" style={{ textShadow: "0 20px 50px rgba(0,0,0,0.8)" }}>
              Muhammad<span className="italic font-normal">binbasheer</span>
            </h1>
            
            {/* Alias / Pen Name */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 2, delay: 1.1, ease: "easeOut" }}
              className="flex items-center gap-3 md:gap-5 mt-2 md:mt-4"
            >
              <div className="h-[1px] w-6 sm:w-10 md:w-16 bg-gradient-to-r from-transparent to-white/40" />
              <p className="font-mono text-[7px] sm:text-[9px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-white/50">
                Creatively known as <span className="text-white font-bold ml-1 tracking-[0.4em] sm:tracking-[0.5em] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">ELZ</span>
              </p>
              <div className="h-[1px] w-6 sm:w-10 md:w-16 bg-gradient-to-l from-transparent to-white/40" />
            </motion.div>
          </motion.div>
        </div>

        {/* High-End Cinematic Title Sequence Tagline */}
        <div className="relative mb-16 md:mb-24 w-full flex justify-center perspective-[1500px] px-2 md:px-4 overflow-hidden">
          <motion.div
             initial={{ opacity: 0, rotateX: 30, y: 30, filter: "blur(15px)" }}
             animate={{ opacity: 1, rotateX: 0, y: 0, filter: "blur(0px)" }}
             transition={{ duration: 3, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="relative flex items-center justify-center flex-nowrap whitespace-nowrap gap-1 sm:gap-2 md:gap-4 lg:gap-6 font-sans text-[6px] sm:text-[8px] md:text-[10px] lg:text-[11px] xl:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] lg:tracking-[0.4em] xl:tracking-[0.5em] w-full"
          >
             {/* Deep Ambient Background Glow */}
             <motion.div 
               animate={{ opacity: [0, 0.15, 0], scale: [0.8, 1.2, 0.8] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-0 bg-[var(--color-accent)] blur-[50px] rounded-full pointer-events-none -z-10"
             />

             {["Entrepreneur", "Filmmaker", "Architect", "Cyber Offense"].map((word, idx, arr) => (
               <div key={word} className="flex items-center flex-nowrap whitespace-nowrap gap-1 sm:gap-2 md:gap-4 lg:gap-6">
                 {/* Individual Word Breathing Effect */}
                 <motion.span 
                   animate={{ color: ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)", "rgba(255,255,255,0.3)"] }}
                   transition={{ duration: 5, delay: idx * 1.2, repeat: Infinity, ease: "easeInOut" }}
                   className="relative group cursor-default leading-none shrink-0"
                 >
                   {word}
                   
                   {/* Hover: Optical Flash Underline */}
                   <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-[120%] transition-all duration-700 ease-[0.16,1,0.3,1] shadow-[0_0_15px_rgba(255,255,255,1)] opacity-0 group-hover:opacity-100 mix-blend-screen" />
                 </motion.span>
                 
                 {/* The Cinematic Glass Beams (Separators) */}
                 {idx < arr.length - 1 && (
                   <div className="relative flex items-center justify-center shrink-0">
                     {/* Core optical beam */}
                     <motion.div 
                       animate={{ opacity: [0.1, 0.9, 0.1], height: ["2px", "10px", "2px"] }}
                       transition={{ duration: 4, delay: idx * 0.8, repeat: Infinity, ease: "easeInOut" }}
                       className="w-[1px] bg-white mix-blend-screen shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                     />
                     {/* Orange Light Leak Base */}
                     <div className="absolute w-[2px] h-[14px] bg-[var(--color-accent)]/30 blur-[4px] pointer-events-none" />
                   </div>
                 )}
               </div>
             ))}
          </motion.div>
        </div>

        {/* The Action Grid (Menu Control Deck) */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 perspective-[1000px]">
          {navLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, rotateX: 25, y: 40 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6 + (idx * 0.1), ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={link.path}
                  className="group relative flex flex-col h-full bg-[#050505]/80 backdrop-blur-sm border border-white/5 rounded-2xl md:rounded-[2rem] p-6 md:p-8 lg:p-10 hover:bg-[#0a0a0a] hover:border-[var(--color-accent)]/40 transition-all duration-700 isolate overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_60px_rgba(242,125,38,0.15)] hover:-translate-y-1"
                >
                  {/* Sweep Optical Flare */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent)_0%,_transparent_60%)] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none -z-10" />
                  
                  {/* Top Bar: Scene Info */}
                  <div className="flex justify-between items-center mb-10 md:mb-16 w-full border-b border-white/5 pb-4 group-hover:border-[var(--color-accent)]/20 transition-colors duration-500">
                    <span className="font-mono text-[9px] md:text-[10px] text-[var(--color-accent)] tracking-[0.4em]">
                      {link.id}
                    </span>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/20 group-hover:text-[var(--color-accent)] transition-colors duration-500" strokeWidth={1} />
                  </div>

                  {/* Main Link Text */}
                  <div className="flex-1 flex items-end">
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/60 group-hover:text-white transition-colors duration-500 font-light tracking-tight group-hover:translate-x-2 transform ease-out">
                      {link.name}
                    </h3>
                  </div>

                  {/* Hover Scanning Line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-accent)] group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_10px_var(--color-accent)]" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
