import { useEffect, useRef, useState } from "react";

interface Options {
  duration?: number;
  start?: number;
}

/** Counts from `start` to `end` once the element scrolls into view. */
export const useCountUp = (end: number, { duration = 1800, start = 0 }: Options = {}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(start);
  const playedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(start + (end - start) * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !playedRef.current) {
            playedRef.current = true;
            animate();
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration, start]);

  return { ref, value };
};
