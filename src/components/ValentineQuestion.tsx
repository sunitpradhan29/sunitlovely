import { useState, useRef } from "react";
import { motion } from "framer-motion";
import CutePanda from "./CutePanda";

interface ValentineQuestionProps {
  onYes: () => void;
}

const noMessages = [
  "Are you sure? 🥺",
  "Panda is sad… try again 🐼💔",
  "Think once more, my love ❤️",
  "I'll wait forever… ⏳",
  "Pretty please? 🌸",
  "You're breaking panda's heart! 💔",
  "One more chance? 🥺💕",
  "Panda believes in you! 🐼✨",
  "Love is the answer! 💖",
  "Click Yes, you know you want to! 😘",
];

const ValentineQuestion = ({ onYes }: ValentineQuestionProps) => {
  const [noCount, setNoCount] = useState(0);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    setShowMessage(true);
    
    // After 8 tries, make the No button disappear
    if (noCount >= 7) {
      setNoButtonStyle({ opacity: 0, pointerEvents: "none" as const });
      return;
    }

    // Random behavior for No button
    const behaviors = [
      // Move randomly
      () => {
        if (containerRef.current) {
          const container = containerRef.current.getBoundingClientRect();
          const maxX = container.width - 120;
          const maxY = container.height - 60;
          setNoButtonStyle({
            transform: `translate(${Math.random() * maxX - maxX / 2}px, ${Math.random() * maxY - maxY / 2}px)`,
          });
        }
      },
      // Shrink
      () => {
        const scale = Math.max(0.5, 1 - noCount * 0.1);
        setNoButtonStyle({
          transform: `scale(${scale})`,
        });
      },
      // Run away
      () => {
        setNoButtonStyle({
          transform: `translateX(${(noCount % 2 === 0 ? 1 : -1) * (100 + noCount * 20)}px)`,
        });
      },
    ];

    const randomBehavior = behaviors[Math.floor(Math.random() * behaviors.length)];
    randomBehavior();

    setTimeout(() => setShowMessage(false), 2000);
  };

  // Yes button grows as No is clicked more
  const yesScale = 1 + noCount * 0.1;

  return (
    <div ref={containerRef} className="relative text-center py-12">
      {/* Proposing pandas */}
      <div className="flex justify-center items-end gap-4 mb-8">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <CutePanda variant="proposing" size="xl" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        >
          <CutePanda variant="shy" size="xl" />
        </motion.div>
      </div>

      {/* Question */}
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient-love"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Will You Be My Valentine? 💘
      </motion.h2>

      {/* Message display */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: showMessage ? 1 : 0,
          height: showMessage ? "auto" : 0,
        }}
        className="mb-6 overflow-hidden"
      >
        <p className="text-lg md:text-xl text-primary font-medium">
          {noMessages[noCount % noMessages.length]}
        </p>
      </motion.div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative min-h-[120px]">
        <motion.button
          onClick={onYes}
          className="btn-love text-xl px-10 py-5"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: yesScale }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Yes 💖
        </motion.button>

        <motion.button
          onClick={handleNoClick}
          className="btn-shy text-xl px-10 py-5"
          style={noButtonStyle}
          whileHover={{ scale: noCount < 8 ? 0.9 : 1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {noCount >= 8 ? "Yes 💖" : "No 😢"}
        </motion.button>
      </div>

      {/* Hint after many tries */}
      {noCount >= 5 && noCount < 8 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-muted-foreground text-sm"
        >
          Hint: The No button is getting scared... 🐼
        </motion.p>
      )}
    </div>
  );
};

export default ValentineQuestion;
