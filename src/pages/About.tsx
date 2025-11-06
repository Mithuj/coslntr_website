import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { AnimatedText } from "@/components/ui/animated-text";
import { useParallax } from "@/hooks/use-parallax";
import { fadeUp, fadeLeft, scaleUp, staggerFade } from "@/lib/motion";

type TimelineItem = {
  year: string;
  event: string;
  description: string;
};

const timelineReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.94,
    filter: "blur(18px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

interface TimelineEntryProps {
  item: TimelineItem;
  index: number;
}

const TimelineEntry = ({ item, index }: TimelineEntryProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    amount: 0.55,
    margin: "-15% 0px",
    once: false,
  });

  useEffect(() => {
    controls.start(isInView ? "visible" : "hidden");
  }, [controls, isInView]);

  const alignmentClass = index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
  const textAlignClass = index % 2 === 0 ? "md:text-right" : "md:text-left";

  return (
    <motion.div
      ref={ref}
      className={`flex items-center ${alignmentClass} flex-col gap-8`}
      style={{ pointerEvents: isInView ? "auto" : "none" }}
      initial="hidden"
      animate={controls}
      variants={timelineReveal}
    >
      <motion.div
        className={`flex-1 ${textAlignClass} text-center`}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
      >
        <div className="relative inline-block group">
          <span className="pointer-events-none absolute inset-x-4 -bottom-6 h-12 rounded-full bg-white/40 blur-[60px] opacity-80 transition duration-300 group-hover:opacity-100 group-hover:blur-[120px] group-hover:brightness-[2.4]" />
          <span className="pointer-events-none absolute inset-x-6 -bottom-14 h-24 rounded-full bg-white/25 blur-[120px] opacity-40 transition duration-500 group-hover:opacity-100 group-hover:brightness-[3] group-hover:blur-[150px]" />
          <span className="pointer-events-none absolute inset-x-10 -bottom-20 h-28 rounded-full bg-white/15 blur-[160px] opacity-20 transition duration-700 group-hover:opacity-80 group-hover:brightness-[3.4] group-hover:blur-[200px]" />
          <GlassCard hover={false} className="relative z-10 inline-block p-6">
            <div className="text-2xl font-bold text-white mb-2">{item.year}</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.event}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </GlassCard>
        </div>
      </motion.div>
      <motion.div
        className="w-8 h-8 rounded-full bg-white flex items-center justify-center z-10 shadow-[0_0_25px_rgba(255,255,255,0.35)]"
        animate={{ scale: isInView ? 1 : 0.7, opacity: isInView ? 1 : 0.25 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="w-3 h-3 rounded-full bg-background"></div>
      </motion.div>
      <div className="flex-1"></div>
    </motion.div>
  );
};

