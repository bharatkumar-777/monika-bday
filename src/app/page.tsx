'use client';

import { useState } from 'react';
import Timer from '@/components/Timer';
import SplashAnimation from '@/components/SplashAnimation';
import JourneyButton from '@/components/JourneyButton';

export default function Home() {
  const [showTimer, setShowTimer] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  const [showJourneyButton, setShowJourneyButton] = useState(false);

  // Set target date (you can modify this)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 0); // Example: 1 day from now

  const handleTimerComplete = () => {
    setShowTimer(false);
    setShowSplash(true);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowJourneyButton(true);
  };

  if (showTimer) {
    return <Timer targetDate={targetDate} onComplete={handleTimerComplete} />;
  }

  if (showSplash) {
    return <SplashAnimation onComplete={handleSplashComplete} />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#5A9CB5] via-[#FACE68] to-[#FA6868] p-4">
      <JourneyButton />
    </div>
  );
}
