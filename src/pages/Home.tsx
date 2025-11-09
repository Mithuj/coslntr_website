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
        title="From World Laws to Working Intelligence"
        subtitle="Translating first principles into deployable systems."
        ctaLabel="Get Started"
        ctaHref="/contact"
      />

      <div className="flex justify-center py-12">
        <img src={logo} alt="COSINTR" className="h-56 w-auto opacity-90 md:h-64" />
      </div>

      <BackgroundPaths title="Discover Excellence" />

      <section className="relative -mt-6 px-4 pt-10 pb-16 sm:px-6 lg:px-8">
  <div className="container ml-0 mr-auto max-w-4xl space-y-6 text-left pl-32 sm:pl-44 lg:pl-56">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Empowering Intelligence. Redefining Innovation.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-200/85 sm:text-base">
            Cosintr is a next-generation AI research and development company dedicated to transforming ideas into intelligent, scalable solutions. We leverage artificial intelligence, automation, and data science to accelerate digital transformation across industries.
          </p>
          <p className="text-sm leading-relaxed text-neutral-200/80 sm:text-base">
            To create a world where artificial intelligence amplifies human potential - driving innovation, efficiency, and trust in every decision. At Cosintr, we believe in ethical, transparent, and responsible AI that improves organizations and society as a whole.
          </p>
        </div>
      </section>

      <section className="relative -mt-10 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="container ml-auto mr-0 max-w-4xl space-y-6 text-right pr-32 sm:pr-44 lg:pr-56">
          <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-300/80">Our Commitment</h3>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            AI With Purpose. Technology With Impact.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-200/85 sm:text-base text-center sm:text-justify lg:text-right">
            Cosintr is more than a technology company — we are an innovation partner. Our mission is to create measurable impact through intelligent automation, enabling businesses to focus on creativity, growth, and strategic excellence.
          </p>
        </div>
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
            nnovate. Collaborate. Accelerate.
          </motion.span>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute -top-20 right-1/4 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <span className="absolute -bottom-16 left-1/5 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">What We Deliver</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Highlighted AI Services</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Discover a snapshot of the core solutions our teams are building today. For the full suite of offerings, explore the dedicated services page and see how we can collaborate.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredServices.map((service) => (
              <GlassCard key={service.title} className="relative h-full overflow-hidden border border-white/10 bg-white/5 p-8 text-white shadow-[0_30px_70px_rgba(12,20,46,0.4)]">
                <span className="pointer-events-none absolute -top-24 right-0 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
                <span className="pointer-events-none absolute -bottom-24 left-0 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="relative flex h-full flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <service.icon className="h-10 w-10 text-cyan-300" />
                    <h3 className="text-xl font-semibold leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-200/90 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 text-xs text-neutral-200/85">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
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
