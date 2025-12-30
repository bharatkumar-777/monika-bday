'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import RotatingGallery from '@/components/RotatingGallery';

export default function Memory3Page() {
  return (
    <div className="relative h-screen bg-[#f5f5f5] bg-cover bg-center bg-[url(/assets/photos/intro/IMG_0124.jpg)] overflow-hidden">
      <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
      <RotatingGallery 
        pageName="memory3"
        itemCount={6}
        radius={450}
        centerContent={
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="mx-auto max-w-2xl rounded-3xl bg-white/10 border-2 border-white p-8 shadow-2xl backdrop-blur-sm sm:p-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="mb-6 text-center font-['Barrio'] text-4xl font-bold text-[#9cdbf1] sm:text-5xl md:text-6xl"
            >
              Memory 3
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="mb-4 text-center text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
            >
              Your third memory story. This could be about adventures, celebrations,
              or quiet moments that meant a lot to both of you.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="mb-8 text-center text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
            >
              Describe the setting, the people involved, and why this memory stands out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              className="flex justify-center gap-4"
            >
              <Link href="/journey/memory2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-[#5A9CB5] px-6 py-3 text-white transition-all hover:bg-[#4a8ba5]"
                >
                  Previous
                </motion.button>
              </Link>
              <Link href="/journey/memory4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-[#FACE68] px-6 py-3 text-white transition-all hover:bg-[#e8c55a]"
                >
                  Next: Memory 4
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        }
      />
    </div>
  );
}

