"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

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
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    setRandomString(generateRandomString(1500));
  };

  const shouldAllowOverflow = allowOverflow || Boolean(description);

  return (
    <div className={cn("p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative", className)}>
      <div
        onMouseMove={handleMouseMove}
        className={cn(
          "group/card relative flex h-full w-full items-center justify-center rounded-3xl bg-transparent",
          shouldAllowOverflow ? "overflow-visible" : "overflow-hidden",
        )}
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} gradientClassName={gradientClassName} />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full text-4xl font-bold text-white">
            <div className="absolute h-full w-full rounded-full bg-white/80 blur-sm dark:bg-black/80" />
            <span className="z-20 text-black dark:text-white">{text}</span>
          </div>

          {description ? (
            <div className="pointer-events-auto absolute left-1/2 bottom-0 w-full max-w-xl -translate-x-1/2 translate-y-[55%] sm:translate-y-[70%]">
              <div className="rounded-3xl border border-white/50 bg-white/90 p-6 text-base leading-relaxed text-black/80 shadow-2xl shadow-black/15 backdrop-blur">
                {description}
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
}

export const CardPattern: React.FC<CardPatternProps> = ({ mouseX, mouseY, randomString, gradientClassName }) => {
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
      <motion.div className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-500 group-hover/card:opacity-100" style={style}>
        <p className="absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-white">
          {randomString}
        </p>
      </motion.div>
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
