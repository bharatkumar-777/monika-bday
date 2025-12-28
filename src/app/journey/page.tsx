'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function JourneyPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect directly to introduction
    router.push('/journey/intro');
  }, [router]);

  return null;
}

