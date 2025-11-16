"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, type TargetAndTransition, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedTextVariant = "pulse" | "float" | "glow";

interface EvervaultCardProps {
  text?: string;
  className?: string;
  buttonHref?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  buttonClassName?: string;
  gradientClassName?: string;
  description?: string;
  allowOverflow?: boolean;
  highlightText?: boolean;
  animatedText?: boolean | AnimatedTextVariant;
  showPatternText?: boolean;
}

export const EvervaultCard: React.FC<EvervaultCardProps> = ({
  text,
  className,
  buttonHref = "#",
  buttonLabel = "View Projects",
  onButtonClick,
  buttonClassName,
  gradientClassName,
  description,
  allowOverflow = false,
  highlightText = false,
  animatedText = false,
  showPatternText = true,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    if (showPatternText) {
      setRandomString(generateRandomString(1500));
    }
  }, [showPatternText]);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    if (showPatternText) {
      setRandomString(generateRandomString(1500));
    }
  };

  const shouldAllowOverflow = allowOverflow || Boolean(description);
  const shouldHighlight = highlightText || Boolean(description);
  const resolvedAnimation = typeof animatedText === "string" ? animatedText : animatedText ? "pulse" : undefined;

  const animatedTextConfigs: Record<AnimatedTextVariant, { animate: TargetAndTransition; transition: Transition }> = {
    pulse: {
      animate: { scale: [1, 1.07, 1], opacity: [0.92, 1, 0.92] },
      transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
    },
    float: {
      animate: { y: [0, -6, 0], rotate: [0, -1.5, 0, 1.5, 0] },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
    glow: {
      animate: {
        textShadow: [
          "0 0 12px rgba(168, 206, 255, 0.25)",
          "0 0 18px rgba(129, 233, 255, 0.65)",
          "0 0 12px rgba(168, 206, 255, 0.25)",
        ],
        color: ["#0f172a", "#0ea5e9", "#0f172a"],
      },
      transition: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const animatedConfig = resolvedAnimation ? animatedTextConfigs[resolvedAnimation] : undefined;

  return (
    <div className={cn("p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative", className)}>
      <div
        onMouseMove={handleMouseMove}
        className={cn(
          "group/card relative flex h-full w-full items-center justify-center rounded-3xl bg-transparent",
          shouldAllowOverflow ? "overflow-visible" : "overflow-hidden",
        )}
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
          gradientClassName={gradientClassName}
          showPatternText={showPatternText}
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full text-4xl font-bold text-white">
            {shouldHighlight && (
              <>
                <span className="pointer-events-none absolute left-1/2 -bottom-5 h-10 w-32 -translate-x-1/2 rounded-full bg-white/85 blur-[60px] opacity-90" />
                <span className="pointer-events-none absolute left-1/2 -bottom-9 h-14 w-40 -translate-x-1/2 rounded-full bg-white/45 blur-[100px] opacity-70" />
                <span className="pointer-events-none absolute left-1/2 -bottom-12 h-20 w-48 -translate-x-1/2 rounded-full bg-white/30 blur-[140px] opacity-60" />
              </>
            )}
            <div className="absolute h-full w-full rounded-full bg-white/80 blur-sm dark:bg-black/80" />
            {animatedConfig ? (
              <motion.span
                className="z-20 text-black dark:text-white"
                animate={animatedConfig.animate}
                transition={animatedConfig.transition}
              >
                {text}
              </motion.span>
            ) : (
              <span className="z-20 text-black dark:text-white">{text}</span>
            )}
          </div>

          {description ? (
            <div className="pointer-events-auto absolute left-1/2 top-full w-full max-w-4xl -translate-x-1/2 mt-8 sm:mt-10">
              <div className="relative mx-auto flex w-full justify-center">
                <span className="pointer-events-none absolute inset-x-10 -top-16 h-32 rounded-full bg-white/25 blur-[140px] opacity-40" />
                <span className="pointer-events-none absolute inset-x-16 -top-24 h-36 rounded-full bg-white/15 blur-[180px] opacity-30" />
                <div className="group relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-white/12 via-white/8 to-white/5 p-[2px] shadow-xl shadow-white/10 backdrop-blur-xl transition-shadow duration-300 hover:shadow-2xl">
                  <div className="rounded-[1.55rem] border border-white/15 bg-black/80 p-6 text-sm leading-relaxed text-white/85 shadow-[0_18px_45px_rgba(15,15,34,0.55)] sm:p-7 sm:text-base md:p-8">
                    {description}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="group absolute left-1/2 bottom-8 inline-block overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl">
              {onButtonClick ? (
                <button
                  type="button"
                  onClick={onButtonClick}
                  className={cn(
                    "flex items-center gap-3 rounded-[1.15rem] border border-white/10 bg-black/80 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-black/70 hover:shadow-md group-hover:-translate-y-0.5 group-hover:shadow-lg",
                    buttonClassName,
                  )}
                >
                  <span className="opacity-90 transition-opacity group-hover:opacity-100">{buttonLabel}</span>
                  <span className="opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                    →
                  </span>
                </button>
              ) : (
                <a
                  href={buttonHref}
                  className={cn(
                    "flex items-center gap-3 rounded-[1.15rem] border border-white/10 bg-black/80 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-black/70 hover:shadow-md group-hover:-translate-y-0.5 group-hover:shadow-lg",
                    buttonClassName,
                  )}
                >
                  <span className="opacity-90 transition-opacity group-hover:opacity-100">{buttonLabel}</span>
                  <span className="opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                    →
                  </span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface CardPatternProps {
  mouseX: ReturnType<typeof useMotionValue>;
  mouseY: ReturnType<typeof useMotionValue>;
  randomString: string;
  gradientClassName?: string;
  showPatternText?: boolean;
}

export const CardPattern: React.FC<CardPatternProps> = ({
  mouseX,
  mouseY,
  randomString,
  gradientClassName,
  showPatternText = true,
}) => {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50" />
      <motion.div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition duration-500 group-hover/card:opacity-100 backdrop-blur-xl",
          gradientClassName ?? "bg-gradient-to-r from-green-500 to-blue-700",
        )}
        style={style}
      />
      {showPatternText && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-500 group-hover/card:opacity-100"
          style={style}
        >
          <p className="absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-white">
            {randomString}
          </p>
        </motion.div>
      )}
    </div>
  );
};

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
