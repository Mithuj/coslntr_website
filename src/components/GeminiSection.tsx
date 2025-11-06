"use client";

import { useRef } from "react";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export const GeminiSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLengthOne = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const pathLengthTwo = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const pathLengthThree = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const pathLengthFour = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);
  const pathLengthFive = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);

  const pathLengths: MotionValue<number>[] = [
    pathLengthOne,
    pathLengthTwo,
    pathLengthThree,
    pathLengthFour,
    pathLengthFive,
  ];

  return (
    <section
      ref={containerRef}
      className="relative isolate min-h-[160vh] overflow-visible bg-black py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black to-black/60" />
      <div className="relative mx-auto flex h-full w-full flex-col items-center justify-start">
        <GoogleGeminiEffect
          pathLengths={pathLengths}
          title="Powered by Coslntr"
          description="Scroll to uncover how our teams blend law, AI, and engineering into resilient systems."
          className="mx-auto w-full"
        />
      </div>
    </section>
  );
};
