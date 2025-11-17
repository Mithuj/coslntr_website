import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { EvervaultCard } from "@/components/EvervaultCard";
import { fadeUp } from "@/lib/motion";

type ProjectItem = {
  name: string;
  href: string;
  description?: string;
  highlight?: boolean;
  animation?: "pulse" | "float" | "glow";
};

type CategoryItem = {
  name: string;
  projects: ProjectItem[];
};

const Projects = () => {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  const categories = useMemo(
    (): CategoryItem[] => [
      {
        name: "Industrial Products",
        projects: [
          {
            name: "Mednyxa",
            href: "/projects/mednyxa",
            description:
              "Mednyxa is a global telemedicine platform that connects patients with trusted doctors online through a fast and easy-to-use system. Our goal is to make healthcare more accessible for everyone by providing secure consultations, health guidance, and ongoing support anytime, anywhere. Mednyxa focuses on delivering quality care, smooth communication between patients and doctors, and a reliable digital healthcare experience through both mobile and web platforms.",
            highlight: true,
            animation: "pulse",
          },
          {
            name: "OptiLens",
            href: "/projects/optilens",
            description:
              "Optilens is an automated product optimization tool for e-commerce sellers that identifies low-performing ASINs and analyzes top competitors to understand what drives high-ranking listings. It reviews titles, descriptions, images, and keywords from the top 20 products, then delivers clear, actionable recommendations to improve visibility, clicks, and conversions. With weekly or biweekly optimization cycles, Optilens keeps your listings updated and competitive in the fast-changing marketplace.",
            highlight: true,
            animation: "float",
          },
        ],
      },
      {
        name: "Research Solutions",
        projects: [
          {
            name: "Biomedical Imaging for Edge",
            href: "/projects/biomedical-imaging",
            highlight: true,
            animation: "pulse",
            description:
              "Recent advances in deep learning have greatly improved segmentation accuracy in medical imaging tasks such as tissue classification, lesion detection, and boundary extraction. However, these methods are still computationally intensive, especially for resource-limited or portable diagnostic systems. Medical datasets are volumetric and typically represented as dense 3D voxel grids, requiring full-volume processing to maintain spatial continuity. This structure introduces redundancy, as large homogeneous regions without diagnostic value still consume memory and computation. As a result, voxel-based representations increase memory usage, data transfer, and FLOPs, limiting real-time performance and energy efficiency on embedded or edge devices—challenges that are critical in low-resource healthcare settings.",
          },
        ],
      },
    ],
    [],
  );

  const detailContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  } as const;

  const detailCardVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  } as const;

  const toggleCategory = (name: string) => {
    setActiveCategories((prev) => {
      const isActive = prev.includes(name);
      if (isActive) {
        return prev.filter((category) => category !== name);
      }
      return [...prev, name];
    });
  };

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
              text="Our Projects"
              className="py-0"
              textClassName="!text-5xl md:!text-7xl"
            />
          </motion.div>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
            Explore our portfolio of innovative solutions that have transformed businesses across industries
          </motion.p>
        </motion.div>
      </section>

      <section className="relative isolate overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <svg
            className="absolute inset-0 h-full w-full text-violet-200/55 rotate-3"
            viewBox="-1120 -360 2800 1480"
            fill="none"
          >
            {Array.from({ length: 18 }).map((_, idx) => {
              const offset = idx * 140;
              const baseY = -280 + idx * 100;
              const amplitude = 95 + idx * 7;
              const startX = -1060 - offset;
              const d = `M${startX} ${baseY} C${startX + 360} ${baseY - amplitude}, ${startX + 760} ${baseY + amplitude}, ${startX + 1160} ${baseY} C${startX + 1560} ${baseY - amplitude}, ${startX + 1960} ${baseY + amplitude}, ${startX + 2360} ${baseY}`;
              return (
                <motion.path
                  key={`projects-grid-primary-${idx}`}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={0.92 + idx * 0.05}
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 20px rgba(167,139,250,0.4))" }}
                  initial={{ pathLength: 0.12, opacity: 0.26 }}
                  animate={{ pathLength: [0.12, 1], pathOffset: [0.1, 0.9], opacity: [0.26, 0.64, 0.26] }}
                  transition={{ duration: 19 + idx * 0.9, repeat: Infinity, ease: "linear" }}
                />
              );
            })}
          </svg>
          <svg
            className="absolute inset-0 h-full w-full text-fuchsia-300/45 -rotate-4 scale-[1.06]"
            viewBox="-1160 -380 2880 1520"
            fill="none"
          >
            {Array.from({ length: 15 }).map((_, idx) => {
              const offset = idx * 170;
              const baseY = -320 + idx * 105;
              const amplitude = 120 + idx * 8;
              const startX = -1100 + offset;
              const d = `M${startX} ${baseY} C${startX + 400} ${baseY + amplitude}, ${startX + 840} ${baseY - amplitude}, ${startX + 1280} ${baseY} C${startX + 1720} ${baseY + amplitude}, ${startX + 2160} ${baseY - amplitude}, ${startX + 2600} ${baseY}`;
              return (
                <motion.path
                  key={`projects-grid-secondary-${idx}`}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={0.78 + idx * 0.05}
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 18px rgba(244,114,182,0.35))" }}
                  initial={{ pathLength: 0.1, opacity: 0.22 }}
                  animate={{ pathLength: [0.1, 1], pathOffset: [0.18, 0.88], opacity: [0.22, 0.52, 0.22] }}
                  transition={{ duration: 23 + idx, repeat: Infinity, ease: "linear" }}
                />
              );
            })}
          </svg>
        </div>
        <motion.div
          className="container relative z-10 mx-auto max-w-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="grid gap-10 md:grid-cols-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {categories.flatMap((category, index) => {
                const highlightClass = index % 2 === 0 ? "edge-highlight-left-top" : "edge-highlight-right-bottom";
                const isActive = activeCategories.includes(category.name);
                const hasProjects = category.projects.length > 0;
                const hasExpandedAbove =
                  index > 0 &&
                  categories.slice(0, index).some((previousCategory) =>
                    activeCategories.includes(previousCategory.name) && previousCategory.projects.length > 0,
                  );

                const items: JSX.Element[] = [];

                if (hasExpandedAbove) {
                  items.push(
                    <motion.div
                      key={`divider-${category.name}`}
                      layout
                      className="col-span-1 my-4 h-[2px] w-full bg-white/35 md:col-span-2"
                    />,
                  );
                }

                items.push(
                  <motion.div
                    key={`category-${category.name}`}
                    layout
                    variants={fadeUp}
                    custom={index}
                    className={`relative aspect-square ${highlightClass}`}
                  >
                    <EvervaultCard
                      text={category.name}
                      onButtonClick={() => toggleCategory(category.name)}
                      buttonLabel={isActive ? "Hide Projects" : "View Projects"}
                      showPatternText={false}
                      className="h-full"
                    />
                  </motion.div>,
                );

                if (isActive && hasProjects) {
                  items.push(
                    <motion.div
                      key={`projects-${category.name}`}
                      layout
                      variants={detailContainerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="relative flex w-full flex-col gap-8"
                    >
                      {category.projects.map((project) => {
                        const hasDescription = Boolean(project.description);
                        const hasHighlight = Boolean(project.highlight);

                        const containerClasses = hasDescription
                          ? "relative w-full max-w-xl pb-[28rem]"
                          : "w-full max-w-sm";

                        const actionProps = hasDescription
                          ? { description: project.description, allowOverflow: true }
                          : {
                              buttonHref: project.href,
                              buttonLabel: "View Project",
                              buttonClassName: "border-white/30 bg-white/75 text-black hover:bg-white/85",
                            };

                        return (
                          <motion.div key={project.name} variants={detailCardVariants} className={containerClasses}>
                            <EvervaultCard
                              text={project.name}
                              gradientClassName="bg-gradient-to-r from-white/80 via-white/45 to-white/20"
                              className="h-full"
                              highlightText={hasHighlight}
                              animatedText={project.animation ?? false}
                              showPatternText={false}
                              {...actionProps}
                            />
                          </motion.div>
                        );
                      })}
                    </motion.div>,
                  );
                }

                return items;
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
