import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animate } from 'framer-motion';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const controls = animate(window.scrollY || 0, 0, {
      duration: 0.6,
      onUpdate: (value) => window.scrollTo(0, value),
    });

    return () => controls.stop();
  }, [pathname]);

  return null;
}
