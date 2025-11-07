"use client";

import { useEffect, useState } from "react";

interface DotCardProps {
  target?: number;
  duration?: number;
  className?: string;
}

const DotCard = ({
  target = 777000,
  duration = 2000,
  className,
}: DotCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const range = end - start;
    if (range <= 0) return;
    const increment = Math.ceil(end / (duration / 50));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 50);
    return () => clearInterval(timer);
  }, [target, duration]);

  const display = count < 1000 ? `${count}` : `${Math.floor(count / 1000)}k`;

  return (
    <div className={`outer ${className ?? ""}`}>
      <div className="dot" />
      <div className="card">
        <div className="ray" />
        <div className="text">{display}</div>
        <div className="label">Projects</div>
        <div className="line topl" />
        <div className="line leftl" />
        <div className="line bottoml" />
        <div className="line rightl" />
      </div>
    </div>
  );
};

export default DotCard;