const About = () => {
  const timeline: TimelineItem[] = [
    { year: "2019", event: "Company Founded", description: "Coslntr was established in Colombo 6, Srilanka" },
    { year: "2020", event: "First Major Project", description: "Delivered enterprise automation solution" },
    { year: "2021", event: "Team Expansion", description: "Grew to 10+ talented professionals" },
    { year: "2022", event: "Mednyxa Launch", description: "Released our flagship tele-medical application" },
    { year: "2023", event: "AI Research Division", description: "Established dedicated AI R&D team" },
    { year: "2024", event: "15 Team Members", description: "Expanded to 15-member strong team" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions",
    },
    {
      title: "Collaboration",
      description: "Teamwork and partnership drive our success",
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do",
    },
    {
      title: "Growth",
      description: "Continuous learning and improvement is in our DNA",
    },
  ];

  const overviewParallax = useParallax({ distance: 160 });
  const timelineParallax = useParallax({ distance: 120 });
  const valuesParallax = useParallax({ distance: 140 });
  const locationParallax = useParallax({ distance: 120 });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <motion.div
          className="container relative z-10 mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <AnimatedText
              text="About Coslntr"
              className="py-0"
              textClassName="!text-5xl md:!text-7xl"
            />
          </motion.div>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
            Innovating technology solutions in Colombo 6, Srilanka since 2019
          </motion.p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section ref={overviewParallax.ref} className="relative isolate overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <svg
            className="absolute inset-0 h-full w-full text-white/40 rotate-2"
            viewBox="-960 -320 2480 1320"
            fill="none"
          >
            {Array.from({ length: 18 }).map((_, idx) => {
              const offset = idx * 120;
              const baseY = -220 + idx * 85;
              const amplitude = 70 + idx * 5;
              const startX = -900 - offset;
              const d = `M${startX} ${baseY} C${startX + 320} ${baseY - amplitude}, ${startX + 680} ${baseY + amplitude}, ${startX + 1040} ${baseY} C${startX + 1400} ${baseY - amplitude}, ${startX + 1760} ${baseY + amplitude}, ${startX + 2120} ${baseY}`;
              return (
                <motion.path
                  key={`about-overview-primary-${idx}`}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={0.85 + idx * 0.045}
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 18px rgba(255,255,255,0.35))" }}
                  initial={{ pathLength: 0.12, opacity: 0.24 }}
                  animate={{ pathLength: [0.12, 1], pathOffset: [0.08, 0.92], opacity: [0.24, 0.62, 0.24] }}
                  transition={{ duration: 18 + idx * 0.8, repeat: Infinity, ease: "linear" }}
                />
              );
            })}
          </svg>
          <svg
            className="absolute inset-0 h-full w-full text-white/28 -rotate-4 scale-105"
            viewBox="-980 -340 2520 1360"
            fill="none"
          >
            {Array.from({ length: 14 }).map((_, idx) => {
              const offset = idx * 150;
              const baseY = -260 + idx * 95;
              const amplitude = 90 + idx * 6;
              const startX = -940 + offset;
              const d = `M${startX} ${baseY} C${startX + 360} ${baseY + amplitude}, ${startX + 760} ${baseY - amplitude}, ${startX + 1160} ${baseY} C${startX + 1560} ${baseY + amplitude}, ${startX + 1960} ${baseY - amplitude}, ${startX + 2360} ${baseY}`;
              return (
                <motion.path
                  key={`about-overview-secondary-${idx}`}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={0.7 + idx * 0.05}
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 16px rgba(255,255,255,0.25))" }}
                  initial={{ pathLength: 0.1, opacity: 0.2 }}
                  animate={{ pathLength: [0.1, 1], pathOffset: [0.15, 0.9], opacity: [0.2, 0.48, 0.2] }}
                  transition={{ duration: 22 + idx, repeat: Infinity, ease: "linear" }}
                />
              );
            })}
          </svg>
        </div>
        <motion.div
          className="container relative z-10 mx-auto"
          style={{ y: overviewParallax.y }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={scaleUp}>
            <div className="grid gap-12 items-start">
              <motion.div variants={fadeLeft} className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
                <p className="text-muted-foreground mb-4">
                  Coslntr is a premier IT company based in Colombo 6, Srilanka, specializing in artificial intelligence, automation, and innovative software development. With a team of 15 dedicated professionals, we transform businesses through intelligent technology solutions.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our expertise spans across AI-based research and development, e-commerce platforms, medical applications, and custom software solutions. We pride ourselves on delivering high-quality products that solve real-world problems.
                </p>
                <p className="text-muted-foreground">
                  From our flagship product Mednyxa to enterprise automation systems, we are committed to innovation, excellence, and making a meaningful impact in the technology landscape.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Company Timeline */}
      <section ref={timelineParallax.ref} className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="container mx-auto"
          style={{ y: timelineParallax.y }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Growing and evolving since 2019</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <TimelineEntry key={item.year} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section ref={valuesParallax.ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <motion.div
          className="container mx-auto"
          style={{ y: valuesParallax.y }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground mb-8">The principles that guide everything we do</p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div key={value.title} variants={staggerFade} custom={index} className="text-center p-4">
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Location */}
      <section ref={locationParallax.ref} className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="container mx-auto"
          style={{ y: locationParallax.y }}
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <GlassCard className="p-8 md:p-12 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" variants={fadeUp}>
              Based in Colombo 6, Srilanka
            </motion.h2>
            <motion.p className="text-muted-foreground mb-8 max-w-2xl mx-auto" variants={fadeUp}>
              Proudly serving clients locally and globally from our headquarters in Colombo 6, Srilanka, bringing world-class technology solutions to businesses everywhere.
            </motion.p>
            <motion.div className="text-white font-medium" variants={fadeUp}>
              Colombo 6, Srilanka
            </motion.div>
          </GlassCard>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
