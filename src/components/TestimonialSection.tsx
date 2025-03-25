'use client';

import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pellentesque rhyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada marus etug met Curabitur laoreet convallis nisal pellentesque bibendum.',
    author: 'JOHN DEO',
    position: 'Managing Director',
  },
  // Add more testimonials as needed
];

const whyChooseUsItems = [
  'Dui ac hendrerit elementum quam ipsum auctor lorem',
  'Mauris vel magna a est lobortis volutpat',
  'Sed bibendum ornare lorem mauris feugiat suspendisse neque',
  'Nulla scelerisque dui hendrerit elementum quam',
];

export function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
      {/* Trusted Clients Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">TRUSTED CLIENTS</h2>
        <p className="text-gray-500 uppercase text-sm mb-8">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR
        </p>

        <div className="bg-gray-100 p-8 relative">
          <div className="text-red-800 text-6xl absolute -left-4 top-4">
            &quot;
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-gray-600"
            >
              <p className="mb-6">{testimonials[currentTestimonial].text}</p>
              <div className="text-right">
                <h4 className="font-bold">
                  {testimonials[currentTestimonial].author}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={prevTestimonial}
            className="p-2 border hover:bg-gray-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 border hover:bg-gray-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">WHY CHOOSE US</h2>
        <p className="text-gray-500 uppercase text-sm mb-8">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR
        </p>

        <div className="space-y-4">
          {whyChooseUsItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <p className="text-gray-600">{item}</p>
              <Plus className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
