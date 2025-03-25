'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      label: 'HOME',
      href: '/',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Home Classic', href: '/home-classic' },
        { label: 'Home Modern', href: '/home-modern' },
        { label: 'Home Minimal', href: '/home-minimal' },
      ],
    },
    {
      label: 'PAGES',
      href: '/pages',
      hasDropdown: true,
      dropdownItems: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      label: 'TRACKING',
      href: '/tracking',
      hasDropdown: false,
    },
    {
      label: 'SERVICES',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Air Freight', href: '/services/air-freight' },
        { label: 'Ocean Freight', href: '/services/ocean-freight' },
        { label: 'Road Freight', href: '/services/road-freight' },
        { label: 'Warehousing', href: '/services/warehousing' },
      ],
    },
    {
      label: 'BLOG',
      href: '/blog',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Blog Grid', href: '/blog/grid' },
        { label: 'Blog List', href: '/blog/list' },
        { label: 'Blog Single', href: '/blog/single' },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Cargo</span>
            <span className="text-brand-yellow text-2xl">⚡</span>
            <span className="text-sm font-medium text-gray-500">TON</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`${pathname === item.href ? 'border-l-2 border-brand-yellow' : ''} flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-brand-yellow ps-2`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute left-0 hidden pt-2 group-hover:block">
                    <div className="w-48 py-2 bg-white rounded-md shadow-lg">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={`${
                            pathname === dropdownItem.href
                              ? 'text-brand-yellow bg-gray-50'
                              : 'text-gray-700'
                          } block px-4 py-2 text-sm hover:text-brand-yellow hover:bg-gray-50`}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="default"
              className="bg-brand-yellow hover:bg-brand-yellow-500 text-brand-dark"
            >
              GET A QUOTE
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 bg-gray-800 text-white hover:bg-gray-900 hover:border-gray-900 hover:text-white"
            >
              SIGN IN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 lg:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-yellow"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </Link>
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && (
                    <div className="pl-4 py-2 bg-gray-50">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={`${
                            pathname === dropdownItem.href
                              ? 'text-brand-yellow'
                              : 'text-gray-600'
                          } block px-4 py-2 text-sm hover:text-brand-yellow`}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex flex-col space-y-4 mt-4 px-4">
              <Button
                variant="default"
                className="w-full bg-brand-yellow hover:bg-brand-yellow-500 text-brand-dark"
              >
                GET A QUOTE
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-300 bg-gray-800 text-white hover:bg-gray-900 hover:border-gray-900 hover:text-white"
              >
                SIGN IN
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
