"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  gradientColors?: string;
  gradientAnimationDuration?: number;
  hoverEffect?: boolean;
  className?: string;
  textClassName?: string;
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      text,
  gradientColors = "linear-gradient(90deg, #ffffff, #0f172a, #ffffff)",
  gradientAnimationDuration = 4,
      hoverEffect = false,
      className,
      textClassName,
      ...props
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const textVariants: Variants = {
      initial: {
        backgroundPosition: "0 0",
      },
      animate: {
        backgroundPosition: "100% 0",
        transition: {
          duration: gradientAnimationDuration,
          repeat: Infinity,
          repeatType: "reverse" as const,
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center py-8", className)}
        {...props}
      >
        <motion.h1
          className={cn(
            "leading-none text-[3rem] sm:text-[4rem] md:text-[4.75rem] lg:text-[5.5rem] xl:text-[6.5rem]",
            textClassName,
          )}
          style={{
            background: gradientColors,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: isHovered ? "0 0 8px rgba(255,255,255,0.3)" : "none",
          }}
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.6 }}
          onHoverStart={() => hoverEffect && setIsHovered(true)}
          onHoverEnd={() => hoverEffect && setIsHovered(false)}
        >
          {text}
        </motion.h1>
      </div>
    );
  },
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
