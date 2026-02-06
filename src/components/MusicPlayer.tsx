import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a royalty-free romantic music URL
    audioRef.current = new Audio(
      "https://www.soundjay.com/nature/sounds/rain-01.mp3" // Placeholder - user can replace
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {
          // Autoplay might be blocked
        });
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.button
      onClick={toggleMute}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm shadow-love text-primary hover:shadow-float transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      {isMuted ? (
        <VolumeX size={24} />
      ) : (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Volume2 size={24} />
        </motion.div>
      )}
    </motion.button>
  );
};

export default MusicPlayer;
