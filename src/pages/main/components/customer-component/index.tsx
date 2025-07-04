import { CustomerItem } from '@interfaces/shared-interfaces';

import './style.scss';

export default function CustomerComponent({
  fullName,
  iconSrc,
  dateTime,
  userName,
  position,
  socialIcon,
  tag,
  text,
}: CustomerItem) {
  return (
    <div className="customer">
      <div className="customer__personal-info">
        <div className="user-icon">
          <img src={iconSrc} alt="" />
        </div>
        <div className="personal-info">
          <div className="info">
            <p className="full-name">
              {fullName}
              {' | '}
            </p>
            <p className="position">{position}</p>
          </div>
          <p className="username">{userName}</p>
        </div>
        <a className="social-link">{socialIcon}</a>
      </div>
      <div className="customer__text">
        <span className="text">
          <p className="plain-text">
            <span className="mantion">{tag}</span>
            {' ' + text}
          </p>
        </span>
      </div>
      <p className="customer__date">{dateTime}</p>
    </div>
  );
}
