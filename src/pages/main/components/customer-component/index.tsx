import { CustomerItem } from '@interfaces/shared-interfaces';

import './style.scss';
import { IF } from '@shared/components/IF';

export default function CustomerComponent({
  fullName,
  iconSrc,
  dateTime,
  userName,
  position,
  socialIcon,
  tagPosition,
  tag,
  text,
}: CustomerItem) {
  const customerTag = tag ? tag : '';
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
            <IF condition={Boolean(tagPosition === 'start' || !tagPosition)}>
              <span className="mantion">{customerTag}</span>
              {' ' + text}
            </IF>
            <IF condition={Boolean(tagPosition === 'end')}>
              {text + ' '}
              <span className="mantion">{customerTag}</span>
            </IF>
          </p>
        </span>
      </div>
      <p className="customer__date">{dateTime}</p>
    </div>
  );
}
