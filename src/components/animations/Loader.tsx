import { useEffect } from 'react';
import { motion } from 'motion/react';

export function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // 4.5 seconds of total cinematic load time
    const timer = setTimeout(() => onComplete(), 4500); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#000000] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.1,
        transition: { duration: 2, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      {/* Heavy Cinematic Noise */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-screen pointer-events-none z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

      {/* Floating Light Leak */}
      <motion.div 
         animate={{ opacity: [0, 0.2, 0], scale: [0.8, 1.2, 0.8] }}
         transition={{ duration: 4, ease: "easeInOut" }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[var(--color-accent)] blur-[150px] rounded-full pointer-events-none mix-blend-screen -z-10"
      />

      <div className="flex flex-col items-center w-full px-6 text-center z-10 relative">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)", letterSpacing: "0.5em" }}
           animate={{ opacity: 1, scale: 1, filter: "blur(0px)", letterSpacing: "0.2em" }}
           transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
           className="font-serif text-[6vw] sm:text-[4vw] md:text-5xl lg:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-white/80 to-[#555] uppercase w-full flex justify-center dropshadow-2xl"
         >
           Being <span className="italic pl-4 text-white">Elz</span>
         </motion.div>
         
         <div className="w-[40vw] max-w-[200px] h-[1px] bg-white/5 relative overflow-hidden mt-12 mb-4">
            <motion.div 
              className="absolute top-0 left-1/2 h-full bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"
              initial={{ width: "0%", x: "-50%" }}
              animate={{ width: "100%" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 3, delay: 0.5 }}
            />
         </div>
         
         {/* Subtext loading */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: [0, 1, 0.5, 1] }}
           transition={{ duration: 3, delay: 1 }}
           className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-[var(--color-accent)]"
         >
           Loading Sequence
         </motion.div>
      </div>
    </motion.div>
  );
}
