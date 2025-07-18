'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { motion } from 'framer-motion';
import Image from 'next/image';
import waveSvg from '../../../public/arts/wave-2.svg';
import animatedBg from '../../../public/arts/animated-bg.svg';
import animatedBg2 from '../../../public/arts/animated-bg-2.svg';
import meteorBG from '../../../public/arts/meteor.svg';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Card } from '../ui/card';

const steps = [
  'SRS - System Requirement Document',
  'I create the SRS Document',
  'Design & Prototyping',
  'Development Begins',
  'Testing & QA',
  'Deployment & Handover',
];

const descriptions = [
  'Understand what you need through a call or any medium.',
  'A professional SRS document is shared for approval.',
  'High-quality UI/UX designs are prepared.',
  'Frontend & Backend implementation starts.',
  'Rigorous testing is done to ensure stability.',
  'Final deployment & handover with docs.',
];

export default function HowIWork() {
  return (
    <Sheet>
      <SheetTrigger className="px-4 bg-secondary rounded-sm text-sm text-white uppercase font-black">
        How I Work
      </SheetTrigger>

      <SheetContent className="h-screen bg-base " side="bottom">
        <Image
          src={waveSvg}
          className="absolute z-50 bottom-0 w-full h-auto"
          width={1400}
          height={330}
          alt="wave-bg"
        />
        <Image
          src={animatedBg}
          className="absolute z-50 top-20 w-full h-auto brightness-70"
          width={1400}
          height={560}
          alt="animated-bg"
        />

        <SheetHeader hidden>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className="flex justify-center items-center">
          <h1 className="uppercase font-black text-3xl text-tdark h-[75px]">
            how i work
          </h1>
        </div>

        <div className="relative z-70 w-full min-h-screen text-white">
          <svg
            viewBox="0 0 1300 1150"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="m 65.6304 169.2288 c 328.152 169.2288 721.9344 -84.6144 1050.0864 84.6144 c 131.2608 84.6144 131.2608 169.2288 0 169.2288 c -328.152 0 -918.8256 -169.2288 -1050.0864 84.6144 c -131.2608 253.8432 65.6304 84.6144 65.6304 84.6144 c 196.8912 -169.2288 590.6736 169.2288 918.8256 84.6144 c 328.152 -84.6144 262.5216 0 0 169.2288 c -262.5216 169.2288 -656.304 0 -721.9344 84.6144"
              stroke="#EF6D58"
              strokeWidth="4"
              fill="transparent"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 8, ease: 'easeInOut' }}
              className="drop-shadow-md"
            />
          </svg>
        </div>

        <div className="flex mt-[75px] w-full h-full absolute">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, ease: 'backIn', delay: 0.5 }}
            className="flex p-2 justify-center w-[200px] h-[200px] rounded-full bg-[#FE7743] absolute z-100 top-5 left-50"
          >
            <DotLottieReact
              src={'/animation/sre-comm.lottie'}
              className="w-[200px]"
              loop
              autoplay
              key={`how-i-work-${5}`}
            />
            <motion.div className="flex flex-col rounded-sm w-fit  px-4 py-2 -bottom-5 -right-100 absolute gap-2 p-2 bg-[#FE7743]/70">
              <h3 className="text-xl font-bold font-ballare">{steps[0]}</h3>
              <h4 className="text-sm text-tgray font-semibold">
                {descriptions[0]}
              </h4>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [1, 1.2, 1] }}
            transition={{ duration: 1, ease: 'backIn', delay: 2 }}
            className="flex p-2 justify-center w-[200px] h-[200px] rounded-full bg-[#0D5EA6] absolute z-100 top-35 right-50"
          >
            <DotLottieReact
              src={'/animation/srs-sign-up.lottie'}
              className="w-[200px] h-auto"
              loop
              autoplay
              key={`how-i-work-${4}`}
            />
            <motion.div className="flex flex-col w-fit px-4 py-2 -top-5 -left-60 absolute gap-2 p-2  bg-[#0D5EA6]/50 rounded-sm shadow-xl">
              <h3 className="text-xl font-bold font-ballare">{steps[1]}</h3>
              <h4 className="text-sm text-tgray font-semibold">
                {descriptions[1]}
              </h4>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [1, 1.2, 1] }}
            transition={{ duration: 1, ease: 'backIn', delay: 3.5 }}
            className="flex p-2 justify-center w-[200px] h-[200px] rounded-full bg-[#9B177E] absolute z-100 top-80 left-40"
          >
            <DotLottieReact
              src={'/animation/design-shi.lottie'}
              className="w-[200px] h-auto"
              loop
              autoplay
              key={`how-i-work-${3}`}
            />
            <motion.div className="flex flex-col rounded-sm w-fit  px-4 py-2 -top-5 -right-60 absolute gap-2 p-2 bg-[#9B177E]/70">
              <h3 className="text-xl font-bold font-ballare">{steps[2]}</h3>
              <h4 className="text-sm text-tgray font-semibold">
                {descriptions[2]}
              </h4>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [1, 1.2, 1] }}
            transition={{ duration: 1, ease: 'backIn', delay: 4.5 }}
            className="flex p-2 justify-center w-[200px] h-[200px] rounded-full bg-[#901E3E] absolute z-100 top-90 right-40"
          >
            <DotLottieReact
              src={'/animation/coder.lottie'}
              className="w-[200px] h-auto"
              loop
              autoplay
              key={`how-i-work-${2}`}
            />
            <motion.div className="flex flex-col rounded-sm w-fit  px-4 py-2 -top-2 -left-60 absolute gap-2 p-2 bg-[#901E3E]/70">
              <h3 className="text-xl font-bold font-ballare">{steps[3]} </h3>
              <h4 className="text-sm text-tgray font-semibold">
                {descriptions[3]}
              </h4>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [1, 1.2, 1] }}
            transition={{ duration: 1, ease: 'backIn', delay: 6.5 }}
            className="flex p-2  justify-center w-[200px] h-[200px] rounded-full bg-[#254D70] absolute z-100 bottom-20 left-90"
          >
            <DotLottieReact
              src={'/animation/project-done.lottie'}
              className="w-[200px] h-auto"
              loop
              autoplay
              key={`how-i-work-${1}`}
            />
            <motion.div className="flex flex-col rounded-sm w-fit  px-4 py-2 -top-5 -right-70 absolute gap-2 p-2 bg-[#254D70]/70">
              <h3 className="text-xl font-bold font-ballare">{steps[5]}</h3>
              <h4 className="text-sm text-tgray font-semibold">
                {descriptions[5]}
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
