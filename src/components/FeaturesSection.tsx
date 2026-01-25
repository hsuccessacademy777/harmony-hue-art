import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    title: "Daily Live Zoom Sessions",
    description: "21 minutes of guided meditation and practical exercises",
  },
  {
    title: "Expert Guidance",
    description: "Led by Ravinder Singh, Holistic Success Coach",
  },
  {
    title: "WhatsApp Support",
    description: "Daily instructions, reminders, and guidance",
  },
  {
    title: "Peer Support Groups",
    description: "Connect with fellow participants for shared growth",
  },
  {
    title: "Accountability Partners",
    description: "Stay consistent with dedicated partner support",
  },
  {
    title: "Certificate of Completion",
    description: "Recognize your 40-day transformation journey",
  },
  {
    title: "Post-Course Resources",
    description: "Continued guidance to sustain your practice",
  },
  {
    title: "No Experience Needed",
    description: "Just an open heart and willingness to grow",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/50" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            What Makes This Different?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft border border-border/30"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[linear-gradient(135deg,hsl(280_60%_40%/0.15)_0%,hsl(320_70%_50%/0.15)_100%)] flex items-center justify-center">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
