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
    text: 'TransMax Logistics has transformed our supply chain operations. Their real-time tracking system and dedicated support team have helped us reduce delivery times by 40% while maintaining perfect accuracy. The attention to detail and commitment to customer satisfaction is truly exceptional.',
    author: 'Sarah Chen',
    position: 'Supply Chain Director, TechCorp International',
  },
  {
    text: 'As a manufacturer with global operations, we need a logistics partner we can trust completely. TransMax has consistently delivered beyond our expectations. Their innovative solutions and proactive approach to problem-solving have made them an invaluable part of our business.',
    author: 'Michael Rodriguez',
    position: 'Operations Director, Global Manufacturing Co.',
  },
  {
    text: 'The level of professionalism and expertise at TransMax is outstanding. They handled our complex international shipping requirements with precision and care. Their customs clearance assistance and documentation support have saved us countless hours and potential headaches.',
    author: 'Emma Thompson',
    position: 'International Trade Manager, Export Solutions Ltd.',
  },
];

const whyChooseUsItems = [
  {
    title: 'Global Network Coverage',
    description:
      'Our extensive network spans over 150 countries with strategic partnerships and local expertise to ensure seamless delivery worldwide.',
    expanded: false,
  },
  {
    title: 'Advanced Tracking Technology',
    description:
      'Real-time GPS tracking and advanced analytics provide complete visibility of your shipments at every stage of the journey.',
    expanded: false,
  },
  {
    title: 'Customized Solutions',
    description:
      'We develop tailored logistics solutions that align with your specific business needs, industry requirements, and growth objectives.',
    expanded: false,
  },
  {
    title: '24/7 Customer Support',
    description:
      'Our dedicated support team is available around the clock to assist with any queries, concerns, or emergency situations.',
    expanded: false,
  },
];

export function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    Array(whyChooseUsItems.length).fill(false)
  );

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

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
      {/* Trusted Clients Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">TRUSTED CLIENTS</h2>
        <p className="text-gray-500 uppercase text-sm mb-8">
          WHAT OUR CLIENTS SAY ABOUT US
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
          OUR KEY DIFFERENTIATORS
        </p>

        <div className="space-y-4">
          {whyChooseUsItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden border-b border-gray-200"
            >
              <button
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleItem(index);
                  }
                }}
              >
                <p className="text-gray-600 font-medium">{item.title}</p>
                <div className="bg-black w-6 h-6 flex items-center justify-center">
                  <Plus
                    className={`w-4 h-4 text-white transition-transform duration-200 ${
                      expandedItems[index] ? 'rotate-45' : ''
                    }`}
                  />
                </div>
              </button>
              {expandedItems[index] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 pb-4"
                >
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
