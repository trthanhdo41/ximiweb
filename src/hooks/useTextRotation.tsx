import { useState, useEffect } from "react";

export const useTextRotation = (words: string[], interval: number = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500); // Half of transition time
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return {
    currentWord: words[currentIndex],
    isAnimating,
  };
};

