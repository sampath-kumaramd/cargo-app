'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  number: number;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        },
      }}
      className="text-center"
    >
      <motion.div
        className="text-4xl font-bold text-brand-yellow mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              ease: 'easeOut',
            },
          },
        }}
      >
        {number}+
      </motion.div>
      <motion.div
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            transition: {
              delay: 0.2,
              duration: 0.5,
            },
          },
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { number: 890, label: 'Delivered packages' },
    { number: 137, label: 'Countries covered' },
    { number: 740, label: 'Tons of Goods' },
    { number: 600, label: 'Satisfied Clients' },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {stats.map((stat, index) => (
          <StatItem key={index} number={stat.number} label={stat.label} />
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
