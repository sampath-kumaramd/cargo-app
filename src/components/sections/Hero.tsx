'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CARGO_IMAGES = [
  '/cargo/image-1.jpg',
  '/cargo/image-2.jpg',
  '/cargo/image-3.jpg',
  '/cargo/image-4.jpg',
  '/cargo/image-5.jpg',
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % CARGO_IMAGES.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + CARGO_IMAGES.length) % CARGO_IMAGES.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] bg-white">
      <div className="container h-full px-4 mx-auto">
        <div className="flex items-center h-full grid-cols-1 gap-8 py-20 relative">
          {/* Left Content */}
          <motion.div
            className="flex flex-col space-y-6 w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className="text-lg font-semibold tracking-wider text-black uppercase border-l-4 border-brand-yellow ps-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              LOGISTIC
            </motion.span>
            <motion.h1
              className="text-4xl  leading-tight md:text-5xl lg:text-6xl font-decima"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Best Shipping{' '}
              <span className="block text-brand-yellow font-bold mt-3">
                Partner
              </span>
            </motion.h1>
            <motion.p
              className="max-w-lg text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Amet, tempus egestas facilisis volutpat viverra molestie lobortis
              posuere maecenas. molestie lobortis posuere maecenas. Eget sapien,
              gravida nequi.
            </motion.p>
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button className="px-8 py-6 bg-brand-yellow hover:bg-brand-yellow-600 text-white">
                DISCOVER MORE
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-[500px] w-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src={CARGO_IMAGES[currentImageIndex]}
              alt={`Cargo Image ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-300"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Slide Counter */}
      <motion.div
        className="absolute bottom-0 left-0 px-6 py-3 text-white bg-brand-yellow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">
            {currentImageIndex + 1} / {CARGO_IMAGES.length}
          </span>
          <div className="flex space-x-2">
            <button
              className="p-2 hover:bg-brand-yellow-600 "
              onClick={previousImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="p-2 hover:bg-brand-yellow-600"
              onClick={nextImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
