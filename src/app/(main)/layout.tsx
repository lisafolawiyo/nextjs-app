import type { Metadata } from 'next';
import '../styles/globals.scss';
import '../styles/shop.scss';
import '../styles/single_product.scss';
import '../styles/checkout.scss';
import '../styles/confirmation.scss';
import '../styles/page.scss';
import '../styles/editorials.scss';
import { Toaster } from 'react-hot-toast';
// import { Geist, Geist_Mono } from "next/font/google";
import NavbarTwo from '@/components/NavbarTwo';
// Only needed if you want to prevent auto-injecting CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import FooterTwo from '@/components/FooterTwo';

config.autoAddCss = false;

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: 'Lisa Folawiyo | Luxury African Fashion with Hand Embellishment',
  description:
    "Discover Lisa Folawiyo's luxury African fashion, where hand embellishment meets contemporary elegance. Shop our latest collections today.",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <NavbarTwo />
      <div className="w-full bg-white">{children}</div>
      <FooterTwo />
    </>
  );
}
