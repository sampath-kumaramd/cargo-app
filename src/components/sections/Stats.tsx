import React from 'react';

interface StatItemProps {
  number: number;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
    <span className="text-4xl font-bold text-[#1a237e] mb-2">{number}</span>
    <span className="text-gray-600 text-sm text-center">{label}</span>
  </div>
);

const Stats: React.FC = () => {
  const stats = [
    { number: 890, label: 'Delivered packages' },
    { number: 137, label: 'Countries covered' },
    { number: 740, label: 'Tons of Goods' },
    { number: 600, label: 'Satisfied Clients' },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatItem key={index} number={stat.number} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
