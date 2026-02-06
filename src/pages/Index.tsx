import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CutePanda from "@/components/CutePanda";
import FloatingHearts from "@/components/FloatingHearts";
import CountdownTimer from "@/components/CountdownTimer";
import LoveLetter from "@/components/LoveLetter";
import MusicPlayer from "@/components/MusicPlayer";
import ValentineQuestion from "@/components/ValentineQuestion";
import CelebrationScreen from "@/components/CelebrationScreen";
import MemoriesSection from "@/components/MemoriesSection";
import { Heart, Mail } from "lucide-react";

type Section = "landing" | "question" | "celebration" | "memories";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>("landing");
  const [showLoveLetter, setShowLoveLetter] = useState(false);

  const goToQuestion = () => setCurrentSection("question");
  const handleYes = () => setCurrentSection("celebration");
  const goToMemories = () => setCurrentSection("memories");

  return (
    <div className="min-h-screen bg-gradient-sunset relative overflow-hidden">
      <FloatingHearts />
      <MusicPlayer />
      <LoveLetter isOpen={showLoveLetter} onClose={() => setShowLoveLetter(false)} />

      <AnimatePresence mode="wait">
        {/* Landing Section */}
        {currentSection === "landing" && (
          <motion.section
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-10"
          >
            {/* Main Panda with Heart */}
            <motion.div
              className="mb-8"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <CutePanda variant="holding-heart" size="xl" />
            </motion.div>

            {/* Romantic Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <motion.h1
                className="font-romantic text-5xl md:text-7xl lg:text-8xl text-gradient-love mb-4"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Hi My Love
              </motion.h1>
              <motion.p
                className="text-lg md:text-2xl text-foreground/80 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                I made something special just for you…
              </motion.p>
              <motion.div
                className="flex justify-center gap-2 mt-4 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {["💖", "🐼", "💕", "🌸", "💗"].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ delay: i * 0.15, duration: 1.5, repeat: Infinity }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-10"
            >
              <CountdownTimer />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={goToQuestion}
                className="btn-love flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5" />
                See My Question 💘
              </motion.button>
              <motion.button
                onClick={() => setShowLoveLetter(true)}
                className="btn-shy flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Read My Letter 💌
              </motion.button>
            </motion.div>

            {/* Decorative pandas at bottom corners */}
            <motion.div
              className="absolute bottom-4 left-4 hidden md:block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CutePanda variant="happy" size="md" />
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-4 hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
            >
              <motion.div
                animate={{ rotate: [5, -5, 5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CutePanda variant="shy" size="md" />
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {/* Question Section */}
        {currentSection === "question" && (
          <motion.section
            key="question"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-screen flex items-center justify-center px-4 relative z-10"
          >
            <ValentineQuestion onYes={handleYes} />
          </motion.section>
        )}

        {/* Celebration Section */}
        {currentSection === "celebration" && (
          <CelebrationScreen onClose={goToMemories} />
        )}

        {/* Memories Section */}
        {currentSection === "memories" && (
          <motion.section
            key="memories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen relative z-10"
          >
            {/* Header */}
            <div className="text-center py-8 px-4">
              <motion.div
                className="flex justify-center gap-4 mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <CutePanda variant="happy" size="md" />
                <CutePanda variant="dancing" size="md" />
              </motion.div>
              <motion.h1
                className="font-romantic text-4xl md:text-6xl text-gradient-love"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Together Forever
              </motion.h1>
            </div>

            <MemoriesSection />

            {/* Footer */}
            <motion.footer
              className="text-center py-8 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex justify-center gap-2 mb-4">
                {["🐼", "💖", "🌸", "💕", "🐼"].map((emoji, i) => (
                  <motion.span
                    key={i}
                    className="text-2xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
              <p className="text-muted-foreground">
                Made with ❤️ just for you.
              </p>
            </motion.footer>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Global Footer for non-memories sections */}
      {currentSection !== "memories" && currentSection !== "celebration" && (
        <motion.footer
          className="absolute bottom-0 left-0 right-0 text-center py-4 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-muted-foreground text-sm">
            Made with ❤️ just for you.
          </p>
        </motion.footer>
      )}
    </div>
  );
};

export default Index;
