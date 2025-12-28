'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimerProps {
  targetDate: Date;
  onComplete: () => void;
}

export default function Timer({ targetDate, onComplete }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsComplete(true);
        onComplete();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#5A9CB5] via-[#FACE68] to-[#FA6868] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <h1 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Countdown to Your Special Day
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white/90 p-6 text-center shadow-2xl backdrop-blur-sm"
            >
              <motion.div
                key={unit.value}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-4xl font-bold text-[#5A9CB5] sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {String(unit.value).padStart(2, '0')}
              </motion.div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-[#2a2a2a] sm:text-base md:text-lg">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

