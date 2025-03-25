import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/layout/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cargo TON - Your Best Shipping Partner',
  description:
    'Professional logistics and shipping services for businesses worldwide',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
