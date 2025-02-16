import { useEffect, useState } from 'react';

import { ADJECTIVE_ANIMATION, ADJECTIVES } from '../constants';

export function useNextAdjective(): string {
  const [adjective, setAdjective] = useState(ADJECTIVES[0]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setAdjective((prev) => {
          const currentIndex = ADJECTIVES.indexOf(prev);
          const nextIndex =
            currentIndex < ADJECTIVES.length - 1 ? currentIndex + 1 : 0;
          return ADJECTIVES[nextIndex];
        });
      },
      (ADJECTIVE_ANIMATION.Time + ADJECTIVE_ANIMATION.Delay) * 1000,
    );

    return () => clearInterval(interval);
  }, []);

  return adjective;
}
