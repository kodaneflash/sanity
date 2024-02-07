import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/theme-provider';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aspiring Entrepreneur Guide: Tips & Strategies | DevBlock',
  description: 'DevBlock offers essential tips, strategies, and market insights for aspiring entrepreneurs. Empower your startup journey with our expert guidance',
  viewport: 'width=device-width, initial-scale=1', // Added viewport for responsive design
  openGraph: {
    title: 'Aspiring Entrepreneur Guide: Tips & Strategies',
    description: 'FoundersForge: Dive into startup insights, tech trends, and entrepreneurship resources. Actionable advice and success stories for founders, visionaries & indie-hackers.',
    url: 'https://devblock.pro',
    images: [
      {
        url: 'https://foundersforge.pro/social-banner.png',
        width: 800,
        height: 600,
        alt: 'Founders Forge Social Banner',
      },
    ],
    siteName: 'Founders Forge', // Corrected from 'site_name' to 'siteName'
  },
  // Removed the 'twitter' section due to type mismatch
  // You can add more metadata here as needed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional metadata can be dynamically added here if needed */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-2xl mx-auto px-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
