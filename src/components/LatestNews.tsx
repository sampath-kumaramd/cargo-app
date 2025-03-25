import { FC } from 'react';
import NewsCard from './NewsCard';

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

const LatestNews: FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">LATEST NEWS</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="mt-2 text-sm uppercase tracking-wider text-cyan-500 flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-500"></div>
              INTEGER CONGUE ELIT
            </div>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
