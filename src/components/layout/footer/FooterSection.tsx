import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

interface FooterSectionProps {
  title: string;
  type: 'about' | 'news' | 'links' | 'gallery';
  content: any;
}

export function FooterSection({ title, type, content }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
      <Separator className="w-16 bg-transparent mb-4 md:mb-8 border-orange-400 border-dashed border-t-2" />

      {type === 'about' && (
        <>
          <p className="text-gray-300 mb-4">{content.description}</p>
          <div className="space-y-2 text-gray-300">
            {content.contact.map(
              (item: { icon: string; text: string }, index: number) => (
                <p key={index} className="flex items-center gap-2">
                  <span className="w-6 h-6">
                    {' '}
                    <item.icon />{' '}
                  </span>{' '}
                  {item.text}
                </p>
              )
            )}
          </div>
        </>
      )}

      {type === 'news' && (
        <div className="space-y-4">
          {content.map(
            (item: { text: string; time: string }, index: number) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-orange-500">›</span>
                <div>
                  <p className="text-gray-300">{item.text}</p>
                  <p className="text-sm text-gray-400">{item.time}</p>
                </div>
              </div>
            )
          )}
        </div>
      )}

      {type === 'links' && (
        <ul className="space-y-2 text-gray-300">
          {content.map((item: { text: string; href: string }) => (
            <li key={item.text} className="flex items-center gap-2">
              <span>›</span>
              <Link
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {type === 'gallery' && (
        <div className="grid grid-cols-3 gap-2">
          {content.map((image: { src: string; alt: string }, index: number) => (
            <div
              key={index}
              className="aspect-square relative bg-gray-700 overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
