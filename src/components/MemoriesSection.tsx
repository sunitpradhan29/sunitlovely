import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, X, Heart, Sparkles } from "lucide-react";
import CutePanda from "./CutePanda";

// Import our actual memory photos
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import memory5 from "@/assets/memory-5.jpg";
import memory6 from "@/assets/memory-6.jpg";

interface Memory {
  id: string;
  image?: string;
  emoji: string;
}

const defaultMemories: Memory[] = [
  {
    id: "1",
    image: memory1,
    emoji: "💋"
  },
  {
    id: "2",
    image: memory2,
    emoji: "📸"
  },
  {
    id: "3",
    image: memory3,
    emoji: "🌙"
  },
  {
    id: "4",
    image: memory4,
    emoji: "💕"
  },
  {
    id: "5",
    image: memory5,
    emoji: "🥰"
  },
  {
    id: "6",
    image: memory6,
    emoji: "😴"
  }
];

const loveQuotes = [
  "You're the reason I believe in love 💕",
  "Every love story is beautiful, but ours is my favorite 🌸",
  "With you, forever doesn't seem long enough 💖",
  "You make my heart smile every single day 🥰",
  "I fell in love with you, not for how you look, but for who you are 💗",
  "You're my today and all of my tomorrows ✨",
];

const MemoriesSection = () => {
  const [memories, setMemories] = useState<Memory[]>(defaultMemories);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, memoryId?: string) => {
    const files = e.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          if (memoryId) {
            setMemories(prev => prev.map(m => 
              m.id === memoryId ? { ...m, image: event.target!.result as string } : m
            ));
          } else {
            const newMemory: Memory = {
              id: Date.now().toString(),
              image: event.target!.result as string,
              emoji: "💕"
            };
            setMemories(prev => [...prev, newMemory]);
          }
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const removeMemory = (id: string) => {
    setMemories(prev => prev.filter(m => m.id !== id));
    if (currentSlide >= memories.length - 1) {
      setCurrentSlide(Math.max(0, memories.length - 2));
    }
  };

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
        {/* Love Quote Section */}
        <motion.div 
          className="text-center mb-12 cursor-pointer"
          onClick={nextQuote}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="flex justify-center gap-4 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <CutePanda variant="kissing" size="sm" />
            <CutePanda variant="hugging" size="sm" />
          </motion.div>
          <motion.p
            key={currentQuote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-romantic text-gradient-love"
          >
            "{loveQuotes[currentQuote]}"
          </motion.p>
          <p className="text-sm text-muted-foreground mt-2">Click for more love notes 💌</p>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient-love"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Our Precious Memories 📸
        </motion.h2>

        {/* Panda decorations */}
        <div className="flex justify-center gap-6 mb-8">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <CutePanda variant="excited" size="sm" />
          </motion.div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>
            <CutePanda variant="waving" size="sm" />
          </motion.div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>
            <CutePanda variant="happy" size="sm" />
          </motion.div>
        </div>

        {/* Memory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-card/80 backdrop-blur-sm rounded-3xl p-4 shadow-love overflow-hidden"
            >
              {/* Image or Upload area */}
              {memory.image ? (
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={memory.image}
                    alt="Our memory"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeMemory(memory.id)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-card/80 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={14} className="text-foreground" />
                  </button>
                  {/* Emoji overlay */}
                  <div className="absolute bottom-2 right-2 text-2xl">
                    {memory.emoji}
                  </div>
                </div>
              ) : (
                <label className="block aspect-square rounded-2xl border-2 border-dashed border-primary/30 hover:border-primary/60 transition-colors cursor-pointer flex flex-col items-center justify-center bg-primary/5">
                  <span className="text-4xl mb-2">{memory.emoji}</span>
                  <Upload className="w-8 h-8 text-primary/40 mb-2" />
                  <span className="text-sm text-muted-foreground">Add photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, memory.id)}
                    className="hidden"
                  />
                </label>
              )}

              {/* Decorative sparkle */}
              <motion.div
                className="absolute top-2 left-2"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-primary/40" />
              </motion.div>
            </motion.div>
          ))}

          {/* Add new memory card */}
          <motion.label
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer bg-card/50 backdrop-blur-sm rounded-3xl p-4 shadow-soft flex flex-col items-center justify-center min-h-[280px] border-2 border-dashed border-primary/30 hover:border-primary/60 transition-colors"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CutePanda variant="happy" size="md" />
            </motion.div>
            <p className="text-muted-foreground mt-4 text-center">
              Add a new memory 💕
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e)}
              className="hidden"
            />
          </motion.label>
        </div>

        {/* Romantic message section */}
        <motion.div
          className="text-center mt-12 p-8 bg-card/60 backdrop-blur-sm rounded-3xl shadow-love"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CutePanda variant="sleeping" size="sm" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <CutePanda variant="hugging" size="sm" />
            </motion.div>
          </div>
          <h3 className="font-romantic text-3xl md:text-4xl text-gradient-love mb-4">
            You Mean Everything To Me
          </h3>
          <p className="text-foreground/70 max-w-lg mx-auto leading-relaxed">
            Every moment with you is a treasure. You make my world brighter, my heart fuller, 
            and my life more beautiful than I ever imagined possible. I love you more than 
            words could ever express. 🐼💕
          </p>
          <div className="flex justify-center gap-2 mt-6 text-2xl">
            {["💖", "🌸", "🐼", "💕", "✨", "💗", "🌷"].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ delay: i * 0.12, duration: 1.5, repeat: Infinity }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MemoriesSection;
