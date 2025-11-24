'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type FloatingPathsProps = {
  position: number;
};

function FloatingPaths({ position }: FloatingPathsProps) {
  const paths = Array.from({ length: 36 }, (_, i) => {
    const offset = i * 5 * position;
    const vertical = i * 6;

    return {
      id: i,
      d: `M-${380 - offset} -${189 + vertical}C-${380 - offset} -${189 + vertical} -${312 - offset} ${216 - vertical} ${152 - offset} ${343 - vertical}C${616 - offset} ${470 - vertical} ${684 - offset} ${875 - vertical} ${684 - offset} ${875 - vertical}`,
      width: 0.5 + i * 0.03,
      opacity: 0.1 + i * 0.03,
      duration: 20 + Math.random() * 10,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="h-full w-full text-slate-950 dark:text-white"
        viewBox="-650 -250 1500 1100"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={Math.min(path.opacity, 0.9)}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }}
            transition={{ duration: path.duration, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </svg>
    </div>
  );
}

interface BackgroundPathsProps {
  title?: string;
}

export function BackgroundPaths({ title = 'Background Paths' }: BackgroundPathsProps) {
  const words = title.split(' ');

  return (
  <div className="relative flex min-h-[120vh] w-full items-center justify-center overflow-hidden bg-black py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-black via-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-8 text-balance text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="mr-4 inline-block last:mr-0">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: 'spring',
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          <div className="group relative inline-block overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl">
            <Button
              asChild
              variant="ghost"
              className="rounded-[1.15rem] border border-white/10 px-8 py-6 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:shadow-md group-hover:-translate-y-0.5 group-hover:shadow-lg bg-black/80 hover:bg-black/70"
            >
              <Link to="/projects" className="flex items-center justify-center gap-3">
                <span className="transition-opacity opacity-90 group-hover:opacity-100">Discover Excellence</span>
                <span className="transition-all duration-300 opacity-70 group-hover:translate-x-1.5 group-hover:opacity-100" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
