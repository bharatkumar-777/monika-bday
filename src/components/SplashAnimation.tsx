'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashAnimationProps {
  onComplete: () => void;
}

export default function SplashAnimation({ onComplete }: SplashAnimationProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const word = 'HAPPY BIRTHDAY';
  const letters = word.split('');

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url(/assets/photos/photosIntro.png)] bg-cover bg-center">
      {showContent && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="text-5xl font-bold text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl"
                style={{
                  textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: 'spring' }}
            className="mt-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              🎉 Monika! 🎂
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

