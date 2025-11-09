import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { AnimatedText } from "@/components/ui/animated-text";
import { useParallax } from "@/hooks/use-parallax";
import { fadeUp, fadeLeft, fadeRight, scaleUp, staggerFade } from "@/lib/motion";

const Blogs = () => {
  const blogs = [];

  const featuredParallax = useParallax({ distance: 150 });
  const gridParallax = useParallax({ distance: 140 });
  const newsletterParallax = useParallax({ distance: 120 });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <motion.div
          className="container relative z-10 mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={fadeUp}>
            <AnimatedText
              text="Our Blogs"
              className="py-0"
              textClassName="!text-5xl md:!text-7xl"
            />
          </motion.div>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
            Insights, stories, and expertise from our team of technology professionals
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section ref={featuredParallax.ref} className="relative isolate overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <svg
            className="absolute inset-0 h-full w-full text-sky-200/55 rotate-2"
            viewBox="-1040 -340 2680 1420"
            fill="none"
          >
            {Array.from({ length: 18 }).map((_, idx) => {
              const offset = idx * 120;
              const baseY = -240 + idx * 85;
              const amplitude = 80 + idx * 6;
              const startX = -980 - offset;
              const d = `M${startX} ${baseY} C${startX + 320} ${baseY - amplitude}, ${startX + 660} ${baseY + amplitude}, ${startX + 1000} ${baseY} C${startX + 1340} ${baseY - amplitude}, ${startX + 1680} ${baseY + amplitude}, ${startX + 2020} ${baseY}`;
              return (
                <motion.path
                  key={`blogs-featured-primary-${idx}`}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={0.88 + idx * 0.045}
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
            className="absolute inset-0 h-full w-full text-cyan-300/45 -rotate-5 scale-[1.07]"
            viewBox="-1080 -360 2760 1460"
            fill="none"
          >
            {Array.from({ length: 15 }).map((_, idx) => {
              const offset = idx * 150;
              const baseY = -280 + idx * 95;
              const amplitude = 104 + idx * 7;
              const startX = -1020 + offset;
              const d = `M${startX} ${baseY} C${startX + 360} ${baseY + amplitude}, ${startX + 760} ${baseY - amplitude}, ${startX + 1160} ${baseY} C${startX + 1560} ${baseY + amplitude}, ${startX + 1960} ${baseY - amplitude}, ${startX + 2360} ${baseY}`;
              return (
                <motion.path
                  key={`blogs-featured-secondary-${idx}`}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={0.72 + idx * 0.045}
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 16px rgba(34,211,238,0.32))" }}
                  initial={{ pathLength: 0.08, opacity: 0.2 }}
                  animate={{ pathLength: [0.08, 1], pathOffset: [0.18, 0.88], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 24 + idx, repeat: Infinity, ease: "linear" }}
                />
              );
            })}
          </svg>
        </div>
        <motion.div
          className="container relative z-10 mx-auto"
          style={{ y: featuredParallax.y }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div variants={scaleUp}>
            <GlassCard className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div className="aspect-video bg-gradient-to-br from-white/25 via-white/15 to-white/5" variants={fadeLeft} />
                <motion.div className="p-8 flex flex-col justify-center" variants={fadeRight}>
                  <div className="inline-block px-3 py-1 bg-white/15 text-white text-xs font-medium rounded-full mb-4 w-fit">
                    Featured Post
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    How AI is Transforming Software Development
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Discover how artificial intelligence and machine learning are revolutionizing the way we build software, from code generation to automated testing and deployment.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User size={16} className="mr-2" />
                    <span className="mr-4">cosIntr Team</span>
                    <Calendar size={16} className="mr-2" />
                    <span>November 25, 2025</span>
                  </div>
                  <button className="inline-flex items-center text-white font-medium hover:text-white/80 transition-colors">
                    Coming soon <ArrowRight size={16} className="ml-2" />
                  </button>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section ref={gridParallax.ref} className="py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="container mx-auto"
          style={{ y: gridParallax.y }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {blogs.length > 0 ? (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {blogs.map((blog, index) => (
                <motion.div key={blog.title} variants={staggerFade} custom={index}>
                  <GlassCard className="overflow-hidden flex flex-col h-full">
                    <motion.div className="aspect-video bg-gradient-to-br from-white/20 via-white/12 to-white/5" variants={fadeUp} />
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="inline-block px-3 py-1 bg-muted text-foreground text-xs font-medium rounded-full mb-3 w-fit">
                        {blog.category}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{blog.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{blog.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{blog.author}</span>
                        </div>
                        <span>{blog.readTime}</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mb-4">
                        <Calendar size={14} className="mr-1" />
                        <span>{blog.date}</span>
                      </div>
                      <button className="inline-flex items-center text-white font-medium text-sm hover:text-white/80 transition-colors">
                        Read Article <ArrowRight size={14} className="ml-2" />
                      </button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-muted-foreground backdrop-blur"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              Stay tuned—new articles are on the way.
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section ref={newsletterParallax.ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <motion.div
          className="container mx-auto"
          style={{ y: newsletterParallax.y }}
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <GlassCard className="p-12 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" variants={fadeUp}>
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p className="text-muted-foreground mb-8 max-w-2xl mx-auto" variants={fadeUp}>
              Get the latest insights, updates, and articles delivered directly to your inbox
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              variants={fadeUp}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="group relative inline-flex overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl">
                <button className="flex items-center gap-3 rounded-[1.15rem] border border-white/10 bg-black/80 px-8 py-3 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-black/70 hover:shadow-md group-hover:-translate-y-0.5 group-hover:shadow-lg">
                  <span className="opacity-90 transition-opacity group-hover:opacity-100">Subscribe</span>
                  <span className="opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          </GlassCard>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
