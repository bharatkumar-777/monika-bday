'use client';

import { useState } from 'react';
import Timer from '@/components/Timer';
import SplashAnimation from '@/components/SplashAnimation';
import JourneyButton from '@/components/JourneyButton';

export default function Home() {
  const [showTimer, setShowTimer] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  const [showJourneyButton, setShowJourneyButton] = useState(false);

  // Set target date to January 1, 2026
  const targetDate = new Date('2026-01-01T00:00:00');

  const handleTimerComplete = () => {
    setShowTimer(false);
    setShowSplash(true);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowJourneyButton(true);
  };

  if (false) {
    return <Timer targetDate={targetDate} onComplete={handleTimerComplete} />;
  }

  if (showSplash) {
    return <SplashAnimation onComplete={handleSplashComplete} />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url(/assets/photos/photosIntro.png)] bg-cover bg-center p-4">
      <JourneyButton />
    </div>
  );
}
