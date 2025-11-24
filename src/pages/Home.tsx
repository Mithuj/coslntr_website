import { Zap, Brain, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { BackgroundPaths } from "@/components/BackgroundPaths";
import { GeminiSection } from "@/components/GeminiSection";
import DotCard from "@/components/DotCard";
import GlassCard from "@/components/GlassCard";
import logo from "@/assets/coslntr-logo.png";

const featuredServices = [
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
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <Hero
        eyebrow="POWERED BY COSINTR"
        title="From World Laws to Working intelligenceeeee"
        subtitle="Translating first principles into deployable systems."
        ctaLabel="Get Started"
        ctaHref="/services"
      />

      <div className="flex justify-center py-12">
        <img src={logo} alt="COSINTR" className="h-56 w-auto opacity-90 md:h-64" />
      </div>

      <BackgroundPaths title="Discover Excellence" />

      <section className="relative -mt-6 px-4 pt-10 pb-16 sm:px-6 lg:px-8">
        <span className="pointer-events-none absolute left-6 top-6 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />
        <span className="pointer-events-none absolute right-[30%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <motion.div
          className="container ml-0 mr-auto max-w-4xl space-y-6 text-left pl-32 sm:pl-44 lg:pl-56"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Empowering intelligence. Redefining Innovation.
          </motion.h2>
          <motion.p
            className="text-sm leading-relaxed text-neutral-200/85 sm:text-base"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Cosintr is a next-generation AI research and development company dedicated to transforming ideas into intelligent, scalable solutions. We leverage artificial intelligence, automation, and data science to accelerate digital transformation across industries.
          </motion.p>
          <motion.p
            className="text-sm leading-relaxed text-neutral-200/80 sm:text-base"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            To create a world where artificial intelligence amplifies human potential - driving innovation, efficiency, and trust in every decision. At Cosintr, we believe in ethical, transparent, and responsible AI that improves organizations and society as a whole.
          </motion.p>
        </motion.div>
      </section>

      <section className="relative -mt-10 px-4 pb-16 sm:px-6 lg:px-8">
        <span className="pointer-events-none absolute right-6 top-8 h-32 w-32 rounded-full bg-blue-400/15 blur-3xl" />
        <span className="pointer-events-none absolute left-[28%] bottom-0 h-36 w-36 rounded-full bg-purple-500/10 blur-3xl" />
        <motion.div
          className="container ml-auto mr-0 max-w-4xl space-y-6 text-right pr-32 sm:pr-44 lg:pr-56"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.h3
            className="text-sm uppercase tracking-[0.3em] text-neutral-300/80"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.55 }}
          >
            Our Commitment
          </motion.h3>
          <motion.h2
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.55 }}
          >
            AI With Purpose. Technology With Impact.
          </motion.h2>
          <motion.p
            className="text-sm leading-relaxed text-neutral-200/85 sm:text-base text-center sm:text-justify lg:text-right"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.55 }}
          >
            Transforming constraints into capabilities with embedded intelligence
          </motion.p>
        </motion.div>
      </section>

      <GeminiSection />

      <section className="relative bg-black py-14 -translate-y-40 md:-translate-y-56 lg:-translate-y-72">
        <div className="container mx-auto flex items-center justify-center px-4 text-center">
          <motion.span
            className="text-2xl font-semibold tracking-[0.4em] text-neutral-200/85 sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.7, once: false }}
          >
            Innovate. Collaborate. Accelerate.
          </motion.span>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="container relative z-10 mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">What We Deliver</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Highlighted AI Services</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Discover a snapshot of the core solutions our teams are building today. For the full suite of offerings, explore the dedicated services page and see how we can collaborate.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -12, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.65, delay: index * 0.12, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.35 }}
                className="relative h-full"
              >
                <GlassCard className="group relative h-full overflow-hidden border border-white/10 bg-white/5 p-8 text-white shadow-[0_30px_70px_rgba(12,20,46,0.4)] transition-all duration-500">
                  <span className="pointer-events-none absolute -top-24 right-0 h-40 w-40 rounded-full bg-white/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
                  <span className="pointer-events-none absolute -bottom-24 left-0 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="relative flex h-full flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-cyan-200 shadow-[0_20px_40px_rgba(45,212,191,0.35)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.12 + 0.15, ease: "easeOut" }}
                      >
                        <service.icon className="h-6 w-6" />
                      </motion.span>
                      <motion.h3
                        className="text-xl font-semibold leading-tight"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: index * 0.12 + 0.18, ease: "easeOut" }}
                      >
                        {service.title}
                      </motion.h3>
                    </div>
                    <motion.p
                      className="text-sm leading-relaxed text-neutral-200/90"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.12 + 0.24, ease: "easeOut" }}
                    >
                      {service.description}
                    </motion.p>
                    <motion.ul
                      className="space-y-3 text-xs text-neutral-200/85"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.25 }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.08,
                            delayChildren: index * 0.12 + 0.3,
                          },
                        },
                      }}
                    >
                      {service.features.map((feature) => (
                        <motion.li
                          key={feature}
                          className="flex items-start gap-2"
                          variants={{ hidden: { opacity: 0, x: -18 }, visible: { opacity: 1, x: 0 } }}
                        >
                          <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]" />
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white/35 hover:bg-white/20"
            >
              View All Services
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-20">
        <div className="container mx-auto flex max-w-5xl flex-col gap-10 px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Signal In The Noise
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Real-time momentum across our AI intelligence network
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              We analyze the global flow of research, innovation, and breakthroughs to uncover the signals that truly matter. Each metric below reflects the velocity of discovery and engagement across our core AI research platforms.
            </p>
          </div>
          <div className="flex w-full flex-col gap-10">
            <div className="flex w-full flex-col gap-3">
              <DotCard target={30} suffix="+" label="Projects" duration={2200} className="self-start" />
              <span className="pl-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Successfully completed Projects
              </span>
            </div>
            <div className="flex w-full flex-col items-center gap-3">
              <DotCard target={15} suffix="+" label="Professionals" duration={2600} className="self-center" />
              <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                PROFESSIONALS
              </span>
            </div>
            <div className="flex w-full flex-col items-end gap-3">
              <DotCard target={25} suffix="+" label="Customers" duration={2400} className="self-end" />
              <span className="pr-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                HAPPIEST WORLDWIDE CUSTOMERS.
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
