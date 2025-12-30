'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JourneyButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex justify-center"
    >
      <Link href="/journey">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full border-2 w-[300px] h-[100px] text-center items-center justify-center border-white font-['Barrio'] bg-[rgba(136,203,195,0.59)] px-8 py-4 text-xl font-bold text-white shadow-2xl transition-all hover:shadow-3xl sm:px-12 sm:py-5 sm:text-2xl"
          style={{
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          Isko Dba
        </motion.button>
      </Link>
    </motion.div>
  );
}

