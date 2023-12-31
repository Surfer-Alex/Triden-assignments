import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';

const noto_sans = Noto_Sans_TC({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Triden Chinese bulbul',
  description: 'Chinese bulbul website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={noto_sans.className}>
      <body>{children}</body>
    </html>
  );
}
