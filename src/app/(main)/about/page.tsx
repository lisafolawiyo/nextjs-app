import React from 'react';
import { Metadata } from 'next';
import HereToHelp from '@/components/HereToHelp';

export const metadata: Metadata = {
  title: "Lisafolawiyo",
  description: "About Us | Lisafolawiyo",
};



function AboutUs() {
  return (
    <div className='about-us page-container'>
      <section className="about-section page-section">
          <div className="page-section-inner about-section-inner">
              <div className="page-title-wrap">
                  <h1>Lisa folawiyo studio</h1>
              </div>
              <div className="page-section-body about-section-body">
                  <p>
                      Welcome to Lisa Folawiyo, where we elevate fashion to an art form through our meticulous craftsmanship 
                      and dedication to detail. Specializing in hand embellishment and beadwork, we pride ourselves on 
                      creating pieces that seamlessly blend opulence with contemporary flair. 
                  </p>
                  <p>
                      Welcome to Lisa Folawiyo, where we elevate fashion to an art form through our meticulous craftsmanship 
                      and dedication to detail. Specializing in hand embellishment and beadwork, we pride ourselves on 
                      creating pieces that seamlessly blend opulence with contemporary flair. 
                  </p>
                  <p>
                      At Lisa Folawiyo, we invite you to indulge in the richness of our creations, where our designs become 
                      the language of self expression, allowing you to adorn yourself in a tapestry of elegance and 
                      sophistication.
                  </p>
              </div>
          </div>
      </section>
      <HereToHelp />
    </div>
  )
}

export default AboutUs