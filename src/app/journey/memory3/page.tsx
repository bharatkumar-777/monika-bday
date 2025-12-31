'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import RotatingGallery from '@/components/RotatingGallery';

export default function Memory3Page() {
  return (
    <div className="relative h-screen bg-[#f5f5f5] bg-cover bg-center bg-[url(/assets/photos/memory3/IMG_3099.jpg)] overflow-hidden">
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
            className="mx-auto max-w-4xl rounded-3xl bg-black/10 border-2 border-white p-8 shadow-2xl backdrop-blur-sm sm:p-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="mb-6 text-center font-['Barrio'] text-4xl font-bold text-[#9cdbf1] sm:text-5xl md:text-6xl"
            >
              Your presence make me feel like i am not alone
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="mb-4 text-center font-extrabold text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
            >
              Tumara meri life me hoona bhut important he, tumari ek simple si presence. 
              chahe hum baat hi na kare bhut faraq la deti he, company me ya fir kahi bhi. 
              meri life ke best moments vhi the jisme humne simple shopping gye.  
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="mb-8 font-bold text-center text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
            >
              rishikesh, shimla me tumare saath bhi gya hu aur tumare bina bhi. 
              but tumara simply bus hoone se hi. vo ek memorable moments ban gye he. 
              jo me pagal sa banta vo tumhare saamne hi ban paata hu. 
              i like the version of myself jo mera tumhare saamne nikal ke aata. 
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
                  className="rounded-full bg-[#FACE68] px-6 py-3 text-black transition-all hover:bg-[#e8c55a]"
                >
                  Next
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        }
      />
    </div>
  );
}

