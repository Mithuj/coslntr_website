import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "bg-card/70 backdrop-blur-glass border border-border rounded-xl shadow-soft",
        hover && "transition-all duration-300 hover:shadow-glass hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
