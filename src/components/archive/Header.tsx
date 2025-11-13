'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '@/utils/routes';
import { MobileMenu } from '@/components/archive';
import useCartStore from '@/hooks/zustand/useCartStore';

export function Header() {
  const pathname = usePathname();
  const isArchivePage = pathname === '/archive';
  const items = useCartStore((state) => state.items);
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const shouldBeDark = !isArchivePage || isScrolled;

  return (
    <header
      className={`fixed left-0  right-0 top-0 z-50 pt-5  transition-all duration-500 ease-in-out ${
        shouldBeDark
          ? 'border-b border-[#212529] bg-white text-black '
          : 'bg-transparent text-white'
      }`}
    >
      <div className="mx- max-sm:px-2">
        <div className="mx-auto flex items-center justify-between py-3 sm:px-4 md:px-10">
          <Link href={ROUTES.ARCHIVE} aria-label="Home">
            <h1
              className={`text-2xl font-light md:text-[40px] ${
                shouldBeDark ? 'text-black' : 'text-white'
              }`}
            >
              LISA FOLAWIYO{isArchivePage ? '/ARCHIVE' : ''}
            </h1>
          </Link>

          <nav className="hidden items-center gap-8 text-[24px] lg:flex">
            <Link
              href={ROUTES.SHOP}
              className={`text-[24px] font-light transition-opacity hover:underline hover:opacity-70 ${
                shouldBeDark
                  ? 'text-black hover:text-gray-700'
                  : 'text-white mix-blend-difference'
              }`}
            >
              shop
            </Link>
            <Link
              href={ROUTES.ARCHIVE_EDIT}
              className={`text-[24px] font-light transition-opacity hover:underline hover:opacity-70 ${
                shouldBeDark
                  ? 'text-black hover:text-gray-700'
                  : 'text-white mix-blend-difference'
              }`}
            >
              search the archive
            </Link>
            <Link
              href={ROUTES.ABOUT}
              className={`text-[24px] font-light transition-opacity hover:underline hover:opacity-70 ${
                shouldBeDark
                  ? 'text-black hover:text-gray-700'
                  : 'text-white mix-blend-difference'
              }`}
            >
              about
            </Link>
            <Link
              href={ROUTES.CHECKOUT}
              className={`relative flex items-center justify-center text-[24px] font-light transition-opacity hover:underline hover:opacity-70 ${
                shouldBeDark
                  ? 'text-black hover:text-gray-700'
                  : 'text-white mix-blend-difference'
              }`}
            >
              <span>cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -right-6 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </nav>

          <MobileMenu shouldDark={shouldBeDark} />
        </div>
      </div>
    </header>
  );
}
