'use client';
import React, { useState } from 'react';

import {
  Facebook,
  Twitter,
  Dribbble,
  Globe,
  Phone,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

// ... other imports

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    // Basic email validation
    if (!email) {
      setMessage('Please enter your email address');
      setStatus('error');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    try {
      setStatus('loading');
      const response = await fetch('http://localhost:3000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      console.log(response);

      // Parse response as JSON
      const data = await response.json();

      if (!response.ok) {
        // Handle error responses
        throw new Error(data.error || 'Subscription failed');
      }

      setStatus('success');
      setMessage(
        data.message || 'Thank you for subscribing to our newsletter!'
      );
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Failed to subscribe. Please try again later.'
      );
      console.error('Subscription error:', error);
    }
  };

  return (
    <footer className="bg-slate-600 text-white py-12">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row md:mb-24 mb-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">
              Weekly Newsletter
            </h2>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest news and insights.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-1/2 gap-2">
            <input
              type="email"
              placeholder="Enter Your Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 w-full py-2 sm:py-0 rounded text-gray-800"
            />
            <button
              onClick={handleSubscribe}
              disabled={status === 'loading'}
              className={`w-full sm:w-auto ${
                status === 'loading'
                  ? 'bg-gray-400'
                  : 'bg-orange-400 hover:bg-orange-600'
              } px-6 py-2 sm:py-0 rounded whitespace-nowrap transition-colors`}
            >
              {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            </button>
          </div>
        </div>
        {message && (
          <div
            className={`text-center mt-2 ${
              status === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {message}
          </div>
        )}
      </div>
      {/* ... rest of the footer code ... */}
    </footer>
  );
}

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

export const footerData = {
  sections: [
    {
      title: 'About Us',
      type: 'about',
      content: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        contact: [
          { icon: Phone, text: '(+44) 11 434 7575' },
          { icon: MapPin, text: '42 Lily Ave, Colombo 06600' },
        ],
      },
    },
    {
      title: 'Latest News',
      type: 'news',
      content: [
        {
          text: 'Sed ut perspiciatis unde omnia iste natus error sit voluptatem',
          time: '5 Minutes Ago',
        },
        {
          text: 'Sed ut perspiciatis unde omnia iste natus error sit voluptatem',
          time: '5 Minutes Ago',
        },
      ],
    },
    {
      title: 'Customer Service',
      type: 'links',
      content: [
        {
          text: 'Support Forums',
          href: '/support-forums',
        },
        {
          text: 'Communication',
          href: '/communication',
        },
        {
          text: 'FAQS',
          href: '/faqs',
        },
        {
          text: 'Privacy Policy',
          href: '/privacy-policy',
        },
        {
          text: 'Rules & Condition',
          href: '/rules-and-conditions',
        },
        {
          text: 'Contact Us',
          href: '/contact',
        },
      ],
    },
    {
      title: 'Customer Service',
      type: 'gallery',
      content: [
        {
          src: '/images/footer-gallery/img1.jpg',
          alt: 'Gallery image 1',
        },
        {
          src: '/images/footer-gallery/img2.jpg',
          alt: 'Gallery image 2',
        },
        {
          src: '/images/footer-gallery/img3.jpg',
          alt: 'Gallery image 3',
        },
        {
          src: '/images/footer-gallery/img4.jpg',
          alt: 'Gallery image 4',
        },
        {
          src: '/images/footer-gallery/img5.jpg',
          alt: 'Gallery image 5',
        },
        {
          src: '/images/footer-gallery/img6.jpg',
          alt: 'Gallery image 6',
        },
      ],
    },
  ],
};

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

export default function FooterNew() {
  return (
    <footer className="bg-slate-600 text-white py-12">
      <div className="container mx-auto">
        {/* Newsletter Section */}
        {/* <div className="flex flex-col md:flex-row md:mb-24 mb-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">
              Weekly Newsletter
            </h2>
            <p className="text-gray-300 mb-4">
              There are many variations of passages of lorem ipsum available.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-1/2 gap-2">
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="flex-1 px-4 w-full py-2 sm:py-0 rounded text-gray-800"
            />
            <button className="w-full sm:w-auto bg-orange-400 hover:bg-orange-600 px-6 py-2 sm:py-0 rounded whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div> */}
        <Footer />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerData.sections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              type={section.type as 'about' | 'news' | 'links' | 'gallery'}
              content={section.content}
            />
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-500">
          <div className="flex flex-wrap md:justify-between md:items-center">
            <p className="text-gray-300 text-xs md:text-sm">
              Copyright © 2021 All Rights Reserved. Site By Xiteb®
            </p>
            <div className="flex gap-4 justify-center items-center ">
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
      </div>
    </footer>
  );
}
