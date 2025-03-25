import { MessagesSquare } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface NewsCardProps {
  date: {
    day: number;
    month: string;
  };
  title: string;
  description: string;
  image: string;
  author: string;
  comments: number;
}

const NewsCard: FC<NewsCardProps> = ({
  date,
  title,
  description,
  image,
  author,
  comments,
}) => {
  return (
    <div className="group flex flex-col md:flex-row bg-white">
      <div className="relative h-[240px] md:w-[45%] w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute left-0 top-0 group-hover:bg-cyan-500 transition-all duration-300 bg-gray-500 p-2 text-center aspect-square">
          <div className="text-xl font-bold text-white">{date.day}</div>
          <div className="text-sm uppercase text-white">{date.month}</div>
        </div>
      </div>
      <div className="p-6 md:w-[55%] bg-gray-50 group-hover:bg-cyan-500 transition-all duration-300">
        <h3 className="text-xl font-semibold text-gray-700 group-hover:text-white transition-all duration-300">
          {title}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="text-gray-600 group-hover:text-white transition-all duration-300">
            {author}
          </span>
          <span className="text-cyan-500 group-hover:text-white transition-all duration-300">
            <MessagesSquare className="w-4 h-4" />{' '}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-gray-500 group-hover:text-white transition-all duration-300">
              {comments}
            </span>
          </div>
        </div>
        <p className="mt-4 text-gray-600 line-clamp-3 group-hover:text-white transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
