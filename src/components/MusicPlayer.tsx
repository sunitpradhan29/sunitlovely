import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Romantic piano instrumental music - royalty-free
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/audio/2022/01/18/audio_d0ef98bd87.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    audioRef.current.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
    });

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
          // Autoplay might be blocked by browser
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
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm shadow-love text-primary hover:shadow-float transition-all group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      title={isMuted ? "Play romantic music 🎵" : "Pause music"}
    >
      {isMuted ? (
        <div className="relative">
          <VolumeX size={24} />
          <motion.span 
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap bg-card/90 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Play music 🎵
          </motion.span>
        </div>
      ) : (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="relative"
        >
          <Volume2 size={24} />
          <motion.div
            className="absolute -top-1 -right-1"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Music size={12} className="text-primary" />
          </motion.div>
        </motion.div>
      )}
    </motion.button>
  );
};

export default MusicPlayer;
