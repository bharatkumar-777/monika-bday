'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import RotatingGallery from '@/components/RotatingGallery';

export default function Memory4Page() {
  return (
    <div className="relative h-screen bg-[#f5f5f5] bg-cover bg-center bg-[url(/assets/photos/intro/IMG_0212.jpg)] overflow-hidden">
      <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
      <RotatingGallery 
        pageName="memory4"
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
              className="mb-6 text-center font-['Barrio'] text-4xl font-bold text-[#a8eab9] sm:text-5xl md:text-6xl"
            >
              Previous Last Days. Nothing Stays Forever
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="mb-4 text-center text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
            >
              Pichle kuch mahine thik nhi gye. har jagah se. tumara na hoona unme se ek bhut bda reason tha. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="mb-8 text-center text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
            >
              aise pheli baar mahsus hua ki. 
              nothing stays forever. that you you will be gone as well. 
              but then i realized. ki why to cry. I should be happy that you happened in my life. 
              and you are not gone. you are still here. in my heart. in my memories. in my life. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="mb-8 text-center text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
            >
              And I will make sure that you will be in my heart. in my memories. in my life. forever.
              i am lucky to have you and all people will be lucky to have you.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="mb-8 text-center text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
            >
            me apni life ab apne ko uss tarike se karna chahta hu ki humare raste firse cross ho. fir se tum mere lie utni hi umportant Bano. 
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              className="flex justify-center gap-4"
            >
              <Link href="/journey/memory3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-[#5A9CB5] px-6 py-3 text-white transition-all hover:bg-[#4a8ba5]"
                >
                  Previous
                </motion.button>
              </Link>
              <Link href="/journey/epilogue">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-[#FACE68] px-6 py-3 text-white transition-all hover:bg-[#e8c55a]"
                >
                  Next: Epilogue
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        }
      />
    </div>
  );
}

