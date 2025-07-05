import { capitalizeFirstLetter, joinClassNames } from '@utils/utility';
import './style.scss';

type Stages = 'hot' | 'warm' | 'cold';

type Props = {
  text: string;
  status: Stages;
};

export default function StageTag({ text, status }: Props) {
  return (
    <div className={joinClassNames('stage-tag', status)}>
      <p>{capitalizeFirstLetter(text)}</p>
    </div>
  );
}
