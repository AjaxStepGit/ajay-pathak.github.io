'use client';
import Image from 'next/image';
import bgImg from '../../public/hero-bg.png';
import meImg from '../../public/me.jpg';
import ContactDialog from './dialog/contact-dialog';
import { motion } from 'framer-motion';
import HowIWork from './sheet/how-i-work';
import { useEffect, useRef } from 'react';
import TiltCard from './ui/tilt-card';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initAnimation = () => {
      if (!containerRef.current) return;

      // Show the container
      containerRef.current.style.visibility = 'visible';

      const h1Element = containerRef.current.querySelector('h1');
      if (!h1Element) return;

      // Define the text to animate
      const text = 'I Am Here To Build Your Dream Project';
      const words = text.split(' ');

      // Clear the h1 and create spans for each word
      h1Element.innerHTML = '';

      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.cssText = `
          display: inline-block;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${
          index * 0.1
        }s;
          margin-right: ${index < words.length - 1 ? '0.5em' : '0'};
        `;
        h1Element.appendChild(span);
      });

      // Trigger animation
      setTimeout(() => {
        const spans = h1Element.querySelectorAll('span');
        spans.forEach(span => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0px)';
        });
      }, 100);
    };

    // Initialize animation immediately
    initAnimation();
  }, []);

  return (
    <section className="bg-primary-dark h-screen w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        className="flex relative flex-col w-res h-full justify-center"
      >
        <Image
          src={bgImg}
          alt="bg-image"
          className="absolute top-30 right-20 z-1 w-2xl"
        />
        <motion.div
          initial={{ opacity: 0, x: '-20%' }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, -8, 0], // Floating up and down
          }}
          transition={{
            x: { duration: 2, ease: 'backInOut', type: 'tween' },
            opacity: {
              duration: 1.5,
              ease: 'backIn',
              type: 'tween',
            },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            },
          }}
          className="flex font-ballare flex-col w-[200px] bottom-57 justify-center absolute -right-5 z-2 p-2 shadow-xl items-center bg-black/70 rounded-xs text-xl font-light"
        >
          Ajay Pathak
        </motion.div>
        <TiltCard
          src={meImg} // Replace with {meImg}
          alt="me-image"
          className="absolute top-70 right-5 z-10 w-2xl rounded-xl w-small"
          placeholder="empty" // Change to "blur" when using your actual image
          width={250} // Adjust based on your w-2xl class
          height={300} // Adjust based on your desired aspect ratio
        />

        <div className="-translate-y-10 relative z-5">
          <motion.p
            initial={{ backgroundPosition: '-200% center' }}
            animate={{ backgroundPosition: '200% center' }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="bg-shine-gradient bg-[length:200%_auto] text-clip inline-block title-text mb-6"
          >
            Product Builder
          </motion.p>

          <div
            className="container flex justify-start w-[500px] invisible"
            ref={containerRef}
          >
            <h1 className="font-extrabold mb-6 text-white text-4xl md:text-6xl lg:text-7xl leading-tight overflow-hidden">
              {' '}
              I Am Here To Build Your Dream Project
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-base w-1/3 mb-6 w-medium"
          >
            I craft frontend solutions that are fast, scalable, and
            user-focused. From building e-commerce platforms and admin
            dashboards to automating price comparisons and scraping engines — I
            bring ideas to life with code and clarity.
          </motion.p>
          <div className="flex gap-6">
            <HowIWork />
            <ContactDialog triggerClassName="text-white text-base bg-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
