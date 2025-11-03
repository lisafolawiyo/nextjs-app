'use client';

import React, { useRef, useState } from 'react';
import '../app/styles/navbar.scss';
import Image from 'next/image';
import CartModal from './CartModal';
import useCartStore from '@/hooks/zustand/useCartStore';
import Link from 'next/link';

function NavbarTwo() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const { items: cartItems } = useCartStore((state) => state);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeModals = () => {
    setIsOpen(false);
    setIsCartOpen(false);
  };

  return (
    <nav>
      <section className="nav" id="nav-id">
        <div className="nav-menu-bar" onClick={toggleMenu}>
          <button
            className={`button is-text ${isOpen ? 'is-opened' : ''}`}
            id="menu-button"
          >
            <div className="button-inner-wrapper">
              <span className="icon menu-icon"></span>
            </div>
          </button>
        </div>

        <div className="nav-top-bg">
          <Image
            src="/media/images/logo-black-md.png"
            alt="brand logo"
            width={170}
            height={40}
            priority
          />
        </div>
        <div
          ref={overlayRef}
          id="nav-gray-overlay-id"
          onClick={closeModals}
          className={`nav-gray-overlay ${
            isOpen || isCartOpen ? 'block' : 'hidden'
          }`}
        ></div>

        {/* <div className="nav-search-icon-wrap" onclick="openSearch()">
            <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
        </div> */}
        <div className="nav-cart-icon-wrap">
          <div className="relative">
            <div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen((prev) => !prev)}
            >
              <Image
                src="/media/images/bag-icon.png"
                alt="shop bag icon"
                width={22}
                height={10}
              />
              <div className="absolute -right-4 -top-4 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-sm text-white">
                {cartItems.length}
              </div>
            </div>
          </div>
          {/* <QuickCart /> */}
        </div>
        {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />}

        <div
          ref={sidebarRef}
          id="nav-sidebar-id"
          className={`
            nav-sidebar
            ${isOpen ? 'translate-x--0' : 'translate-x--101'}`}
        >
          <div className="nav-inner-wrapper">
            {/* <div className="nav-sidebar-top">
                <a href="#">
                    <FontAwesomeIcon icon={faUser} className="nav-account-icon" />
                    <span>Open an account</span>
                </a>
            </div> */}

            <div className="nav-sidebar-main-menu">
              <ul className="nav-top-items">
                <li className="nav-top-item">
                  <Link href="/" onClick={toggleMenu}>
                    home
                  </Link>
                </li>
                <li className="nav-top-item">
                  <Link href="/shop" onClick={toggleMenu}>
                    shop
                  </Link>
                </li>
                <li className="nav-top-item">
                  <Link href="/about" onClick={toggleMenu}>
                    about us
                  </Link>
                </li>
                <li className="nav-top-item">
                  <Link href="/archive" onClick={toggleMenu}>
                    Inside LF
                  </Link>
                </li>
                <li className="nav-top-item">
                  <Link href="/contact" onClick={toggleMenu}>
                    contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav-sidebar-category-wrap">
              <ul className="nav-sidebar-categories">
                <li className="nav-sidebar-category-item">
                  <Link href="/shop?category=41" onClick={toggleMenu}>
                    COLL 1 2025
                  </Link>
                </li>
                <li className="nav-sidebar-category-item">
                  <Link href="/shop?category=16" onClick={toggleMenu}>
                    COLL 1 2024
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav-tags">
              <Link
                href="/shop?tag=20"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                women
              </Link>
              <Link
                href="/shop?tag=25"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                men
              </Link>
              <Link
                href="/shop?tag=24"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                dresses
              </Link>
              <Link
                href="/shop?tag=22"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                tops
              </Link>
              <Link
                href="/shop?tag=26"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                shirts
              </Link>
              <Link
                href="/shop?tag=31"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                t-shirts
              </Link>
              <Link
                href="/shop?tag=21"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                trousers
              </Link>
              <Link
                href="/shop?tag=34"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                shorts
              </Link>
              <Link
                href="/shop?tag=29"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                skirts
              </Link>
              <Link
                href="/shop?tag=32"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                leggings
              </Link>
              <Link
                href="/shop?tag=43"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                coats & jackets
              </Link>
              <Link
                href="/shop?tag=35"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                bags
              </Link>
              <Link
                href="/shop?tag=49"
                className="nav-tag-item"
                onClick={toggleMenu}
              >
                accessories
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="search-section" id="search-section-id">
        <div className="search-close-wrap" onClick="closeSearch()">
          <i className="fa-solid fa-xmark search-close-icon"></i>
        </div>
        <div className="search-inner-wrapper">
          <h1>What are you looking for?</h1>
          <form action="/search-result.html">
            <div className="search-form-wrapper">
              <input
                type="search"
                placeholder="Type your search"
                name="search"
              />
              <button className="search-btn" type="submit">
                <i className="fa-solid fa-magnifying-glass search-btn-icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section> */}
    </nav>
  );
}

export default NavbarTwo;
