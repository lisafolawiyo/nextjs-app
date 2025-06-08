import React from 'react';
import { Metadata } from 'next';
import HereToHelp from '@/components/HereToHelp';

export const metadata: Metadata = {
  title: "Lisa Folawiyo Refund Policy | Returns & Exchanges",
  description: "Understand Lisa Folawiyo's refund and return policy for a seamless shopping experience.",
};


function Refund () {
  return (
    <div className='shipping-info page-container'>
        <section className="page-section">
            <div className="page-section-inner">
                <div className="page-title-wrap">
                    <h1>Refund And Exchange Policy</h1>
                </div>
                <div className="page-section-body about-section-body">
                  <h1>Returns</h1>
                  <ul>
                    <li>
                      1. Return is initiated and mailed back by the customer within 7 days of delivery date.
                    </li>
                    <li>
                      2. The returned items comply with our returns policy:
                      <div className='li-inner'>
                        <p>Items must be returned unworn, undamaged, and unused, with all tags attached and the original packaging included (exclusive of shipping box).</p>
                        <p>Accessories must be returned with the original dust bags and placed inside a protective outer box for shipping.</p>
                        <p>Jewellery must be returned in the same condition it arrived in, including all branded packaging and documents provided with it.</p>
                        <p>
                          Please take care when trying on your purchases and return them in the same condition you received them. 
                          Any returns that do not meet our policy will not be accepted. We do not cover returns postage for returns shipments and are unable to cover customs duties or sales tax.
                        </p>
                      </div>
                    </li>
                    <li>
                      3. Faulty or Wrong Item Received?
                       <div className='li-inner'>
                        <p>We are sorry if you have received the wrong item or if you think the item is faulty.</p>
                        <p>Please send a message to info@lisafolawiyo.com and we will be happy to help. Please quote your order number and attach an image of the item you have received.</p>
                        <p>If you think your item is faulty or if you have not received the correct item, please contact us on the same day as delivery. Otherwise, we may not be able to accept your return.</p>
                       </div>
                    </li>
                  </ul>
                  <h1>Exchanges</h1>
                  <p>
                    If you wish to exchange your item for a different size or colour, please return the unwanted item for a refund and place a new order.
                  </p>
                  <h1>Final Sales Item</h1>
                  <p>
                    Please note that all Sale items are FINAL SALE and cannot be returned or exchanged.
                  </p>
                  <p>
                    Exceptions include damaged items or order discrepancies based on size, colour, and style. 
                    If you would like to return a defective product, you must notify us no later than the same day as delivery. 
                    No returns will be accepted if you fail to notify us on the same day as delivery or failure to ship the product back to us within 7 days after the product was delivered. 
                    Store credit will be offered for any returned items.
                  </p>
                  <h1>Initiating A Return</h1>
                  <p>
                    We gladly accept returns that meet our policy. Please email us at info@lisafolawiyo.com with your order number in the subject line to submit your return request. 
                    You are responsible for repackaging and shipping the item on time. 
                    Lisa Folawiyo is not responsible for any packages that are lost in transit
                  </p>
                </div>
            </div>
        </section>
        <HereToHelp />
    </div>
  )
}

export default Refund