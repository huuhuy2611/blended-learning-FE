import React from 'react';
import { useIsoLayoutEffect } from '@/common/utils';

const useIsAnimating = (val: any, duration: number = 300) => {
  const [isAnimating, setIsAnimating] = React.useState(false);

  useIsoLayoutEffect(() => {
    // if val changes -> isAnimating = true
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), duration);
    return () => clearTimeout(timer);
  }, [val, duration]);

  return isAnimating;
};

export default useIsAnimating;