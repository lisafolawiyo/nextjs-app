'use client';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { ArrowRight } from '@/components/Icons';
import useCartStore from '@/hooks/zustand/useCartStore';
import { ROUTES } from '@/utils/routes';
import { cn } from '@/lib/utils';

const useMenuAnimation = (isOpen: boolean) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ paused: true });

    if (overlayRef.current && menuRef.current && menuItemsRef.current) {
      gsap.set(overlayRef.current, { opacity: 0, pointerEvents: 'none' });
      gsap.set(menuRef.current, { x: '-100%' });

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        onStart: () => {
          gsap.set(overlayRef.current, { pointerEvents: 'auto' });
        },
        onReverseComplete: () => {
          gsap.set(overlayRef.current, { pointerEvents: 'none' });
        },
      })
        .to(
          menuRef.current,
          {
            x: '0%',
            duration: 0.4,
            ease: 'power3.out',
          },
          '-=0.2',
        )
        .fromTo(
          menuItemsRef.current.querySelectorAll('.menu-item'),
          {
            x: -30,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            delay: 0.1,
          },
          '-=0.2',
        );
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      tl.play();
    } else {
      document.body.style.overflow = '';
      tl.reverse();
    }

    return () => {
      document.body.style.overflow = '';
      tl.kill();
    };
  }, [isOpen]);

  return { menuRef, overlayRef, menuItemsRef };
};
export function MobileMenu({ shouldDark }: { shouldDark?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const { menuRef, overlayRef, menuItemsRef } = useMenuAnimation(isOpen);
  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const items = useCartStore((state) => state.items);
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const primaryLinks = [
    { name: 'Search the Archive', href: ROUTES.SHOP },
    { name: 'About', href: ROUTES.ABOUT },
    {
      name: `Cart${cartItemCount > 0 ? ` (${cartItemCount})` : ''}`,
      href: ROUTES.CHECKOUT,
    },
  ];

  const secondaryLinks = [
    { name: 'Shop', href: '#' },
    { name: 'Contact us', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeMenu]);

  return (
    <>
      <button
        onClick={openMenu}
        className="group z-30 lg:hidden"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5">
          <span
            className={cn(
              'h-0.5 w-6 bg-white transition-all duration-300 group-hover:w-7',
              shouldDark && 'bg-black',
            )}
          ></span>
          <span
            className={cn(
              'h-0.5 w-6 bg-white transition-all duration-300 group-hover:w-5',
              shouldDark && 'bg-black',
            )}
          ></span>
          <span
            className={cn(
              'h-0.5 w-6 bg-white transition-all duration-300 group-hover:w-7',
              shouldDark && 'bg-black',
            )}
          ></span>
        </div>
      </button>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 h-screen bg-[#212529] opacity-0"
        onClick={closeMenu}
        aria-hidden={!isOpen}
        style={{ pointerEvents: 'none' }}
      />

      <div
        ref={menuRef}
        className="fixed left-0 top-0 z-50 h-full w-full bg-[#212529] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        aria-hidden={!isOpen}
        style={{
          transform: 'translateX(-100%)',
          visibility: isOpen ? 'visible' : 'hidden',
        }}
      >
        <button
          onClick={closeMenu}
          className="absolute right-6 top-6 text-slate-400 transition-colors hover:text-white"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <nav
          ref={menuItemsRef}
          className="flex h-screen w-full flex-col justify-between bg-[#212529] px-6 pt-20"
        >
          <ul className="space-y-1 divide-y-[0.2px] divide-[#ffffff49] pb-8">
            {primaryLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="menu-item block py-3 text-2xl lowercase text-slate-300 transition-colors hover:text-white"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-1">
            {secondaryLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="menu-item group mb-3 flex items-center justify-between border-t-[0.5px] border-[#ffffff49] py-3 pb-4 text-slate-300 transition-colors hover:text-white"
                  onClick={closeMenu}
                >
                  <span className="text-2xl">{link.name}</span>
                  <ArrowRight className="text-2xl text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-white" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
