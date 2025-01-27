import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Realtime Chat',
  description: 'A realtime chat application built with Next.js',
  applicationName: 'Realtime Chat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} font-inter scroll-smooth antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
