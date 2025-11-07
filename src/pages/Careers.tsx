import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { AnimatedText } from "@/components/ui/animated-text";
import { fadeUp, staggerFade, scaleUp } from "@/lib/motion";

interface Position {
  title: string;
  location: string;
  type: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
}

const positions: Position[] = [
  {
    title: "AI Software Engineer",
    location: "Remote / On-site",
    type: "Full-Time",
    about:
      "We’re seeking a highly skilled AI Software Engineer to design, train, and deploy intelligent systems that drive automation, analytics, and innovation across industries.",
    responsibilities: [
      "Design, train, and fine-tune deep learning models using TensorFlow, PyTorch, or Hugging Face Transformers",
      "Develop end-to-end AI pipelines for data ingestion, preprocessing, training, and deployment",
      "Implement MLOps workflows using tools such as Docker, Kubernetes, and MLflow",
      "Optimize inference on edge and cloud environments for real-time performance",
      "Collaborate on NLP, computer vision, and reinforcement learning initiatives",
      "Integrate AI modules into enterprise-grade applications using REST APIs and microservice architectures",
    ],
    requirements: [
      "Strong experience in Python, NumPy, Pandas, and scikit-learn",
      "Hands-on knowledge of deep learning frameworks (TensorFlow, PyTorch)",
      "Understanding of model optimization techniques like quantization, pruning, and ONNX conversion",
      "Familiarity with cloud platforms such as AWS, GCP, or Azure AI",
      "Experience with Git-based version control and CI/CD pipelines",
      "Problem-solving mindset with strong mathematics background and focus on scalability",
    ],
  },
  {
    title: "AI Research Intern",
    location: "Remote / On-site",
    type: "Internship",
    about:
      "Join our innovation-driven R&D division as an AI Research Intern and explore the frontier of artificial intelligence while contributing to production-focused research projects.",
    responsibilities: [
      "Assist in designing and training machine learning and deep learning models",
      "Conduct data preprocessing, augmentation, and feature extraction",
      "Explore state-of-the-art research papers and implement experimental architectures",
      "Evaluate models using metrics such as F1-score, IoU, BLEU, and others depending on the domain",
      "Work on GPU-accelerated training workflows and cloud-based experiments",
      "Collaborate on technical documentation, reproducibility, and benchmarking",
    ],
    requirements: [
      "Currently pursuing or completed a degree in Computer Science, AI, Data Science, or a related field",
      "Solid understanding of Python, Jupyter Notebooks, and PyTorch or TensorFlow",
      "Comfortable with Git and collaborative development workflows",
      "Basic understanding of transformer models, CNNs, and LSTM architectures",
      "Passion for learning and contributing to cutting-edge AI projects",
    ],
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative isolate overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <motion.div
          className="container relative z-10 mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <AnimatedText text="Careers" className="py-0" textClassName="!text-5xl md:!text-7xl" />
          </motion.div>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
            Join the COSINTR team and help us craft intelligent systems that power the world’s next generation of technology.
          </motion.p>
        </motion.div>
      </section>

      <section className="relative isolate overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-fuchsia-500/10 blur-3xl" />
        </div>

        <motion.div
          className="container relative z-10 mx-auto max-w-5xl space-y-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {positions.map((position, index) => (
            <motion.div key={position.title} variants={staggerFade} custom={index}>
              <GlassCard className="relative overflow-hidden border border-white/10 bg-white/5 p-8 sm:p-10 text-white shadow-[0_40px_80px_rgba(6,17,64,0.35)]">
                <span className="pointer-events-none absolute -top-32 -right-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
                <span className="pointer-events-none absolute -bottom-32 -left-10 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />

                <div className="relative flex flex-col gap-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {position.title}
                      </h2>
                      <p className="text-sm text-neutral-200/80 max-w-2xl">
                        {position.about}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-black">
                      <span className="rounded-full bg-white/80 px-3 py-1 font-semibold">
                        {position.location}
                      </span>
                      <span className="rounded-full bg-white/60 px-3 py-1 font-semibold">
                        {position.type}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
                    <motion.div variants={fadeUp} className="space-y-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
                        Key Responsibilities
                      </h3>
                      <ul className="space-y-3 text-sm text-neutral-100/90">
                        {position.responsibilities.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeUp} className="space-y-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-200/90">
                        Requirements
                      </h3>
                      <ul className="space-y-3 text-sm text-neutral-100/90">
                        {position.requirements.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(244,114,182,0.8)]" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <motion.div variants={fadeUp}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white/40 hover:bg-white/20"
                    >
                      Apply via Contact
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="container mx-auto"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <GlassCard className="p-10 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" variants={fadeUp}>
              Curious but don’t see the right role?
            </motion.h2>
            <motion.p className="text-muted-foreground mb-8 max-w-2xl mx-auto" variants={fadeUp}>
              We’re always looking for passionate builders, researchers, and designers who are excited about shaping intelligent systems. Drop us a line and let’s explore the possibilities together.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/80 px-7 py-3 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-black/70"
              >
                Start the Conversation
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </GlassCard>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
