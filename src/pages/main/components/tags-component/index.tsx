import { motion } from 'framer-motion';

import { Tag } from '@shared/components/Tag';

import BufferSvg from '@assets/svg/buffer-svg.svg?react';
import Dropox from '@assets/svg/dropbox.svg?react';
import Framer from '@assets/svg/framer.svg?react';
import Netflix from '@assets/svg/netflix.svg?react';
import HubSpot from '@assets/svg/hubspot.svg?react';
import Stripe from '@assets/svg/stripe.svg?react';

import './style.scss';

const tags = [BufferSvg, Dropox, Framer, Netflix, HubSpot, Stripe, BufferSvg, Dropox];

export default function Tags() {
  const tagsLine1 = [...tags, ...tags];
  const tagsLine2 = [...tags, ...tags].reverse();

  return (
    <div className="tags">
      <motion.div
        style={{ display: 'inline-block' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <div className="tags__list">
          {tagsLine1.map((SvgComponent, index) => (
            <Tag key={index}>
              <SvgComponent />
            </Tag>
          ))}
        </div>
      </motion.div>
      <motion.div
        style={{ display: 'inline-block' }}
        animate={{ x: ['-50%', '0%'] }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <div className="tags__list">
          {tagsLine2.map((SvgComponent, index) => (
            <Tag key={index}>
              <SvgComponent />
            </Tag>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
