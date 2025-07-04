import { joinClassNames } from '@utils/utility';
import './style.scss';

type Statuses = 'pending' | 'draft' | 'paid';

type Props = {
  text: string;
  status: Statuses;
};

export default function SmallAlert({ text, status }: Props) {
  return (
    <div className={joinClassNames('small-alert', status)}>
      <p>{text}</p>
    </div>
  );
}
