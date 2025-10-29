import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
      {showScrollTop && (
        <Button
          size="icon"
          variant="secondary"
          className="fixed bottom-24 right-6 z-40 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-5 w-5" />
          <span className="sr-only">Về đầu trang</span>
        </Button>
      )}
    </>
  );
};

