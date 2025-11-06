import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { BackgroundPaths } from "@/components/BackgroundPaths";
import { GeminiSection } from "@/components/GeminiSection";
import DotCard from "@/components/DotCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <Hero
        eyebrow="POWERED BY COSLNTR"
        title="From World Laws to Working Intelligence"
        subtitle="Translating first principles into deployable systems."
        ctaLabel="Get Started"
        ctaHref="/contact"
      />

      <BackgroundPaths title="Discover Excellence" />

      <GeminiSection />

      <section className="bg-black py-16 md:py-20">
        <div className="container mx-auto flex max-w-5xl flex-col gap-10 px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Signal In The Noise
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Real-time momentum across our legal intelligence network
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              We track the pulse of global jurisprudence to surface the signals that matter. Each metric below reflects the velocity of engagement across our core services.
            </p>
          </div>
          <div className="flex w-full flex-col gap-10">
            <div className="flex w-full flex-col gap-3">
              <DotCard target={777000} duration={2200} className="self-start" />
              <span className="pl-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Knowledge Base Views
              </span>
            </div>
            <div className="flex w-full flex-col items-center gap-3">
              <DotCard target={1250000} duration={2600} className="self-center" />
              <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Live Compliance Audits
              </span>
            </div>
            <div className="flex w-full flex-col items-end gap-3">
              <DotCard target={980000} duration={2400} className="self-end" />
              <span className="pr-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Predictive Case Runs
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
