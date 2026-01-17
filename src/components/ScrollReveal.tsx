import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
}

export const ScrollReveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.2,
  duration = 0.8
}: ScrollRevealProps) => {
  return (
    <div style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration, 
          delay, 
          type: "spring", 
          stiffness: 50, 
          damping: 20 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const TextReveal = ({ text, className = "" }: { text: string; className?: string }) => {
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20, rotateX: -90 },
            visible: { opacity: 1, y: 0, rotateX: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.05,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
          className="mr-2 inline-block origin-bottom"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export const WavyText = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  let letterCount = 0;

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, wordIndex) => {
        const letters = Array.from(word);
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {letters.map((letter, index) => {
              const currentCount = letterCount++;
              return (
                <motion.span
                  key={index}
                  variants={child}
                  style={{ 
                    display: "inline-block", 
                    whiteSpace: "pre",
                  }}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 2, -2, 0],
                    rotate: [0, 5, -5, 0],
                    transition: {
                      duration: 2.5,
                      repeat: Infinity,
                      delay: currentCount * 0.1,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </motion.div>
  );
};
