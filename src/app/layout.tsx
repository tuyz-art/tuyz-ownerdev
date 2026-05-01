import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VogueStyle - Premium Fashion E-commerce',
  description: 'Discover curated fashion pieces for every occasion at VogueStyle',
  keywords: ['fashion', 'clothing', 'style', 'boutique', 'premium'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://voguestyle.com',
    siteName: 'VogueStyle',
    title: 'VogueStyle - Premium Fashion',
    description: 'Discover curated fashion pieces for every occasion',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@voguestyle',
  },
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}