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
import { Newsletter } from './footer/Newsletter';
import { FooterSection } from './footer/FooterSection';
import { FooterBottom } from './footer/FooterBottom';
import { footerData } from './footer/footerData';

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

export default function FooterNew() {
  return (
    <footer className="bg-slate-600 text-white py-12">
      <div className="container mx-auto">
        <Newsletter />

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

        <FooterBottom />
      </div>
    </footer>
  );
}
