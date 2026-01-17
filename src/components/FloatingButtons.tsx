import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

export const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <AnimatePresence>
        {showScrollTop && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.3 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 z-40"
          >
            <button
              onClick={scrollToTop}
              className="relative flex items-center justify-center h-16 w-16 transition-all hover:scale-110 active:scale-95 group focus:outline-none"
            >
            {/* Circular Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 p-0.5" viewBox="0 0 100 100">
              {/* Background ring */}
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                className="text-white/10"
              />
              {/* Progress ring with glow */}
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="url(#progress-gradient)"
                strokeWidth="5"
                strokeLinecap="round"
                style={{
                  pathLength,
                }}
              />
              {/* Gradient definition */}
              <defs>
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Inner Button Circle */}
            <div className="h-12 w-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl group-hover:bg-primary/20 transition-all duration-300">
              <ChevronUp className="h-6 w-6 text-white group-hover:text-primary transition-colors" />
            </div>
            
            <span className="sr-only">Về đầu trang</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
};

