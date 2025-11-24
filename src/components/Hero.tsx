'use client';

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { Link } from "react-router-dom";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function Hero({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "/",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full min-h-[calc(100vh-40px)] overflow-hidden rounded-b-xl px-6 pt-40 text-center text-white md:px-8"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,#0f172a_0%,#020617_45%,#020617_100%)]" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Eyebrow */}
        {eyebrow && (
          <a href="#" className="group">
            <span
              className="font-geist mx-auto flex w-fit items-center justify-center rounded-3xl border-[2px] border-white/10 bg-gradient-to-tr from-white/5 via-sky-500/5 to-transparent px-5 py-2 text-sm uppercase tracking-tight text-sky-100"
            >
              {eyebrow}
              <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        )}

        <div className="relative mt-4 flex w-full justify-center">
          <div className="pointer-events-none absolute left-1/2 top-[-90px] h-[420px] w-full max-w-5xl -translate-x-1/2 -z-10 transform-gpu">
            <div className="absolute inset-0 [clip-path:ellipse(78%_55%_at_50%_35%)]">
              <SparklesCore
                className="absolute inset-0"
                background="transparent"
                minSize={0.6}
                maxSize={2.2}
                speed={1.6}
                particleColor="rgba(255,255,255,0.85)"
                particleDensity={160}
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center">
            {/* Title */}
            <h1
              className="text-balance bg-gradient-to-br from-white via-sky-200 to-white/70 bg-clip-text text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 animate-fade-in sm:text-6xl md:text-7xl lg:text-8xl"
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-balance text-lg tracking-tight text-slate-300 opacity-0 animate-fade-in md:text-xl"
            >
              {subtitle}
            </p>

            {/* CTA Button */}
            {ctaLabel && ctaHref && (
              <Button
                asChild
                className="relative z-20 w-fit font-geist tracking-tighter text-center text-lg text-black transition-shadow duration-300 md:w-52"
              >
                <Link className="rounded-full bg-white px-10 py-4 shadow-lg hover:bg-white/90" to={ctaHref}>
                  {ctaLabel}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="relative mt-32 opacity-0 animate-fade-up [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
      />
    </section>
  );
}
