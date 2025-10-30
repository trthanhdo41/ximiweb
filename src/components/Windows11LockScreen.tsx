import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Windows11LockScreenProps {
  onUnlock?: () => void;
}

export const Windows11LockScreen = ({ onUnlock }: Windows11LockScreenProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [weather, setWeather] = useState({ temp: 28, condition: "Nắng", icon: "☀️" });
  const [location, setLocation] = useState("Hồ Chí Minh");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("vi-VN", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUnlocking(true);
    setTimeout(() => {
      onUnlock?.();
    }, 800);
  };

  const handleInitialClick = () => {
    setIsUnlocking(true);
    setTimeout(() => {
      onUnlock?.();
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: isUnlocking ? "-100%" : 0
      }}
      exit={{ opacity: 0 }}
      transition={{ 
        opacity: { duration: 0.5 },
        y: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
      }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex flex-col items-center justify-center"
      onClick={handleInitialClick}
      style={{
        backgroundImage: "url('https://phongvu.vn/cong-nghe/wp-content/uploads/2025/04/hinh-nen-win-11-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Segoe UI Variable Display', 'Segoe UI', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
        cursor: "pointer",
        touchAction: "none",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center w-full h-full justify-center"
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.3}
        dragMomentum={false}
        onDragEnd={(e, info) => {
          if (info.offset.y < -50) {
            handleInitialClick();
          }
        }}
      >
        {!showPassword ? (
          <motion.div
            initial={{ y: 0 }}
            className="text-center cursor-pointer"
            onClick={handleInitialClick}
          >
            {/* Time */}
            <motion.div
              className="text-8xl md:text-9xl text-white mb-4"
              style={{ fontWeight: 300 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {formatTime(currentTime)}
            </motion.div>

            {/* Date */}
            <motion.div
              className="text-2xl md:text-3xl text-white/90 capitalize"
              style={{ fontWeight: 300 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {formatDate(currentTime)}
            </motion.div>

            {/* Weather & Location */}
            <motion.div
              className="mt-8 flex items-center justify-center gap-4 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-3xl">{weather.icon}</span>
                <span className="text-2xl" style={{ fontWeight: 300 }}>
                  {weather.temp}°C
                </span>
              </div>
              <span className="text-xl opacity-60">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-xl" style={{ fontWeight: 300 }}>
                  {location}
                </span>
              </div>
            </motion.div>

            {/* Hint */}
            <motion.div
              className="mt-12 flex flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </motion.div>
              <p className="text-lg text-white/70">
                Vuốt lên hoặc nhấp để mở khóa
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* User Avatar */}
            <motion.div
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-5xl font-bold text-white shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              XT
            </motion.div>

            {/* User Name */}
            <h2 className="text-3xl text-white mb-2" style={{ fontWeight: 400 }}>XimiTech</h2>
            <p className="text-lg text-white/70 mb-8" style={{ fontWeight: 300 }}>trdo1309@gmail.com</p>

            {/* Password Form */}
            <form onSubmit={handleUnlock} className="w-80">
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-md transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </form>

            {/* Hint Text */}
            <p className="mt-6 text-sm text-white/50">
              Nhấn Enter hoặc nhấp vào mũi tên để vào website
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Bottom Bar */}
      <div className="absolute bottom-8 right-8 flex items-center gap-6 text-white/70">
        {/* Network Icon */}
        <button className="hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        </button>

        {/* Volume Icon */}
        <button className="hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Power Icon */}
        <button className="hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

