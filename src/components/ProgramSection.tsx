import { motion } from "framer-motion";
import { Heart, Sun, Sparkles, Leaf, Moon, Star } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Release & Let Go",
    description: "Learn to release attachments and embrace the freedom that comes with surrender.",
  },
  {
    icon: Sun,
    title: "Morning Practice",
    description: "Start each day with a guided 21-minute practice that sets the tone for transformation.",
  },
  {
    icon: Sparkles,
    title: "Inner Clarity",
    description: "Gain profound clarity about your life's purpose and the path forward.",
  },
  {
    icon: Leaf,
    title: "Natural Flow",
    description: "Align with life's natural rhythm and discover effortless progress.",
  },
  {
    icon: Moon,
    title: "Deep Rest",
    description: "Experience peace that transcends circumstances and brings true rest.",
  },
  {
    icon: Star,
    title: "Lasting Change",
    description: "Build habits that create permanent transformation, not temporary fixes.",
  },
];

const ProgramSection = () => {
  return (
    <section className="py-24 bg-secondary/40" id="program">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            What You'll Experience
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            The Six Pillars of Surrender
          </h2>
          <p className="text-muted-foreground text-lg">
            Each day of the 40-day journey touches upon these essential aspects, 
            weaving them together into a complete transformation experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-[linear-gradient(135deg,hsl(280_60%_40%/0.15)_0%,hsl(320_70%_50%/0.15)_100%)] flex items-center justify-center mb-6 group-hover:bg-[linear-gradient(135deg,hsl(280_60%_40%/0.25)_0%,hsl(320_70%_50%/0.25)_100%)] transition-colors duration-300">
                  <pillar.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
