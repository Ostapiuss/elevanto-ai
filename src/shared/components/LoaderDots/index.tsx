import { BounceLoader, BeatLoader } from 'react-spinners';

import './style.scss';
import { IF } from '../IF';

type Props = {
  loaderType: 'bounced' | 'beat';
  size?: number;
};

export function Loader({ loaderType = 'bounced', size }: Props) {
  return (
    <div className="loader" style={{ display: 'flex', justifyContent: 'center', padding: 50 }}>
      <IF condition={Boolean(loaderType === 'bounced')}>
        <BounceLoader color="#23272B" size={size ? size : 60} loading={true} />
      </IF>
      <IF condition={Boolean(loaderType === 'beat')}>
        <BeatLoader color="#23272B" size={size ? size : 60} loading={true} />
      </IF>
    </div>
  );
}
