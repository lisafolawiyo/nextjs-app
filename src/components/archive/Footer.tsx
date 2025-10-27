import Link from 'next/link';

import { ArrowRight } from '@/components/Icons';

export function Footer() {
  const footerLinks = [
    {
      title: 'Shop',
      href: '#',
    },
    {
      title: 'Contact us',
      href: '#',
    },
    {
      title: 'Refund Policy',
      href: '#',
    },
    {
      title: 'Shipping Info',
      href: '#',
    },
    {
      title: 'FAQ',
      href: '#',
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
        </div>

        {/* Desktop view - horizontal links */}
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

        {/* Bottom section with brand and privacy */}
        <div className="items-center justify-between border-t border-[#000000] pt-4 text-base max-sm:hidden md:text-[24px] lg:flex">
          <p className="text-muted-foreground">@LISAFOLAWIYO</p>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
