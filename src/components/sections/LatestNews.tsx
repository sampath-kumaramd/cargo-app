'use client';

import { FC } from 'react';
import NewsCard from '../NewsCard';
import { motion } from 'framer-motion';

const newsItems = [
  {
    date: { day: 26, month: 'May' },
    title: 'CURABITUR LOREM UISM QUIS',
    description:
      'Pellentesque habitant morbi tristique senectus et netus eft malesuada fames turpis egestas. Aenean non donec...',
    image: '/images/news/truck.jpeg',
    author: 'Admin',
    comments: 15,
  },
  {
    date: { day: 22, month: 'May' },
    title: 'CURABITUR LOREM UISM QUIS',
    description:
      'Pellentesque habitant morbi tristique senectus et netus eft malesuada fames turpis egestas. Aenean non donec...',
    image: '/images/news/train.jpg',
    author: 'Admin',
    comments: 15,
  },
  {
    date: { day: 20, month: 'May' },
    title: 'CURABITUR LOREM UISM QUIS',
    description:
      'Pellentesque habitant morbi tristique senectus et netus eft malesuada fames turpis egestas. Aenean non donec...',
    image: '/images/news/air.jpeg',
    author: 'Admin',
    comments: 15,
  },
  {
    date: { day: 15, month: 'May' },
    title: 'CURABITUR LOREM UISM QUIS',
    description:
      'Pellentesque habitant morbi tristique senectus et netus eft malesuada fames turpis egestas. Aenean non donec...',
    image: '/images/news/ship.jpg',
    author: 'Admin',
    comments: 15,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
    },
  },
};

const LatestNews: FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">LATEST NEWS</h2>
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="mt-2 text-sm uppercase tracking-wider text-cyan-500 flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-500"></div>
              INTEGER CONGUE ELIT
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <NewsCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNews;
