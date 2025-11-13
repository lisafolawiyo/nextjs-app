'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { ROUTES } from '@/utils/routes';

import { InstagramBlack, Youtube } from './Icons';

function FooterThree() {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('FNAME', fname);

    const res = await fetch('/api/mailchimp', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setStatus('success');
      setEmail('');
      setFname('');
    } else {
      setStatus('error');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black text-white px-4 md:px-8 pt-16 pb-0">
      <div className="max-w-[1500px] mx-auto md:px-10">
        <div className="grid grid-cols-1 md:flex md:justify-between gap-12 pb-10 border-b border-white/10">
          <div>
            <h2 className="text-2xl md:text-[28px] font-light mb-8 tracking-wide">
              Signup for our Newsletter
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[11px] tracking-wider font-normal"
                >
                  EMAIL ADDRESS*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border border-white/30 text-white px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  className="w-full bg-transparent border border-white/30 text-white px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-transparent border border-white text-white px-6 py-3 text-xs tracking-[1.5px] font-normal mt-2 hover:bg-white hover:text-black transition-all"
              >
                SIGNUP
              </button>
            </form>
            {status === 'success' && (
              <p className="text-[13px] mt-4 text-green-500">
                Thank you for subscribing!
              </p>
            )}
            {status === 'error' && (
              <p className="text-[13px] mt-4 text-red-400">
                Something went wrong. Try again.
              </p>
            )}
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[1.5px] mb-5">
              VISIT & EXPLORE
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href={ROUTES.SHOP}
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.ARCHIVE_EDIT}
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  The Archive Edit
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.ARCHIVE_RETROSPECTIVE}
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  The Retrospective
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.INSIDE_LF}
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  Inside LF
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[1.5px] mb-5">
              CUSTOMER CARE
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href={ROUTES.REFUND_POLICY}
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.SHIPPING_INFO}
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.FAQ}
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[1.5px] mb-5">
              CONNECT
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href={ROUTES.CONTACT_US}
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@lisafolawiyo.com"
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  info@lisafolawiyo.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348033085416?text=Hello%20Lisa%20Folawiyo%20Studio,%0AI'd%20like%20to%20request%20some%20assistance%20regarding%20your%20pieces%20and%20available%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/lisafolawiyo_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com/@lisafolawiyostudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <Link
              href={ROUTES.HOME}
              className="text-xs tracking-[1.5px] text-white/60 hover:text-white transition-colors"
            >
              LISAFOLAWIYO.COM
            </Link>
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
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
              <button
                onClick={scrollToTop}
                className="bg-transparent space-x-2 border-none text-white text-[11px] font-semibold tracking-[1.5px] cursor-pointer flex items-center justify-center gap-2 hover:opacity-70 transition-opacity"
              >
                <span className="text-xs tracking-wider text-white/60">
                  &copy;{currentYear}
                </span>
                BACK TO TOP <span className="text-base">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterThree;
