import Facebook from '@assets/svg/facebook.svg?react';
import Instagram from '@assets/svg/instagram.svg?react';
import Twiter from '@assets/svg/twiter.svg?react';
import Linkedin from '@assets/svg/linkedin.svg?react';

import './style.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__items">
          <div className="title">Elevanto.ai</div>
          <p className="subtitle">AI solutions that elevate your business efficiency</p>
        </div>
        <div className="footer__items">
          <div className="title">Company</div>
          <ul className="list">
            <li className="item">About Us</li>
            <li className="item">Contact Us</li>
          </ul>
        </div>
        <div className="footer__items">
          <div className="title">Product</div>
          <ul className="list">
            <li className="item">Use Case</li>
            <li className="item">Integrations</li>
            <li className="item">Pricing Plans</li>
          </ul>
        </div>
        <div className="footer__items">
          <div className="title">Resources</div>
          <ul className="list">
            <li className="item">Documentation</li>
            <li className="item">API Reference</li>
            <li className="item">Blog</li>
          </ul>
        </div>
        <div className="footer__items">
          <div className="title">Legal</div>
          <ul className="list">
            <li className="item">Privacy Policy</li>
            <li className="item">Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="footer__privacy">
        <p className="privacy">© 2024 Elevanto.ai. All rights reserved.</p>
        <div className="social-links">
          <div className="link">
            <Facebook />
          </div>
          <div className="link">
            <Twiter />
          </div>
          <div className="link">
            <Instagram />
          </div>
          <div className="link">
            <Linkedin />
          </div>
        </div>
      </div>
    </footer>
  );
}
