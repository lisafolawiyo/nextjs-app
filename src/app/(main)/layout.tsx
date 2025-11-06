import type { Metadata } from 'next';
import '../styles/globals.scss';
import '../styles/shop.scss';
import '../styles/single_product.scss';
import '../styles/checkout.scss';
import '../styles/confirmation.scss';
import '../styles/page.scss';
import '../styles/editorials.scss';
import NavbarTwo from '@/components/NavbarTwo';
// Only needed if you want to prevent auto-injecting CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import FooterTwo from '@/components/FooterTwo';

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
