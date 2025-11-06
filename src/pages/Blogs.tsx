import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { AnimatedText } from "@/components/ui/animated-text";
import { useParallax } from "@/hooks/use-parallax";
import { fadeUp, fadeLeft, fadeRight, scaleUp, staggerFade } from "@/lib/motion";

const Blogs = () => {
  const blogs = [
    {
      title: "The Future of AI in Healthcare",
      excerpt: "Exploring how artificial intelligence is revolutionizing patient care, diagnostics, and medical research in 2024 and beyond.",
      author: "Dr. Priya Sharma",
      date: "March 15, 2024",
      category: "AI & Healthcare",
      readTime: "5 min read",
    },
    {
      title: "Building Scalable E-commerce Platforms",
      excerpt: "Best practices and architectural patterns for creating high-performance e-commerce solutions that can handle millions of users.",
      author: "Tech Team",
      date: "March 10, 2024",
      category: "Development",
      readTime: "7 min read",
    },
    {
      title: "Automation: The Key to Business Efficiency",
      excerpt: "How intelligent automation is helping businesses reduce costs, improve accuracy, and free up human resources for strategic work.",
      author: "Automation Experts",
      date: "March 5, 2024",
      category: "Business",
      readTime: "6 min read",
    },
    {
      title: "Machine Learning Models in Production",
      excerpt: "A comprehensive guide to deploying, monitoring, and maintaining machine learning models in real-world applications.",
      author: "AI Research Team",
      date: "February 28, 2024",
      category: "Machine Learning",
      readTime: "10 min read",
    },
    {
      title: "Tele-medicine: Bridging Healthcare Gaps",
      excerpt: "How tele-medical applications like Mednyxa are making healthcare accessible to remote areas and underserved communities.",
      author: "Healthcare Division",
      date: "February 20, 2024",
      category: "Healthcare",
      readTime: "5 min read",
    },
    {
      title: "The Rise of No-Code AI Solutions",
      excerpt: "Democratizing artificial intelligence with user-friendly tools that allow businesses to leverage AI without extensive technical knowledge.",
      author: "Product Team",
      date: "February 15, 2024",
      category: "AI Technology",
      readTime: "4 min read",
    },
  ];

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
          animate="visible"
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
                <motion.div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20" variants={fadeLeft} />
                <motion.div className="p-8 flex flex-col justify-center" variants={fadeRight}>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4 w-fit">
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
                    <span className="mr-4">Engineering Team</span>
                    <Calendar size={16} className="mr-2" />
                    <span>March 20, 2024</span>
                  </div>
                  <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                    Read More <ArrowRight size={16} className="ml-2" />
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
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {blogs.map((blog, index) => (
              <motion.div key={blog.title} variants={staggerFade} custom={index}>
                <GlassCard className="overflow-hidden flex flex-col h-full">
                  <motion.div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10" variants={fadeUp} />
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
                    <button className="inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                      Read Article <ArrowRight size={14} className="ml-2" />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
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
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
                Subscribe
              </button>
            </motion.div>
          </GlassCard>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
