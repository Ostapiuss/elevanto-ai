import Logo from '@assets/png/logo.png';

import Button from '@mui/material/Button';

import './style.scss';
import { Link } from 'react-router';

export function Header() {
  return (
    <div className="elevanto-header">
      <div className="elevanto-header__logo">
        <div className="logo">
          <img src={Logo} alt="elevanto-logo" />
        </div>
        <div className="title">Elevanto.ai</div>
      </div>
      <ul className="elevanto-header__navigation navigation">
        <li className="navigation__item">
          <Link to="/features">Features</Link>
        </li>
        <li className="navigation__item">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="navigation__item">
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li className="navigation__item">
          <Link to="/faqs">FAQS</Link>
        </li>
      </ul>
      <div className="elevanto-header__actions">
        <Button variant="outlined">Sign In</Button>
        <Button variant="contained">Start for free</Button>
      </div>
    </div>
  );
}
