'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LottieAnimation from '@/components/LottieAnimation';

export default function IntroPage() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Load Lottie animation
    fetch('/assets/lottie/annnnn.lottie')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Error loading Lottie animation:', err));
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] bg-cover bg-center bg-[url(/assets/photos/intro/IMG_0124.jpg)] flex items-center justify-center p-4 relative">
      <div className='absolute inset-0 bg-black opacity-50'></div>
      
      {animationData && (
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <LottieAnimation 
            animationData={animationData} 
            className="w-full h-full max-w-2xl max-h-2xl opacity-60"
            loop={true}
            autoplay={true}
          />
        </div>
      )}
      <div className="mx-auto max-w-4xl py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-white/10 border-2 border-white p-8 shadow-2xl backdrop-blur-sm sm:p-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-center font-['Barrio'] text-4xl font-bold text-[#9cdbf1] sm:text-5xl md:text-6xl"
          >
            How I Met You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
          >
           October 23 ko jab me is company me aaya tha, 
           tab mene socha nhi tha 
           ki meri life me x seat me second number pe baithi ek gol matol ladki
           meri life ko itna change kar degi 
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
          >
           ek confrence room me meeting me jab pagal ki tarah tumne baat ki, 
           tab mene socha ki iss ladki ka to meri tarah screw dheela he, 
           isko to meri gang me shamil karna pdeaga  
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
          >
           
            mene socha tha mene apni peak life jeeke aa rha hu isse acha aur kya hi hooga ,
            but kisne socha tha ki life itni achi ho sakti he. ki naahi usse phele ki life achi lagi naahi uske baad ki ab achi lag rhi he  
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <Link href="/journey/memory1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full font-['Barrio'] bg-[#FACE68] px-6 py-3 text-black transition-all hover:bg-[#e8c55a]"
              >
                Next: Memories
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

