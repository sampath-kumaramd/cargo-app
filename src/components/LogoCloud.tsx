'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const LogoCloud = () => {
  const logos = [
    {
      src: '/logos/Ford.png',
      alt: 'Ford company',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/Nike.png',
      alt: 'Nike',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/SunPower.png',
      alt: 'SunPower',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/BlueCross.png',
      alt: 'BlueCross',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/Timberland.png',
      alt: 'Timberland',
      width: 120,
      height: 40,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                opacity: 1,
                filter: 'grayscale(0)',
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCloud;
