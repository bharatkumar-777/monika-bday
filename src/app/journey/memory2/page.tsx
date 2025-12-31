'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import RotatingGallery from '@/components/RotatingGallery';

export default function Memory2Page() {
  return (
    <div className="relative h-screen bg-[#f5f5f5] bg-cover bg-center bg-[url(/assets/photos/intro/IMG_0094.jpg)] overflow-hidden">
      <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
      <RotatingGallery 
        pageName="memory2"
        itemCount={6}
        radius={450}
        centerContent={
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="mx-auto max-w-4xl rounded-3xl bg-white/10 border-2 border-white p-8 shadow-2xl backdrop-blur-sm sm:p-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="mb-6 text-center font-['Barrio'] text-2xl font-bold text-[#9cf1cb] sm:text-5xl md:text-6xl"
            >
            Why You are my Best Friend
            </motion.h1>
           
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="mb-2 text-center text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
            >
              You are the kind of friend people Dream of <br/>
             you are the kind of friend people search for <br/>
             and you are the kind of friend i am lucky to have 😭
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="mb-2 text-center text-lg leading-relaxed font-['Delius'] text-white sm:text-xl"
            >
              yeah me upar islie keh rha hu kyunki, jis hisab se tumne mere saath raaton ko dukh share kia, 
              jis hisab se tumne mere ko har baat share ki ❤️, 
              me apne ko bhut aise previlege maanta hu ki tumne mere ko iss layak samjha 💕,
              mere ko to aise taras aata ki jo bond humare bich me raha he vo logo ko mil hi nhi paata 🥲. 
              unko pata hi nhi hoota ki aisi life bhi hooti he jisme tumare jaise log life me aate he 🤭. 

            </motion.p>
         

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              className="flex justify-center gap-4"
            >
              <Link href="/journey/memory1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-[#5A9CB5] px-6 py-3 text-white transition-all hover:bg-[#4a8ba5]"
                >
                  Previous
                </motion.button>
              </Link>
              <Link href="/journey/memory3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-[#FACE68] px-6 py-3 text-white transition-all hover:bg-[#e8c55a]"
                >
                  Next: Memory 3
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        }
      />
    </div>
  );
}

