import Facebook from '@assets/svg/facebook.svg?react';
import Instagram from '@assets/svg/instagram.svg?react';
import XIcon from '@assets/svg/x-icon.svg?react';
import Linkedin from '@assets/svg/linkedin.svg?react';

import './style.scss';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__items">
            <div className="title">Elevanto.ai</div>
            <p className="subtitle">AI solutions that elevate your business efficiency</p>
          </div>
          <div className="footer__items-container">
            <div className="footer__items company">
              <div className="title">Company</div>
              <ul className="list">
                <li className="item">
                  <Link to="about-us">About Us</Link>
                </li>
                <li className="item">
                  <Link to="contact-us">Contact Us</Link>
                </li>
                <li className="item">
                  <Link to="blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="footer__items products">
              <div className="title">Product</div>
              <ul className="list">
                <li className="item">Use Case</li>
                <li className="item">Integrations</li>
                <li className="item">Pricing Plans</li>
              </ul>
            </div>
            <div className="footer__items legal">
              <div className="title">Legal</div>
              <ul className="list">
                <li className="item">
                  <Link to="privacy">Privacy Policy</Link>
                </li>
                <li className="item">
                  <Link to="terms">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__privacy">
          <p className="privacy">© 2024 Elevanto.ai. All rights reserved.</p>
          <div className="social-links">
            <div className="link">
              <Facebook />
            </div>
            <div className="link">
              <XIcon />
            </div>
            <div className="link">
              <Instagram />
            </div>
            <div className="link">
              <Linkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
