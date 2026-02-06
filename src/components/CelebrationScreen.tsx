import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import CutePanda from "./CutePanda";

interface CelebrationScreenProps {
  onClose?: () => void;
}

const CelebrationScreen = ({ onClose }: CelebrationScreenProps) => {
  useEffect(() => {
    // Initial burst
    const burst = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF6B8A", "#FFB6C1", "#FF69B4", "#FFC0CB", "#FF1493"],
      });
    };

    burst();
    
    // Continuous celebration
    const interval = setInterval(() => {
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#FF6B8A", "#FFB6C1", "#FF1493"],
      });
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#FF6B8A", "#FFB6C1", "#FF1493"],
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const floatingEmojis = ["💖", "💕", "💗", "🎊", "🎉", "💝", "🌸", "✨"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-gradient-sunset overflow-hidden"
    >
      {/* Floating celebration emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl md:text-5xl"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight + 50 
          }}
          animate={{
            y: -100,
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {emoji}
        </motion.span>
      ))}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.3, damping: 10 }}
        className="text-center z-10"
      >
        {/* Dancing pandas */}
        <div className="flex justify-center gap-4 mb-6">
          <motion.div
            animate={{ rotate: [-10, 10, -10], y: [0, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <CutePanda variant="dancing" size="lg" />
          </motion.div>
          <motion.div
            animate={{ rotate: [10, -10, 10], y: [0, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
          >
            <CutePanda variant="happy" size="lg" />
          </motion.div>
          <motion.div
            animate={{ rotate: [-10, 10, -10], y: [0, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
          >
            <CutePanda variant="dancing" size="lg" />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient-love"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Yayyyy! 🎉
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-2xl text-foreground mb-6 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            You made me the happiest person alive!
          </motion.p>

          <motion.p
            className="font-romantic text-4xl md:text-6xl text-primary"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            I love you forever ❤️
          </motion.p>
        </motion.div>

        {/* Heart explosion effect */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap max-w-xs mx-auto">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.span
              key={i}
              className="text-2xl md:text-3xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{ 
                delay: 0.1 * i,
                y: { delay: 1 + 0.1 * i, duration: 1, repeat: Infinity }
              }}
            >
              💖
            </motion.span>
          ))}
        </div>

        {onClose && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={onClose}
            className="mt-8 btn-love"
          >
            See Our Memories 📸
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CelebrationScreen;
