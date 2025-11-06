import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/globals.scss';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from 'react-hot-toast';

const centuryGothic = localFont({
  src: [
    {
      path: './fonts/CenturyGothic.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CenturyGothic-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/CenturyGothic-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/CenturyGothic-BoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-century-gothic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lisa Folawiyo | Luxury African Fashion with Hand Embellishment',
  description:
    "Discover Lisa Folawiyo's luxury African fashion, where hand embellishment meets contemporary elegance. Shop our latest collections today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster position="top-right" reverseOrder={false} />

      <body className={`${centuryGothic.className} antialiased`}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
      <GoogleAnalytics gaId="G-M03YSEG0D9" />
    </html>
  );
}
