import { ComponentSliderItem } from '@interfaces/shared-interfaces';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { Button } from '@mui/material';

import './style.scss';
import { joinClassNames } from '@utils/utility';

type SliderProps = {
  slides: ComponentSliderItem[];
};

export default function SliderComponent({ slides }: SliderProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="slider">
      {/* Tabs */}
      <div className="slider__tabs">
        {slides.map((slide, idx) => (
          <Button
            key={slide.id}
            onClick={() => setActive(idx)}
            className={`slider__tab ${active === idx ? 'active' : ''}`}
          >
            <div className="buttons-content">
              <div className="icon">{slide.nameIcon}</div>
              <p>{slide.name}</p>
            </div>
          </Button>
        ))}
      </div>

      {/* Slide */}
      <div className="slider__content-container">
        <div className="slider__container">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={joinClassNames('slider__content', slides[active].className)}
            >
              {slides[active].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="slider__dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`slider__dot ${active === idx ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
