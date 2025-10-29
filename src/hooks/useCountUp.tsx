import { useState, useEffect, useRef } from "react";

export const useCountUp = (end: number, duration: number = 2000, isVisible: boolean = true) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    hasAnimated.current = true;
    let startTime: number | null = null;
    const startValue = 0;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const currentCount = progress * (end - startValue) + startValue;
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure final value is exact
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, isVisible]);

  return count;
};

