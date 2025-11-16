import { CloudCog, Layers, LifeBuoy, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { PinContainer } from "@/components/ui/pin-container";
import { useParallax } from "@/hooks/use-parallax";
import { fadeUp, staggerFade } from "@/lib/motion";

const MoreServices = () => {
  const expandedServices = [
    {
      icon: ShieldCheck,
      title: "AI-Based Medical Solutions",
      description:
        "Reinvent healthcare with intelligent AI technologies that analyze, predict, and support medical decision-making. We build advanced systems that improve diagnosis accuracy, streamline hospital operations, and enhance patient outcomes.",
      features: [
        "Clinical Decision Support",
        "Automated Medical Reporting",
        "AI-Powered Diagnosis Assistance",
        "Patient Monitoring & Alerts",
      ],
    },
    {
      icon: CloudCog,
      title: "Edge AI with IoT Solutions",
      description:
        "Empower your devices with real-time intelligence through Edge AI and IoT. Our solutions bring powerful analytics to the edge, enabling faster decisions, reduced latency, and seamless connectivity across smart environments.",
      features: [
        "Real-Time Edge Analytics",
        "Smart Sensor Integration",
        "IoT Device Automation",
        "Low-Latency Decision Systems",
      ],
    },
    {
      icon: Layers,
      title: "AR & VR Solutions",
      description:
        "Transform digital experiences with immersive AR and VR technologies that merge the physical and virtual worlds. We design interactive systems that enhance training, visualization, and customer engagement.",
      features: [
        "Immersive Training Simulations",
        "AR-Based Product Visualization",
        "Virtual Collaboration Spaces",
        "3D Interactive Experiences",
      ],
    },
    {
      icon: LifeBuoy,
      title: "E-Commerce AI Solutions",
      description:
        "Boost your e-commerce performance with intelligent AI tools that personalize shopping, optimize conversions, and streamline operations. We create systems that enhance customer experience and drive business growth.",
      features: [
        "Personalized Product Recommendations",
        "AI-Driven Sales Optimization",
        "Smart Inventory Management",
        "Automated Customer Support",
      ],
    },
  ];

  const servicesParallax = useParallax({ distance: 150 });

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
            <AnimatedText
              text="More Services"
              className="py-0"
              textClassName="!text-5xl md:!text-7xl"
            />
          </motion.div>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
            Dive deeper into our extended capabilities designed to support complex transformation journeys.
          </motion.p>
        </motion.div>
      </section>

      <section ref={servicesParallax.ref} className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="container mx-auto"
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
            {expandedServices.map((service, index) => (
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
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default MoreServices;
