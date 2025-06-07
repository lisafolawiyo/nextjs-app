'use client';

import React, { useRef, useState } from 'react';
import "../app/styles/navbar.scss";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
// import QuickCart from './QuickCart';
import CartModal from './CartModal';
import useCartStore from '@/hooks/zustand/useCartStore';

function NavbarTwo() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const { items:  cartItems, removeFromCart, updateQty } = useCartStore((state) => state);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

  return (
    <nav>
        <section className="nav" id="nav-id">

        <div 
            className="nav-menu-bar"
            onClick={toggleMenu}>
                <button 
                    className={`button is-text ${isOpen ? 'is-opened' : ''}`}
                    id="menu-button">
                        <div className="button-inner-wrapper">
                            <span className="icon menu-icon"></span>
                        </div>
                </button>
        </div>

        <div className="nav-top-bg">
            
            <Image
                src="/media/images/logo-black-md.png"
                alt="brand logo"
                width={170}          // You can adjust this based on your design
                height={40}          // Or auto-scale with layout="intrinsic" or "responsive"
                className="nav-logo-black"
            />
        </div>
        <div 
            ref={overlayRef}
            id="nav-gray-overlay-id"
            className={`nav-gray-overlay ${isOpen ? 'block' : 'hidden'}`}
        >
        </div>

        {/* <div className="nav-search-icon-wrap" onclick="openSearch()">
            <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
        </div> */}
        <div className="nav-cart-icon-wrap">
            <div className="relative">
                <div
                className="relative cursor-pointer"
                onClick={() => setIsCartOpen((prev) => !prev)}
                >
                <Image src="/media/images/bag-icon.png" alt="shop bag icon" width={22} height={10} />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-pink-500 rounded-full text-white text-sm flex items-center justify-center">
                    {cartItems.length}
                </div>
                </div>
            </div>
            {/* <QuickCart /> */}
        </div>
        {isCartOpen && <CartModal />}

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
                <li className="nav-top-item"><a href="/">home</a></li>
                <li className="nav-top-item"><a href="/shop">shop</a></li>
                <li className="nav-top-item"><a href="/about">about us</a></li>
                <li className="nav-top-item"><a href="/archive">Inside LF</a></li>
                <li className="nav-top-item"><a href="/contact">contact</a></li>
                </ul>
            </div>

            <div className="nav-sidebar-category-wrap">
                <ul className="nav-sidebar-categories">
                <li className="nav-sidebar-category-item"><a href="/shop?category=41">COLL 1 2025</a></li>
                <li className="nav-sidebar-category-item"><a href="/shop?category=16">COLL 1 2024</a></li>
                </ul>
            </div>

            <div className="nav-tags">
                <a href="/shop?tag=20" className='nav-tag-item'>women</a>
                <a href="/shop?tag=25" className='nav-tag-item'>men</a>
                <a href="/shop?tag=24" className='nav-tag-item'>dresses</a>
                <a href="/shop?tag=22" className='nav-tag-item'>tops</a>
                <a href="/shop?tag=26" className='nav-tag-item'>shirts</a>
                <a href="/shop?tag=31" className='nav-tag-item'>t-shirts</a>
                <a href="/shop?tag=21" className='nav-tag-item'>trousers</a>
                <a href="/shop?tag=34" className='nav-tag-item'>shorts</a>
                <a href="/shop?tag=29" className='nav-tag-item'>skirts</a>
                <a href="/shop?tag=32" className='nav-tag-item'>leggins</a>
                <a href="/shop?tag=43" className='nav-tag-item'>coats & jackets</a>
                <a href="/shop?tag=35" className='nav-tag-item'>bags</a>
            </div>
            </div>
        </div>
        </section>
        <section className="search-section" id="search-section-id">
        {/* <div className="search-close-wrap" onclick="closeSearch()">
            <i className="fa-solid fa-xmark search-close-icon"></i>
        </div> */}
        <div className="search-inner-wrapper">
            <h1>What are you looking for?</h1>
            <form action="/search-result.html">
            <div className="search-form-wrapper">
                <input type="search" placeholder="Type your search" name="search" />
                <button className="search-btn" type="submit">
                <i className="fa-solid fa-magnifying-glass search-btn-icon"></i>
                </button>
            </div>
        </form>
        </div>
        </section>
    </nav>
  )
}

export default NavbarTwo