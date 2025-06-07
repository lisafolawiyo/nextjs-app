import React from 'react';
import "../app/styles/footer.scss";

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
                    <div id="mc_embed_shell">
                        <div id="mc_embed_signup">
                            {/* <form action="https://lisafolawiyo.us13.list-manage.com/subscribe/post?u=2d76a8c5dcf2309bdd35e45d2&amp;id=002b4b7ce7&amp;f_id=000bc2e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                                <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
                                    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                    <div className="mc-field-group"><label for="mce-EMAIL">Email Address <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value=""></div><div className="mc-field-group"><label for="mce-FNAME">First Name <span className="asterisk">*</span></label><input type="text" name="FNAME" className="required text" id="mce-FNAME" value="" required=""></div>
                                <div id="mce-responses" className="clear foot">
                                    <div className="response" id="mce-error-response" style="display: none;"></div>
                                    <div className="response" id="mce-success-response" style="display: none;"></div>
                                </div>
                            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                <input type="text" name="b_2d76a8c5dcf2309bdd35e45d2_002b4b7ce7" tabindex="-1" value="">
                            </div>
                                <div className="optionalParent">
                                    <div className="clear foot">
                                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe">
                                        <p style="margin: 0px auto;"><a href="http://eepurl.com/jbKQyU" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
                                    </div>
                                </div>
                            </div>
                        </form> */}
                        </div>
                    </div>
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