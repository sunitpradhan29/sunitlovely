import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const valentinesDay = new Date(new Date().getFullYear(), 1, 14); // Feb 14
      const now = new Date();
      
      // If Valentine's Day has passed this year, show next year
      if (now > valentinesDay) {
        valentinesDay.setFullYear(valentinesDay.getFullYear() + 1);
      }
      
      const difference = valentinesDay.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-card/80 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-love min-w-[60px] md:min-w-[80px]"
      >
        <span className="text-2xl md:text-4xl font-bold text-gradient-love">
          {value.toString().padStart(2, "0")}
        </span>
      </motion.div>
      <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">
        {label}
      </span>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-center"
    >
      <p className="text-muted-foreground mb-4 text-sm md:text-base">
        Countdown to Valentine's Day 💘
      </p>
      <div className="flex justify-center gap-2 md:gap-4">
        <TimeBox value={timeLeft.days} label="Days" />
        <span className="text-2xl md:text-4xl font-bold text-primary self-start mt-3 md:mt-4">:</span>
        <TimeBox value={timeLeft.hours} label="Hours" />
        <span className="text-2xl md:text-4xl font-bold text-primary self-start mt-3 md:mt-4">:</span>
        <TimeBox value={timeLeft.minutes} label="Mins" />
        <span className="text-2xl md:text-4xl font-bold text-primary self-start mt-3 md:mt-4">:</span>
        <TimeBox value={timeLeft.seconds} label="Secs" />
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
