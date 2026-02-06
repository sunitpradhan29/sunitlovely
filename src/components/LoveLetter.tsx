import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LoveLetterProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoveLetter = ({ isOpen, onClose }: LoveLetterProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative w-full max-w-md bg-cream rounded-3xl shadow-float p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative envelope flap */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-love opacity-20" 
              style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }} 
            />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center pt-8"
            >
              <span className="text-4xl mb-4 block">💌</span>
              <h3 className="font-romantic text-4xl text-gradient-love mb-6">
                My Dearest Love
              </h3>
              
              <div className="text-foreground/80 space-y-4 text-left leading-relaxed">
                <p>
                  Every moment with you feels like a beautiful dream I never want to wake up from. 
                  Your smile lights up my world brighter than a thousand stars. 💫
                </p>
                <p>
                  You make every ordinary day feel extraordinary, and I fall more in love with you 
                  with each passing moment. You're my favorite person, my best friend, and my forever. 🐼💕
                </p>
                <p>
                  Thank you for being you, for loving me, and for making my heart so incredibly full.
                </p>
              </div>

              <motion.p
                className="font-romantic text-3xl text-primary mt-6"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Forever Yours ❤️
              </motion.p>

              <div className="flex justify-center gap-2 mt-6 text-2xl">
                {["🌸", "💖", "🐼", "💕", "🌷"].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ delay: i * 0.1, duration: 1, repeat: Infinity }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoveLetter;
