import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Lisa Folawiyo | Get in Touch with Us',
  description:
    'Have questions or need assistance? Contact Lisa Folawiyo today for customer support and inquiries.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light text-center mb-16 uppercase tracking-wide">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Phone & Email */}
          <div className="text-center md:text-left space-y-6">
            <div>
              <h3 className="text-xs font-semibold tracking-[1.5px] mb-3 text-gray-600">
                PHONE
              </h3>
              <a
                href="tel:+2348033085416"
                className="text-lg md:text-xl font-light hover:underline transition-all"
              >
                +234 803 308 5416
              </a>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-[1.5px] mb-3 text-gray-600">
                EMAIL
              </h3>
              <a
                href="mailto:info@lisafolawiyo.com"
                className="text-lg md:text-xl font-light hover:underline transition-all"
              >
                info@lisafolawiyo.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left space-y-6">
            <div>
              <h3 className="text-xs font-semibold tracking-[1.5px] mb-3 text-gray-600">
                SOCIAL MEDIA
              </h3>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/lisafolawiyo_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg md:text-xl font-light hover:underline transition-all"
                >
                  Instagram
                </a>
                <a
                  href="https://youtube.com/@lisafolawiyostudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg md:text-xl font-light hover:underline transition-all"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="text-center md:text-left space-y-6">
            <div>
              <h3 className="text-xs font-semibold tracking-[1.5px] mb-3 text-gray-600">
                LOCATION
              </h3>
              <p className="text-lg md:text-xl font-light leading-relaxed">
                13 Ribadu Road
                <br />
                Ikoyi, Lagos, Nigeria
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-[1.5px] mb-3 text-gray-600">
                HOURS
              </h3>
              <p className="text-lg md:text-xl font-light">
                Monday to Friday
                <br />
                10AM - 6PM WAT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
