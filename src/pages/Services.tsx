import { useEffect } from "react";
import { Zap, Brain, Cog, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { PinContainer } from "@/components/ui/pin-container";
import { AnimatedText } from "@/components/ui/animated-text";
import { useParallax } from "@/hooks/use-parallax";
import { fadeUp, scaleUp, staggerFade } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/coslntr-logo.png";

const Services = () => {
  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!favicon) {
      return;
    }
    const previousHref = favicon.getAttribute("href");
    favicon.href = logo;
    return () => {
      if (previousHref) {
        favicon.href = previousHref;
      }
    };
  }, []);

  const services = [
    {
      icon: Zap,
      title: "AI-Based Automation Solutions",
      description:
        "Revolutionize your business with intelligent AI automation that learns, adapts, and enhances productivity. We create smart systems that handle complex processes with precision and speed.",
      features: [
        "Predictive Process Automation",
        "Intelligent Workflow Management",
        "Smart Data Processing",
        "Adaptive Decision Systems",
      ],
    },
    {
      icon: Brain,
      title: "Deep AI Research Solutions",
      description:
        "Accelerate innovation through our advanced AI research services. We explore cutting-edge models and algorithms to solve real-world challenges and power next-generation applications.",
      features: [
        "Machine Learning Model Development",
        "Deep Neural Network Optimization",
        "Computer Vision & NLP Research",
        "AI Model Evaluation & Deployment",
      ],
    },
    {
      icon: Lightbulb,
      title: "AI-Based R&D Software Solutions",
      description:
        "Empower your R&D teams with intelligent AI tools that streamline experimentation, automate analysis, and drive data-driven discovery.",
      features: [
        "AI-Powered Data Analysis",
        "Automated Experiment Tracking",
        "Research Workflow Integration",
        "Insight Generation Tools",
      ],
    },
    {
      icon: Cog,
      title: "Custom Software Development",
      description:
        "Bring your vision to life with tailored software built for performance, scalability, and user satisfaction — designed to fit your unique business needs.",
      features: [
        "Web & Mobile App Development",
        "Enterprise System Integration",
        "Cloud-Based Solutions",
        "UI/UX Design & Prototyping",
      ],
      ctaLabel: "View More",
      ctaHref: "/more-services",
    },
  ];

  const technologyRows = [
    [
      "GCP",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "Grok",
      "Gemini",
      "n8n",
      "Crewn AI",
      "AWS",
    ],
    [
      "GCP",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "Grok",
      "Gemini",
      "n8n",
      "Crewn AI",
      "AWS",
    ],
  ];

  const servicesParallax = useParallax({ distance: 160 });
  const techParallax = useParallax({ distance: 140 });
  const ctaParallax = useParallax({ distance: 120 });

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
              text="Our Services"
              className="py-0"
              textClassName="!text-5xl md:!text-7xl"
            />
          </motion.div>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
            Comprehensive IT solutions designed to empower your business with cutting-edge technology
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section ref={servicesParallax.ref} className="relative isolate overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <svg
            className="absolute inset-0 h-full w-full text-cyan-200/55 rotate-1"
            viewBox="-1040 -360 2720 1480"
            fill="none"
          >
            {Array.from({ length: 20 }).map((_, idx) => {
              const offset = idx * 130;
              const baseY = -260 + idx * 90;
              const amplitude = 85 + idx * 6;
              const startX = -980 - offset;
              const d = `M${startX} ${baseY} C${startX + 340} ${baseY - amplitude}, ${startX + 720} ${baseY + amplitude}, ${startX + 1100} ${baseY} C${startX + 1480} ${baseY - amplitude}, ${startX + 1860} ${baseY + amplitude}, ${startX + 2240} ${baseY}`;
              return (
                <motion.path
                  key={`services-grid-primary-${idx}`}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={0.9 + idx * 0.045}
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 18px rgba(56,189,248,0.35))" }}
                  initial={{ pathLength: 0.1, opacity: 0.24 }}
                  animate={{ pathLength: [0.1, 1], pathOffset: [0.08, 0.92], opacity: [0.24, 0.58, 0.24] }}
                  transition={{ duration: 20 + idx * 0.9, repeat: Infinity, ease: "linear" }}
                />
              );
            })}
          </svg>
          <svg
            className="absolute inset-0 h-full w-full text-blue-300/45 -rotate-5 scale-[1.08]"
            viewBox="-1080 -380 2800 1520"
            fill="none"
          >
            {Array.from({ length: 16 }).map((_, idx) => {
              const offset = idx * 160;
              const baseY = -300 + idx * 100;
              const amplitude = 110 + idx * 7;
              const startX = -1020 + offset;
              const d = `M${startX} ${baseY} C${startX + 380} ${baseY + amplitude}, ${startX + 800} ${baseY - amplitude}, ${startX + 1220} ${baseY} C${startX + 1640} ${baseY + amplitude}, ${startX + 2060} ${baseY - amplitude}, ${startX + 2480} ${baseY}`;
              return (
                <motion.path
                  key={`services-grid-secondary-${idx}`}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={0.75 + idx * 0.05}
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 16px rgba(59,130,246,0.3))" }}
                  initial={{ pathLength: 0.08, opacity: 0.22 }}
                  animate={{ pathLength: [0.08, 1], pathOffset: [0.18, 0.88], opacity: [0.22, 0.5, 0.22] }}
                  transition={{ duration: 24 + idx, repeat: Infinity, ease: "linear" }}
                />
              );
            })}
          </svg>
        </div>
        <motion.div
          className="container relative z-10 mx-auto"
          style={{ y: servicesParallax.y }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="grid gap-16 sm:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={staggerFade}
                custom={index}
                className="flex items-center justify-center"
              >
                <PinContainer
                  title={service.title}
                  href="/contact"
                  containerClassName="mx-auto flex h-[420px] w-full max-w-xs sm:max-w-sm items-center justify-center"
                  className="w-[260px] sm:w-[280px]"
                >
                  <div className="space-y-4 text-left text-white">
                    <div className="flex items-center gap-3">
                      <service.icon className="h-10 w-10 text-cyan-400" />
                      <span className="text-xl font-semibold leading-tight">
                        {service.title}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-300">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-xs text-neutral-200">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {"ctaHref" in service && service.ctaHref && (
                      <Button
                        asChild
                        className="relative mt-6 w-fit font-geist tracking-tight text-center text-sm text-black transition-shadow duration-300 sm:text-base"
                      >
                        <Link
                          to={service.ctaHref}
                          className="rounded-full bg-white px-7 py-3 shadow-lg hover:bg-white/90"
                        >
                          {"ctaLabel" in service && service.ctaLabel ? service.ctaLabel : "View More"}
                        </Link>
                      </Button>
                    )}
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Technology Stack */}
      <section ref={techParallax.ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <motion.div
          className="container mx-auto"
          style={{ y: techParallax.y }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technology Stack</h2>
            <p className="text-muted-foreground">We work with the latest and most reliable technologies</p>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {technologyRows.map((row, rowIndex) => (
              <motion.div key={rowIndex} variants={staggerFade} custom={rowIndex}>
                <div className="marquee-wrapper">
                  <div
                    className={`marquee-track gap-4 ${rowIndex === 0 ? "animate-marquee-left" : "animate-marquee-right"}`}
                  >
                    {row.concat(row).map((tech, idx) => (
                      <div
                        key={`${tech}-${idx}`}
                        className="px-6 py-3 bg-card/80 backdrop-blur rounded-lg shadow-soft border border-border flex-shrink-0"
                      >
                        <span className="text-foreground font-medium whitespace-nowrap">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section ref={ctaParallax.ref} className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="container mx-auto"
          style={{ y: ctaParallax.y }}
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <GlassCard className="p-12 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" variants={fadeUp}>
              Let's Build Something Amazing Together
            </motion.h2>
            <motion.p className="text-muted-foreground mb-8 max-w-2xl mx-auto" variants={fadeUp}>
              Ready to transform your business with our services? Get in touch with us today.
            </motion.p>
            <motion.a href="/contact" variants={fadeUp} className="inline-block">
              <div className="group relative inline-block overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl">
                <button
                  className="flex items-center gap-3 rounded-[1.15rem] border border-white/10 bg-black/80 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-black/70 hover:shadow-md group-hover:-translate-y-0.5 group-hover:shadow-lg"
                >
                  <span className="opacity-90 transition-opacity group-hover:opacity-100">Get Started</span>
                  <span className="opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                    →
                  </span>
                </button>
              </div>
            </motion.a>
          </GlassCard>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
