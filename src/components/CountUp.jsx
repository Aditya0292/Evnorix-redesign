import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function CountUp({
  to,
  from = 0,
  duration = 1.4,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;
      const startVal = from;
      const endVal = to;
      const durationMs = duration * 1000;

      const animateCounter = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        
        // easeOutExpo formula
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = startVal + (endVal - startVal) * easeProgress;
        
        setCount(currentVal);

        if (progress < 1) {
          window.requestAnimationFrame(animateCounter);
        } else {
          setCount(endVal);
        }
      };

      window.requestAnimationFrame(animateCounter);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
