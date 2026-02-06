import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingItem {
  id: number;
  x: number;
  emoji: string;
  delay: number;
  duration: number;
  size: number;
}

const emojis = ["💖", "💕", "💗", "🩷", "❤️", "🌸", "✨", "🐼", "💝", "🌷"];

const FloatingHearts = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const createItem = () => {
      const newItem: FloatingItem = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        delay: 0,
        duration: 8 + Math.random() * 6,
        size: 16 + Math.random() * 20,
      };
      setItems((prev) => [...prev.slice(-25), newItem]);
    };

    // Create initial items
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createItem(), i * 300);
    }

    const interval = setInterval(createItem, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ 
              y: "110vh", 
              x: `${item.x}vw`, 
              opacity: 0,
              rotate: 0 
            }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 1, 1, 0],
              rotate: [0, 10, -10, 0],
              x: [
                `${item.x}vw`,
                `${item.x + (Math.random() - 0.5) * 10}vw`,
                `${item.x}vw`,
              ]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: item.duration,
              ease: "linear",
              delay: item.delay,
            }}
            className="absolute"
            style={{ fontSize: item.size }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;
