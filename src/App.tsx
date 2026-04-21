import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Achievements } from './components/sections/Achievements';
import { Experience } from './components/sections/Experience';
import { CreativeWork } from './components/sections/CreativeWork';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { CustomCursor } from './components/animations/CustomCursor';
import { Loader } from './components/animations/Loader';

// Scroll To Top Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Navigation Overlay for subpages
function NavigationOverlay() {
  const location = useLocation();
  
  if (location.pathname === '/') return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-6 lg:top-10 left-6 lg:left-10 z-[100]"
    >
      <Link to="/" className="group flex items-center gap-4 px-5 py-3 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-full hover:bg-white/[0.05] hover:border-[var(--color-accent)]/50 transition-all duration-500 shadow-xl overflow-hidden isolate">
        {/* Sweep effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent)]/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out pointer-events-none -z-10" />
        
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" /> 
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors">Return to Hub</span>
      </Link>
    </motion.div>
  );
}

// Router content wrapped with AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Routes location={location}>
          <Route path="/" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, filter: 'blur(10px)' }} transition={{ duration: 0.8 }}>
            <Hero />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <About />
          </motion.div>
        } />
        <Route path="/achievements" element={
          <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Achievements />
          </motion.div>
        } />
        <Route path="/experience" element={
          <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Experience />
          </motion.div>
        } />
        <Route path="/cinema" element={
          <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <CreativeWork />
          </motion.div>
        } />
        <Route path="/skills" element={
          <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Skills />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Contact />
          </motion.div>
        } />
      </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : null}
      </AnimatePresence>

      {!loading && (
        <main className="bg-[#000000] min-h-screen text-white antialiased selection:bg-[var(--color-accent)] selection:text-black md:cursor-none w-full relative overflow-x-hidden">
          <NavigationOverlay />
          <AnimatedRoutes />
        </main>
      )}
    </Router>
  );
}
