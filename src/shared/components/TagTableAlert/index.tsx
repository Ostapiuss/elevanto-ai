import { joinClassNames } from '@utils/utility';
import './style.scss';

type Props = {
  text: string;
};

export default function TagTableAlert({ text }: Props) {
  return (
    <div className={joinClassNames('table-tag-alert')}>
      <p>{text}</p>
    </div>
  );
}
