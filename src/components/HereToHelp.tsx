'use client';
import React from 'react';

export default function HereToHelp() {
  return (
    <section className="here-to-help-section">
      <div className="here-to-help-inner">
        <h2>Here to help you</h2>
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
  );
}
