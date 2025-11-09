import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Lisa Folawiyo | Get in Touch with Us',
  description:
    'Have questions or need assistance? Contact Lisa Folawiyo today for customer support and inquiries.',
};

export default function Contact() {
  return (
    <div className="page-container">
      <section className="here-to-help-section">
        <div className="here-to-help-inner">
          <h2>Contact us</h2>
          <div className="inner-detail">
            <div className="inner-detail-item">
              <div className="inner-detail-item-row row-left">
                <span className="inner-text">
                  Phone: <a href="">+234 803 308 5416</a>
                </span>
              </div>
              <div className="inner-detail-item-row">
                <span className="inner-text">
                  Email: <a href="">info@lisafolawiyo.com</a>
                </span>
              </div>
            </div>

            <div className="inner-detail-item">
              <div className="inner-detail-item-row row-left">
                <span className="inner-text">
                  <a
                    href="https://youtube.com/embed/W_CLHPrmIlE"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </span>
              </div>
              <div className="inner-detail-item-row">
                <span className="inner-text">
                  <a
                    href="https://instagram.com/lisafolawiyo_studio"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </span>
              </div>
            </div>
            <div className="inner-detail-item">
              <div className="inner-detail-item-row row-left">
                <span className="inner-text">
                  13 Ribadu Road Ikoyi, Lagos, Nigeria
                </span>
              </div>
              <div className="inner-detail-item-row">
                <span className="inner-text">
                  Monday to Friday 10AM - 6PM WAT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
