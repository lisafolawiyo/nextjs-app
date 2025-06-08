import React from 'react';
import "../app/styles/footer.scss";
import MailchimpForm from './MailchimpForm';

function FooterTwo() {
  return (
    <>
        <footer className="footer-section">
            <div className="footer-section-wrap">
                <div className="footer-top">
                <div className="footer-top-one">   
                    <p>
                    Be the first to find out about new styles and exclusive offers.
                    </p>
                    <div className="footer-newsletter-wrap">
                        <MailchimpForm />
                    </div>
                    
                </div>
                <div className="footer-top-two">
                    <div className="footer-top-inner-wrap">
                    <h3>quick links</h3>
                    <ul>
                        <li><a href="/shop">shop</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/refund">Refund Policy</a></li>
                        <li><a href="/shipping_info">Shipping Info</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                    </div>
                </div>
                <div className="footer-top-three">
                    <div className="footer-top-inner-wrap">
                    <h3>follow us</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Youtube</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </footer>
            
        <div className="footer-bottom">
        <p>&copy; Lisafolawiyo <span className="footer-year"></span></p>
        </div>
    </>
  )
}

export default FooterTwo