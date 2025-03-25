'use client';

import { useState } from 'react';

import Image from 'next/image';

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

  return (
    <section className="relative min-h-[80vh] bg-white">
      <div className="container h-full px-4 mx-auto">
        <div className="grid items-center h-full grid-cols-1 gap-8 py-20 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            <span className="text-lg font-semibold tracking-wider text-brand-yellow uppercase">
              LOGISTIC
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Best Shipping{' '}
              <span className="block text-brand-yellow">Partner</span>
            </h1>
            <p className="max-w-lg text-lg text-gray-600">
              Amet, tempus egestas facilisis volutpat viverra molestie lobortis
              posuere maecenas. molestie lobortis posuere maecenas. Eget sapien,
              gravida nequi.
            </p>
            <div className="pt-4">
              <Button className="px-8 py-6 text-lg font-semibold bg-brand-yellow hover:bg-brand-yellow-600 text-brand-dark">
                DISCOVER MORE
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <Image
              src={CARGO_IMAGES[currentImageIndex]}
              alt={`Cargo Image ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-300"
              priority
            />
          </div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-0 left-0 px-6 py-3 text-white bg-brand-yellow">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">
            {currentImageIndex + 1} / {CARGO_IMAGES.length}
          </span>
          <div className="flex space-x-2">
            <button
              className="p-2 hover:bg-brand-yellow-600 rounded-full"
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
              className="p-2 hover:bg-brand-yellow-600 rounded-full"
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
      </div>
    </section>
  );
};
