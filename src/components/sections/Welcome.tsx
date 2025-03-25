'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Welcome = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Images */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-[400px]">
            {/* First image - warehouse worker */}
            <motion.div
              className="absolute left-0 bottom-0 w-[40%] h-[300px] z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Image
                src="/images/delivery-worker.png"
                alt="Warehouse worker handling packages"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            {/* Second image - delivery worker */}
            <motion.div
              className="absolute right-0 top-0 w-[90%] h-[300px]"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Image
                src="/images/warehouse-worker.png"
                alt="Delivery worker with clipboard"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
          {/* Stats card */}
          <motion.div
            className="absolute bottom-4 right-4 bg-[#ff7c46] text-white p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl font-bold">15,350+</div>
            <div className="text-sm">Clients Worldwide</div>
          </motion.div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            TransMax Logistics{' '}
            <motion.span
              className="block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Around <span className="text-coral-500">the World</span>
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Transmax is the world&apos;s driving worldwide coordinations
            supplier — we uphold industry and exchange the worldwide trade of
            merchandise through land transport.
          </motion.p>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Our worth added administrations guarantee the progression of
            products proceeds consistently and supply chains stay lean and
            streamlined for progress.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button
              variant="default"
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-2"
            >
              MORE ABOUT US
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
