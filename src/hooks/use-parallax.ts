import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

type ScrollOffsetOption = Parameters<typeof useScroll>[0]["offset"];

interface UseParallaxOptions {
  distance?: number;
  offset?: ScrollOffsetOption;
}

const defaultOffset: ScrollOffsetOption = ["start end", "end start"];

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { distance = 120, offset = defaultOffset } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return { ref, y } as const;
};
