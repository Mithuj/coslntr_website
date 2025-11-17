"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface DotCardProps {
  target?: number;
  duration?: number;
  className?: string;
  suffix?: string;
  label?: string;
}

const DotCard = ({
  target = 777000,
  duration = 2000,
  className,
  suffix = "",
  label = "Projects",
}: DotCardProps) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.6 });

  const clearAnimation = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAnimation = useCallback(() => {
    clearAnimation();
    const end = target;
    if (end <= 0) {
      setCount(end);
      return;
    }

    let current = 0;
    setCount(0);
    const totalSteps = Math.max(Math.floor(duration / 50), 1);
    const increment = Math.max(Math.ceil(end / totalSteps), 1);

    intervalRef.current = window.setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearAnimation();
      }
      setCount(current);
    }, 50);
  }, [clearAnimation, duration, target]);

  useEffect(() => {
    if (isInView) {
      startAnimation();
    } else {
      clearAnimation();
    }

    return clearAnimation;
  }, [isInView, startAnimation, clearAnimation]);

  useEffect(() => clearAnimation, [clearAnimation]);

  const displayNumber = count < 1000 ? `${count}` : `${Math.floor(count / 1000)}k`;
  const display = `${displayNumber}${suffix}`;

  return (
    <div ref={containerRef} className={`outer ${className ?? ""}`}>
      <div className="dot" />
      <div className="card">
        <div className="ray" />
        <div className="text">{display}</div>
        <div className="label">{label}</div>
        <div className="line topl" />
        <div className="line leftl" />
        <div className="line bottoml" />
        <div className="line rightl" />
      </div>
    </div>
  );
};

export default DotCard;
