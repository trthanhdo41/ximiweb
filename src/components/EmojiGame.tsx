import { useState, useRef } from "react";
import { Sparkles } from "lucide-react";

interface EmojiItem {
  id: number;
  emoji: string;
  left: number;
  top: number;
  size: string;
  duration: string;
}

export const EmojiGame = () => {
  const [emojis, setEmojis] = useState<EmojiItem[]>([]);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const emojiIdRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const emojiList = ['😀', '🎉', '🚀', '💻', '⭐', '🔥', '💡', '🎨', '🌟', '✨', '🎯', '💎', '🌈', '⚡'];

  const shootEmoji = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const duration = Math.random() * 0.5 + 1; // 1-1.5 seconds
    
    const newEmoji: EmojiItem = {
      id: emojiIdRef.current++,
      emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
      left: x,
      top: y,
      size: Math.random() * 16 + 24 + 'px',
      duration: duration + 's'
    };
    
    setEmojis(prev => [...prev, newEmoji]);
    
    // Cleanup emoji after animation
    setTimeout(() => {
      setEmojis(prev => prev.filter(emoji => emoji.id !== newEmoji.id));
    }, duration * 1000);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    shootEmoji(e);
    
    const canvas = e.currentTarget;
    intervalRef.current = setInterval(() => {
      const fakeEvent = {
        currentTarget: canvas,
        clientX: e.clientX,
        clientY: e.clientY,
      } as React.MouseEvent<HTMLDivElement>;
      shootEmoji(fakeEvent);
    }, 100); // Shoot every 100ms
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      shootEmoji(e);
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Interactive Demo
          </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="text-white">Trải nghiệm tương tác</span>{" "}
                    <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                      thú vị
                    </span>
                  </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Click và giữ chuột để bắn emoji liên tục! Khám phá khả năng animation mượt mà
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Emoji Cannon
              </h3>
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                INTERACTIVE
              </span>
            </div>
            
            <p className="text-sm text-gray-400 text-center mb-4">
              Giữ chuột và di chuyển để bắn emoji liên tục!
            </p>

            <div
              className="relative w-full h-[400px] bg-gradient-to-br from-secondary/50 to-background rounded-xl overflow-hidden cursor-crosshair select-none border border-primary/10"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {/* Hint text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-gray-500 text-lg font-medium opacity-50">
                  Click anywhere to shoot!
                </p>
              </div>

              {/* Emojis */}
              {emojis.map(emoji => (
                <div
                  key={emoji.id}
                  className="absolute animate-fall pointer-events-none select-none"
                  style={{
                    left: `${emoji.left}px`,
                    top: `${emoji.top}px`,
                    fontSize: emoji.size,
                    animationDuration: emoji.duration,
                  }}
                >
                  {emoji.emoji}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span>Emojis: {emojis.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Status: {isMouseDown ? 'Shooting' : 'Ready'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(300px) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>
    </section>
  );
};

