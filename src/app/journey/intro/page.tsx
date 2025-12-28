'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] p-4">
      <div className="mx-auto max-w-4xl py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm sm:p-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-center text-4xl font-bold text-[#5A9CB5] sm:text-5xl md:text-6xl"
          >
            Introduction
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 text-lg leading-relaxed text-[#2a2a2a] sm:text-xl"
          >
            Welcome to this special journey we've shared together. This is a celebration
            of all the beautiful moments, laughter, and memories that have made our time
            together so meaningful.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 text-lg leading-relaxed text-[#2a2a2a] sm:text-xl"
          >
            As you explore these pages, you'll find stories, photos, and moments that
            capture the essence of our friendship and the joy we've experienced together.
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
                className="rounded-full bg-[#FACE68] px-6 py-3 text-white transition-all hover:bg-[#e8c55a]"
              >
                Next: Memory 1
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

