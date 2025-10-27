'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { MobileMenu } from '@/components/archive';
import { ROUTES } from '@/utils/routes';
import useCartStore from '@/hooks/zustand/useCartStore';

export function Header() {
  const pathname = usePathname();
  const isArchivePage = pathname === '/dev/archive';
  const items = useCartStore((state) => state.items);
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 1200) {
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
      className={`fixed left-0 right-0 top-0 z-50 pt-5  transition-all duration-500 ease-in-out ${
        shouldBeDark
          ? 'border-b border-[#212529] bg-white text-black '
          : 'bg-transparent text-white'
      }`}
    >
      <div className="mx-auto w-[98%] ">
        <div className="mx-auto flex items-center justify-between px-4 py-3 md:px-10">
          <Link href={ROUTES.LISA_ARCHIVE_HOME} aria-label="Home">
            <h1
              className={`text-2xl font-light md:text-[40px] ${
                shouldBeDark ? 'text-black' : 'text-white'
              }`}
            >
              LISA FOLAWIYO/ARCHIVE
            </h1>
          </Link>

          <nav className="hidden items-center gap-8 text-[24px] 2xl:flex">
            <Link
              href={ROUTES.LISA_ARCHIVE_SEARCH}
              className={`text-[24px] font-light transition-opacity hover:opacity-70 ${
                shouldBeDark
                  ? 'text-black hover:text-gray-700'
                  : 'text-white mix-blend-difference'
              }`}
            >
              search the archive
            </Link>
            <Link
              href={ROUTES.LISA_ARCHIVE_ABOUT}
              className={`text-[24px] font-light transition-opacity hover:opacity-70 ${
                shouldBeDark
                  ? 'text-black hover:text-gray-700'
                  : 'text-white mix-blend-difference'
              }`}
            >
              about
            </Link>
            <Link
              href={ROUTES.LISA_ARCHIVE_CART}
              className={`flex items-center justify-center text-[24px] font-light transition-opacity hover:opacity-70 ${
                shouldBeDark
                  ? 'text-black hover:text-gray-700'
                  : 'text-white mix-blend-difference'
              }`}
            >
              <span>cart</span>
              {cartItemCount > 0 && (
                <span
                  className={`ml-1 text-sm ${
                    shouldBeDark ? 'text-black' : 'text-white'
                  }`}
                >
                  ({cartItemCount})
                </span>
              )}
            </Link>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
