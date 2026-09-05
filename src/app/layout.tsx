import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://forma-atelier.example'),
  title: {
    default: 'FORMA ATELIER — Architecture for quiet living.',
    template: '%s — FORMA ATELIER',
  },
  description:
    'Forma Atelier explores architecture and interiors through natural light, material honesty, proportion and everyday life.',
  keywords: [
    'Architecture Studio',
    'Interior Design',
    'Quiet Living',
    'Residential Architecture',
    'Hospitality Architecture',
    'Forma Atelier',
  ],
  authors: [{ name: 'Forma Atelier' }],
  openGraph: {
    title: 'FORMA ATELIER — Architecture for quiet living.',
    description:
      'Forma Atelier explores architecture and interiors through natural light, material honesty, proportion and everyday life.',
    url: 'https://forma-atelier.example',
    siteName: 'FORMA ATELIER',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FORMA ATELIER',
    description: 'Architecture for quiet living.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-limestone text-charcoal font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
