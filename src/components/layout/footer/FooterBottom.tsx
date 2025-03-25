import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Dribbble, Globe } from 'lucide-react';

export const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://facebook.com',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
  },
  {
    name: 'Behance',
    icon: Globe,
    href: 'https://behance.net',
  },
  {
    name: 'Dribbble',
    icon: Dribbble,
    href: 'https://dribbble.com',
  },
];

export function FooterBottom() {
  return (
    <div className="mt-12 pt-6 border-t border-gray-500">
      <div className="flex flex-wrap md:justify-between md:items-center">
        <p className="text-gray-300 text-xs md:text-sm">
          Copyright © 2021 All Rights Reserved. Site By Xiteb®
        </p>
        <div className="flex gap-4 justify-center items-center">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.name}</span>
                <div className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
