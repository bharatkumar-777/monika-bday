'use client';

import { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

interface LottieAnimationProps {
  animationData?: any; // Lottie animation JSON data
  path?: string; // Path to Lottie JSON file
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieAnimation({
  animationData,
  path,
  className = '',
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const lottieRef = useRef<any>(null);

  // If you have a Lottie JSON file, you can load it like this:
  // const [animationData, setAnimationData] = useState(null);
  // useEffect(() => {
  //   fetch('/assets/lottie/birthday.json')
  //     .then(res => res.json())
  //     .then(data => setAnimationData(data));
  // }, []);

  if (!animationData && !path) {
    // Placeholder - replace with your actual Lottie animation
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center justify-center ${className}`}
      >
        <div className="text-center text-gray-400">
          <p className="text-sm">Add Lottie animation here</p>
          <p className="text-xs mt-2">
            Place your Lottie JSON files in /public/assets/lottie/
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        className="w-full h-full"
      />
    </motion.div>
  );
}

