import { motion } from "framer-motion";

interface CutePandaProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "holding-heart" | "proposing" | "shy" | "dancing" | "happy";
  className?: string;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

const CutePanda = ({ size = "md", variant = "holding-heart", className = "" }: CutePandaProps) => {
  const baseSize = sizeClasses[size];

  const renderPanda = () => {
    switch (variant) {
      case "holding-heart":
        return (
          <svg viewBox="0 0 200 200" className={`${baseSize} ${className}`}>
            {/* Body */}
            <ellipse cx="100" cy="130" rx="50" ry="45" fill="#FAFAFA" />
            
            {/* Ears */}
            <circle cx="55" cy="45" r="22" fill="#1a1a1a" />
            <circle cx="145" cy="45" r="22" fill="#1a1a1a" />
            
            {/* Head */}
            <circle cx="100" cy="75" r="45" fill="#FAFAFA" />
            
            {/* Eye patches */}
            <ellipse cx="75" cy="70" rx="18" ry="15" fill="#1a1a1a" transform="rotate(-10 75 70)" />
            <ellipse cx="125" cy="70" rx="18" ry="15" fill="#1a1a1a" transform="rotate(10 125 70)" />
            
            {/* Eyes */}
            <circle cx="75" cy="70" r="8" fill="#FAFAFA" />
            <circle cx="125" cy="70" r="8" fill="#FAFAFA" />
            <circle cx="77" cy="68" r="4" fill="#1a1a1a" />
            <circle cx="127" cy="68" r="4" fill="#1a1a1a" />
            <circle cx="78" cy="66" r="1.5" fill="#FAFAFA" />
            <circle cx="128" cy="66" r="1.5" fill="#FAFAFA" />
            
            {/* Nose */}
            <ellipse cx="100" cy="88" rx="6" ry="4" fill="#1a1a1a" />
            
            {/* Mouth */}
            <path d="M 92 95 Q 100 102 108 95" stroke="#1a1a1a" strokeWidth="2" fill="none" />
            
            {/* Blush */}
            <circle cx="60" cy="85" r="8" fill="#FFB6C1" opacity="0.6" />
            <circle cx="140" cy="85" r="8" fill="#FFB6C1" opacity="0.6" />
            
            {/* Arms holding heart */}
            <ellipse cx="60" cy="130" rx="15" ry="25" fill="#1a1a1a" />
            <ellipse cx="140" cy="130" rx="15" ry="25" fill="#1a1a1a" />
            
            {/* Heart */}
            <motion.g
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <path
                d="M 100 145 C 100 145 75 125 75 110 C 75 95 90 95 100 105 C 110 95 125 95 125 110 C 125 125 100 145 100 145"
                fill="#FF6B8A"
              />
            </motion.g>
            
            {/* Feet */}
            <ellipse cx="75" cy="170" rx="18" ry="10" fill="#1a1a1a" />
            <ellipse cx="125" cy="170" rx="18" ry="10" fill="#1a1a1a" />
          </svg>
        );

      case "proposing":
        return (
          <svg viewBox="0 0 200 200" className={`${baseSize} ${className}`}>
            {/* Body */}
            <ellipse cx="100" cy="145" rx="45" ry="40" fill="#FAFAFA" />
            
            {/* Ears */}
            <circle cx="55" cy="50" r="20" fill="#1a1a1a" />
            <circle cx="145" cy="50" r="20" fill="#1a1a1a" />
            
            {/* Head */}
            <circle cx="100" cy="80" r="42" fill="#FAFAFA" />
            
            {/* Eye patches */}
            <ellipse cx="78" cy="75" rx="16" ry="13" fill="#1a1a1a" transform="rotate(-10 78 75)" />
            <ellipse cx="122" cy="75" rx="16" ry="13" fill="#1a1a1a" transform="rotate(10 122 75)" />
            
            {/* Eyes - sparkly */}
            <circle cx="78" cy="75" r="7" fill="#FAFAFA" />
            <circle cx="122" cy="75" r="7" fill="#FAFAFA" />
            <circle cx="80" cy="73" r="3.5" fill="#1a1a1a" />
            <circle cx="124" cy="73" r="3.5" fill="#1a1a1a" />
            <circle cx="81" cy="71" r="1.2" fill="#FAFAFA" />
            <circle cx="125" cy="71" r="1.2" fill="#FAFAFA" />
            <circle cx="78" cy="75" r="0.8" fill="#FAFAFA" />
            <circle cx="122" cy="75" r="0.8" fill="#FAFAFA" />
            
            {/* Nose */}
            <ellipse cx="100" cy="92" rx="5" ry="3.5" fill="#1a1a1a" />
            
            {/* Happy mouth */}
            <path d="M 90 100 Q 100 110 110 100" stroke="#1a1a1a" strokeWidth="2" fill="none" />
            
            {/* Blush */}
            <circle cx="62" cy="88" r="7" fill="#FFB6C1" opacity="0.7" />
            <circle cx="138" cy="88" r="7" fill="#FFB6C1" opacity="0.7" />
            
            {/* Arms */}
            <ellipse cx="55" cy="140" rx="12" ry="22" fill="#1a1a1a" />
            <ellipse cx="145" cy="130" rx="12" ry="22" fill="#1a1a1a" transform="rotate(20 145 130)" />
            
            {/* Flower */}
            <motion.g
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <line x1="155" y1="110" x2="155" y2="140" stroke="#4CAF50" strokeWidth="3" />
              <circle cx="155" cy="100" r="8" fill="#FF6B8A" />
              <circle cx="147" cy="106" r="6" fill="#FFB6C1" />
              <circle cx="163" cy="106" r="6" fill="#FFB6C1" />
              <circle cx="149" cy="94" r="6" fill="#FFB6C1" />
              <circle cx="161" cy="94" r="6" fill="#FFB6C1" />
              <circle cx="155" cy="100" r="4" fill="#FFE66D" />
            </motion.g>
            
            {/* Feet */}
            <ellipse cx="78" cy="180" rx="16" ry="9" fill="#1a1a1a" />
            <ellipse cx="122" cy="180" rx="16" ry="9" fill="#1a1a1a" />
          </svg>
        );

      case "shy":
        return (
          <svg viewBox="0 0 200 200" className={`${baseSize} ${className}`}>
            {/* Body */}
            <ellipse cx="100" cy="145" rx="45" ry="40" fill="#FAFAFA" />
            
            {/* Ears */}
            <circle cx="55" cy="50" r="20" fill="#1a1a1a" />
            <circle cx="145" cy="50" r="20" fill="#1a1a1a" />
            
            {/* Head */}
            <circle cx="100" cy="80" r="42" fill="#FAFAFA" />
            
            {/* Eye patches */}
            <ellipse cx="78" cy="75" rx="16" ry="13" fill="#1a1a1a" transform="rotate(-10 78 75)" />
            <ellipse cx="122" cy="75" rx="16" ry="13" fill="#1a1a1a" transform="rotate(10 122 75)" />
            
            {/* Shy closed eyes */}
            <path d="M 72 75 Q 78 70 84 75" stroke="#FAFAFA" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 116 75 Q 122 70 128 75" stroke="#FAFAFA" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            
            {/* Nose */}
            <ellipse cx="100" cy="92" rx="5" ry="3.5" fill="#1a1a1a" />
            
            {/* Small smile */}
            <path d="M 95 100 Q 100 104 105 100" stroke="#1a1a1a" strokeWidth="2" fill="none" />
            
            {/* Big blush */}
            <circle cx="62" cy="88" r="10" fill="#FFB6C1" opacity="0.8" />
            <circle cx="138" cy="88" r="10" fill="#FFB6C1" opacity="0.8" />
            
            {/* Arms covering face slightly */}
            <ellipse cx="58" cy="110" rx="14" ry="24" fill="#1a1a1a" />
            <ellipse cx="142" cy="110" rx="14" ry="24" fill="#1a1a1a" />
            
            {/* Feet */}
            <ellipse cx="78" cy="180" rx="16" ry="9" fill="#1a1a1a" />
            <ellipse cx="122" cy="180" rx="16" ry="9" fill="#1a1a1a" />
          </svg>
        );

      case "dancing":
        return (
          <svg viewBox="0 0 200 200" className={`${baseSize} ${className}`}>
            {/* Body */}
            <ellipse cx="100" cy="145" rx="45" ry="40" fill="#FAFAFA" />
            
            {/* Ears */}
            <circle cx="55" cy="50" r="20" fill="#1a1a1a" />
            <circle cx="145" cy="50" r="20" fill="#1a1a1a" />
            
            {/* Head */}
            <circle cx="100" cy="80" r="42" fill="#FAFAFA" />
            
            {/* Eye patches */}
            <ellipse cx="78" cy="75" rx="16" ry="13" fill="#1a1a1a" transform="rotate(-10 78 75)" />
            <ellipse cx="122" cy="75" rx="16" ry="13" fill="#1a1a1a" transform="rotate(10 122 75)" />
            
            {/* Happy closed eyes */}
            <path d="M 72 75 Q 78 70 84 75" stroke="#FAFAFA" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 116 75 Q 122 70 128 75" stroke="#FAFAFA" strokeWidth="3" fill="none" strokeLinecap="round" />
            
            {/* Nose */}
            <ellipse cx="100" cy="92" rx="5" ry="3.5" fill="#1a1a1a" />
            
            {/* Big happy mouth */}
            <path d="M 88 100 Q 100 115 112 100" stroke="#1a1a1a" strokeWidth="2" fill="none" />
            
            {/* Blush */}
            <circle cx="62" cy="88" r="8" fill="#FFB6C1" opacity="0.7" />
            <circle cx="138" cy="88" r="8" fill="#FFB6C1" opacity="0.7" />
            
            {/* Arms up celebrating */}
            <ellipse cx="50" cy="115" rx="12" ry="24" fill="#1a1a1a" transform="rotate(-30 50 115)" />
            <ellipse cx="150" cy="115" rx="12" ry="24" fill="#1a1a1a" transform="rotate(30 150 115)" />
            
            {/* Stars around */}
            <motion.text
              x="35" y="80"
              fontSize="16"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ✨
            </motion.text>
            <motion.text
              x="155" y="80"
              fontSize="16"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ✨
            </motion.text>
            
            {/* Feet */}
            <ellipse cx="78" cy="180" rx="16" ry="9" fill="#1a1a1a" />
            <ellipse cx="122" cy="180" rx="16" ry="9" fill="#1a1a1a" />
          </svg>
        );

      case "happy":
        return (
          <svg viewBox="0 0 200 200" className={`${baseSize} ${className}`}>
            {/* Body */}
            <ellipse cx="100" cy="145" rx="45" ry="40" fill="#FAFAFA" />
            
            {/* Ears */}
            <circle cx="55" cy="50" r="20" fill="#1a1a1a" />
            <circle cx="145" cy="50" r="20" fill="#1a1a1a" />
            
            {/* Head */}
            <circle cx="100" cy="80" r="42" fill="#FAFAFA" />
            
            {/* Eye patches */}
            <ellipse cx="78" cy="75" rx="16" ry="13" fill="#1a1a1a" transform="rotate(-10 78 75)" />
            <ellipse cx="122" cy="75" rx="16" ry="13" fill="#1a1a1a" transform="rotate(10 122 75)" />
            
            {/* Sparkly eyes */}
            <circle cx="78" cy="75" r="8" fill="#FAFAFA" />
            <circle cx="122" cy="75" r="8" fill="#FAFAFA" />
            <circle cx="80" cy="73" r="4" fill="#1a1a1a" />
            <circle cx="124" cy="73" r="4" fill="#1a1a1a" />
            <circle cx="81" cy="71" r="1.5" fill="#FAFAFA" />
            <circle cx="125" cy="71" r="1.5" fill="#FAFAFA" />
            
            {/* Nose */}
            <ellipse cx="100" cy="92" rx="5" ry="3.5" fill="#1a1a1a" />
            
            {/* Big smile */}
            <path d="M 85 100 Q 100 118 115 100" stroke="#1a1a1a" strokeWidth="2.5" fill="none" />
            
            {/* Blush */}
            <circle cx="62" cy="88" r="9" fill="#FFB6C1" opacity="0.7" />
            <circle cx="138" cy="88" r="9" fill="#FFB6C1" opacity="0.7" />
            
            {/* Arms */}
            <ellipse cx="55" cy="135" rx="12" ry="22" fill="#1a1a1a" />
            <ellipse cx="145" cy="135" rx="12" ry="22" fill="#1a1a1a" />
            
            {/* Feet */}
            <ellipse cx="78" cy="180" rx="16" ry="9" fill="#1a1a1a" />
            <ellipse cx="122" cy="180" rx="16" ry="9" fill="#1a1a1a" />
            
            {/* Hearts above */}
            <motion.text
              x="90" y="25"
              fontSize="20"
              animate={{ y: [25, 20, 25], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              💕
            </motion.text>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {renderPanda()}
    </motion.div>
  );
};

export default CutePanda;
