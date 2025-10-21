import React from 'react';
import { Metadata } from 'next';
import HereToHelp from '@/components/HereToHelp';

export const metadata: Metadata = {
  title: 'Lisa Folawiyo Shipping Information | Worldwide Delivery',
  description:
    "Learn about Lisa Folawiyo's shipping policies, delivery times, and worldwide shipping options.",
};

function Shipping() {
  return (
    <div className="shipping-info page-container">
      <div className="page-inner-div">
        <section className="page-section">
          <div className="page-section-inner">
            <div className="page-title-wrap">
              <h1>Shipping Information</h1>
            </div>
            <div className="page-section-body about-section-body">
              <p>
                Shipping timelines are subject to the unique nature and
                craftsmanship of each piece. Some pieces are made to order and
                can take up to 4-6 weeks to complete, while other items are in
                stock and ready to ship within 48 hours.
              </p>
              <p>
                We&apos;ve partnered with DHL Express to ensure seamless global
                delivery covering 220 countries worldwide, within 3-5 business
                days of ship date. Orders are processed and fulfilled Monday to
                Friday between 10AM and 6PM West African Time.
              </p>
              <h1>Prices</h1>
              <p>
                Shipping costs will vary depending on the destination of your
                chosen items. Clothing prices displayed on the website are not
                inclusive of shipping or tax.
              </p>
              <h1>Customs & Import Duties</h1>
              <p>
                If an item ships to you from a different country, customs and
                import duties may be levied by your local government. All
                additional customs and import duties are the responsibility of
                the person purchasing. This can range from 20% to 40% of the
                order value.
              </p>
            </div>
          </div>
        </section>
        <HereToHelp />
      </div>
    </div>
  );
}

export default Shipping;
