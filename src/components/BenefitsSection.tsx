import { motion } from "framer-motion";

const benefits = [
  {
    icon: "🕊️",
    title: "Release Control",
    description: "Break free from patterns of resistance that drain your energy and create unnecessary stress.",
  },
  {
    icon: "🌟",
    title: "Develop Trust",
    description: "Build unshakeable faith in life's unfolding, even when you can't see the path ahead.",
  },
  {
    icon: "💪",
    title: "Emotional Resilience",
    description: "Navigate challenges with grace, transforming obstacles into opportunities for growth.",
  },
  {
    icon: "☮️",
    title: "Inner Peace",
    description: "Experience profound calm and clarity that comes from aligning with life's natural flow.",
  },
  {
    icon: "🦋",
    title: "Authentic Self",
    description: "Connect deeply with who you truly are, free from fear and external expectations.",
  },
  {
    icon: "⚡",
    title: "Transform Fear",
    description: "Convert anxiety into calm, worry into presence, and fear into fearless living.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-secondary/40" id="benefits">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            What You'll Gain
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
