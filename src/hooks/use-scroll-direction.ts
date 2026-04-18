import { useEffect, useRef, useState } from "react";

/**
 * Returns whether a floating element should be visible based on scroll behavior.
 * - Hides when user scrolls down past `threshold`.
 * - Shows when user scrolls up.
 * - Shows again when scrolling stops for `idleMs`.
 */
export function useAutoHideOnScroll(threshold = 80, idleMs = 180) {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const idleTimer = useRef<number | null>(null);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < threshold) {
        setVisible(true);
      } else if (delta > 4) {
        // scrolling down
        setVisible(false);
      } else if (delta < -4) {
        // scrolling up
        setVisible(true);
      }
      lastY.current = y;

      // Reappear when scrolling stops
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => setVisible(true), idleMs);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, [threshold, idleMs]);

  return visible;
}
