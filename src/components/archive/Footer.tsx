import Link from 'next/link';

import {
  ArrowRight,
  Instagram,
  InstagramBlack,
  Youtube,
} from '@/components/Icons';
import { ROUTES } from '@/utils/routes';

export function Footer() {
  const footerLinks = [
    {
      title: 'Shop',
      href: ROUTES.SHOP,
    },
    {
      title: 'Contact us',
      href: ROUTES.CONTACT_US,
    },
    {
      title: 'Refund Policy',
      href: ROUTES.REFUND_POLICY,
    },
    {
      title: 'Shipping Info',
      href: ROUTES.SHIPPING_INFO,
    },
    {
      title: 'FAQ',
      href: ROUTES.FAQ,
    },
  ];

  return (
    <footer className="border-border mt-auto w-full  bg-[#212529] sm:bg-white">
      {/* Main footer content */}
      <div className="w-full py-2 sm:py-12 md:px-8">
        {/* Mobile view - stacked list with arrows */}
        <div className="mb-4 block w-full px-4   md:hidden">
          <ul className="space-y-1">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="group mb-3 flex items-center justify-between border-t-[0.5px] border-[#21252949] py-3 pb-4 text-white transition-colors "
                >
                  <span className="text-2xl">{link.title}</span>
                  <ArrowRight className="text-2xl text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-black" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-3 border-t-[0.5px] border-[#21252949] pt-6">
            <a
              href="https://www.instagram.com/lisafolawiyo_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <Instagram className="invert" />
            </a>
            <a
              href="https://youtube.com/@lisafolawiyostudio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <Youtube className="size-10 invert" />
            </a>
          </div>
        </div>

        <div className="mb-4 hidden w-full items-start justify-between md:flex">
          <div className="flex w-full justify-between text-base text-[#212529] md:text-[24px]">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-footer-foreground hover:text-foreground transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="items-center justify-between border-t border-[#000000] pt-4 text-base max-sm:hidden md:text-[24px] lg:flex">
          <p className="text-muted-foreground">@LISAFOLAWIYO</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/lisafolawiyo_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <InstagramBlack className="h-10 w-10" />
            </a>
            <a
              href="https://youtube.com/@lisafolawiyostudio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <Youtube className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
