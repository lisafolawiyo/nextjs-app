// Only needed if you want to prevent auto-injecting CSS
import type { Metadata } from 'next';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import FooterTwo from '@/components/FooterTwo';
import NavbarTwo from '@/components/NavbarTwo';

import '../styles/page.scss';
import '../styles/shop.scss';
import '../styles/globals.scss';
import '../styles/checkout.scss';
import '../styles/editorials.scss';
import '../styles/confirmation.scss';
import '../styles/single_product.scss';

config.autoAddCss = false;

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
      <NavbarTwo />
      <div className="w-full bg-white">{children}</div>
      <FooterTwo />
    </>
  );
}
