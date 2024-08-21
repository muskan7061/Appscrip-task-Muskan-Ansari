import React from 'react'
import './footer.css'

function footer() {
  return (
    <footer className="footer">
    <div className="footer-up">
        <div className="first-section">
            <h2>BE THE FIRST TO KNOW</h2>
            <p>Sign up for updates from mettā muse.</p>
            <div className="input-subscribe">
                <input id="input-type" type="email" placeholder="Enter your e-mail..." />
                <button id='subscribe-btn'>SUBSCRIBE</button>
            </div>
        </div>

        <div className="contact-us">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h3>CURRENCY</h3>
        <div className="use-img">
            <img src="/images/usd.png" alt="usa-img" />
       <ul>
        <li>
            USD
        </li>
       </ul>

        </div>
            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
    </div>
<hr />

    <div className="footer-down">
        <div className="footer-category">
            <h3>mettā muse</h3>
                <h5>About Us</h5>
                <h5>Stories</h5>
                <h5>Artisans</h5>
                <h5>Boutiques</h5>
                <h5>Contact Us</h5>
                <h5>EU Compliances Docs</h5>
        </div>
        <div className="footer-category">
            <h3>QUICK LINKS</h3>
                <h5>Orders & Shipping</h5>
                <h5>Join/Login as a Seller</h5>
                <h5>Payment & Pricing</h5>
                <h5>Return & Refunds</h5>
                <h5>FAQs</h5>
                <h5>Privacy Policy</h5>
                <h5>Terms & Conditions</h5>  
        </div>

        <div className="footer-category">
            <h3>FOLLOW US</h3>
            <div className="social-icons">
                <img src="./images/linkdin.png" alt="" />
                <img src="./images/Insta.png" alt="" />
            </div>

            <h3>mettā muse ACCEPTS</h3>

            <div className="payment-methods">
                <img src="./images/gpay.png" alt="" />
                <img src="./images/mastercard.png" alt="" />
                <img src="./images/paypal.png" alt="" />
                <img src="./images/amex.png" alt="" />
                <img src="./images/apple.png" alt="" />
                <img src="./images/pay.png" alt="" />
            </div>
        </div>
    </div>
    <div className="copyright">Copyright © 2023 mettamuse. All rights reserved.</div>
</footer>
  )
}

export default footer
