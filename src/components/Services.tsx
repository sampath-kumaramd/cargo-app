'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Button } from './ui/button';

const services = [
  {
    title: 'Air Freight Services',
    description:
      'At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.',
    image: '/images/cargo-ship.jpg',
    icon: '/images/air-freight-icon.svg',
  },
  {
    title: 'Drone Services',
    description:
      'These are unique and often they differ from one industry to the other. Our logistics expertise.',
    image: '/images/airplane.jpg',
    icon: '/images/drone-icon.svg',
  },
  // Add more services as needed
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-green-500 font-medium">
            Real Solution, Real Fast !
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Best Global Logistics Solutions.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Service Icon */}
                <div className="absolute bottom-4 left-4 bg-green-500 rounded-full p-4">
                  <Image
                    src={service.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  variant="ghost"
                  className="group/btn text-green-600 hover:text-green-700 p-0"
                >
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {[...Array(6)].map((_, i) => (
            <button
              key={i}
              className={cn(
                'w-2 h-2 rounded-full transition-all',
                i === 0 ? 'w-4 bg-green-500' : 'bg-gray-300'
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Find Solutions Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600 inline-flex items-center gap-2">
            Logistic & Transport Solutions Saves Your Time.
            <Button variant="link" className="text-black font-semibold">
              Finds Your Solutions <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
