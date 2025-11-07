import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useParallax } from "@/hooks/use-parallax";
import { fadeUp, fadeLeft, fadeRight, scaleUp, staggerFade } from "@/lib/motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = formData.subject.trim() || "New enquiry from COSINTR website";
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ];
  const mailtoHref = `mailto:hello@cosintr.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoHref;

    toast({
      title: "Opening your email client…",
      description: "Review the draft message to send it to hello@cosintr.com.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const infoParallax = useParallax({ distance: 150 });
  const formParallax = useParallax({ distance: 160 });

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
              text="Get in Touch"
              className="py-0"
              textClassName="!text-5xl md:!text-7xl"
            />
          </motion.div>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
            Have a project in mind? Let's discuss how we can help you achieve your goals
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative isolate overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <svg
            className="absolute inset-0 h-full w-full text-emerald-200/55 rotate-1"
            viewBox="-1080 -360 2800 1480"
            fill="none"
          >
            {Array.from({ length: 19 }).map((_, idx) => {
              const offset = idx * 130;
              const baseY = -260 + idx * 92;
              const amplitude = 90 + idx * 6;
              const startX = -1020 - offset;
              const d = `M${startX} ${baseY} C${startX + 340} ${baseY - amplitude}, ${startX + 700} ${baseY + amplitude}, ${startX + 1060} ${baseY} C${startX + 1420} ${baseY - amplitude}, ${startX + 1780} ${baseY + amplitude}, ${startX + 2140} ${baseY}`;
              return (
                <motion.path
                  key={`contact-grid-primary-${idx}`}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={0.88 + idx * 0.045}
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 18px rgba(16,185,129,0.35))" }}
                  initial={{ pathLength: 0.12, opacity: 0.26 }}
                  animate={{ pathLength: [0.12, 1], pathOffset: [0.08, 0.92], opacity: [0.26, 0.6, 0.26] }}
                  transition={{ duration: 20 + idx * 0.9, repeat: Infinity, ease: "linear" }}
                />
              );
            })}
          </svg>
          <svg
            className="absolute inset-0 h-full w-full text-teal-300/45 -rotate-5 scale-[1.07]"
            viewBox="-1120 -380 2880 1520"
            fill="none"
          >
            {Array.from({ length: 15 }).map((_, idx) => {
              const offset = idx * 160;
              const baseY = -300 + idx * 102;
              const amplitude = 116 + idx * 7;
              const startX = -1060 + offset;
              const d = `M${startX} ${baseY} C${startX + 380} ${baseY + amplitude}, ${startX + 820} ${baseY - amplitude}, ${startX + 1260} ${baseY} C${startX + 1700} ${baseY + amplitude}, ${startX + 2140} ${baseY - amplitude}, ${startX + 2580} ${baseY}`;
              return (
                <motion.path
                  key={`contact-grid-secondary-${idx}`}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={0.74 + idx * 0.05}
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 16px rgba(20,184,166,0.3))" }}
                  initial={{ pathLength: 0.1, opacity: 0.22 }}
                  animate={{ pathLength: [0.1, 1], pathOffset: [0.18, 0.9], opacity: [0.22, 0.52, 0.22] }}
                  transition={{ duration: 24 + idx, repeat: Infinity, ease: "linear" }}
                />
              );
            })}
          </svg>
        </div>
        <div className="container relative z-10 mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              ref={infoParallax.ref}
              style={{ y: infoParallax.y }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  copy: "Send us an email and we'll respond within 24 hours",
                  link: "mailto:hello@cosintr.com",
                  label: "hello@cosintr.com",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  copy: "Available Monday to Friday, 9 AM - 6 PM",
                  link: "tel:+94771234567",
                  label: "+94 77 677 6875",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  copy: "Come say hello at our office",
                  label: "Colombo 6, Srilanka",
                },
              ].map((card, index) => (
                <motion.div key={card.title} variants={staggerFade} custom={index}>
                  <GlassCard className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4">
                      <card.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{card.copy}</p>
                    {card.link ? (
                      <a href={card.link} className="text-white hover:text-white/80 font-medium">
                        {card.label}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{card.label}</p>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              ref={formParallax.ref}
              style={{ y: formParallax.y }}
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <GlassCard className="p-8">
                <motion.h2 className="text-2xl font-bold text-foreground mb-6" variants={fadeUp}>
                  Send us a Message
                </motion.h2>
                <motion.form onSubmit={handleSubmit} className="space-y-6" variants={fadeUp}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={fadeLeft}>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-white/70"
                        placeholder="Mithun J"
                      />
                    </motion.div>
                    <motion.div variants={fadeRight}>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-white/70"
                        placeholder="mithu@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeLeft}>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-white/70"
                      placeholder="How can we help?"
                    />
                  </motion.div>

                  <motion.div variants={fadeRight}>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-white/70 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </motion.div>

                  <motion.div variants={fadeUp} className="flex justify-center">
                    <div className="group relative inline-flex w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl">
                      <Button
                        type="submit"
                        size="lg"
                        variant="ghost"
                        className="flex w-full items-center justify-center rounded-[1.15rem] border border-white/10 px-8 py-6 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:shadow-md group-hover:-translate-y-0.5 group-hover:shadow-lg bg-black/80 hover:bg-black/70 focus-visible:ring-white/50"
                      >
                        <span className="opacity-90 transition-opacity group-hover:opacity-100">Send Message</span>
                        <span className="ml-3 flex items-center gap-1 opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                          <Send className="h-5 w-5" />
                        </span>
                      </Button>
                    </div>
                  </motion.div>
                </motion.form>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
