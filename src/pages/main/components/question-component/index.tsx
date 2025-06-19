import './style.scss';

import Accordions from '@shared/components/Accordions';

import { questions } from '@mocks/main';

export default function MainQuestion() {
  return (
    <div className="main-question">
      <Accordions data={questions} />
    </div>
  );
}
