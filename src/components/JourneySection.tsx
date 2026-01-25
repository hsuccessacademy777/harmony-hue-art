import { motion } from "framer-motion";
import { Sparkles, Brain, Heart, Users, Waves, Star } from "lucide-react";

const journeyPhases = [
  {
    icon: "🌱",
    title: "Days 1-7: Foundations of Surrender",
    description: "Discover what surrender truly means. Learn to embrace uncertainty, let go of resistance, and cultivate trust in life's unfolding.",
  },
  {
    icon: "🧠",
    title: "Days 8-14: Surrendering the Mind",
    description: "Release limiting beliefs, detach from negative thoughts, and befriend your inner critic. Transform mental patterns that hold you back.",
  },
  {
    icon: "💜",
    title: "Days 15-21: Surrendering Emotions",
    description: "Allow yourself to feel without fear. Navigate anger, grief, and fear with courage. Heal through radical acceptance.",
  },
  {
    icon: "🤝",
    title: "Days 22-28: Surrendering in Relationships",
    description: "Release the need to control others. Find freedom in vulnerability. Navigate conflict with trust and compassion.",
  },
  {
    icon: "🌊",
    title: "Days 29-35: Surrendering to Life's Flow",
    description: "Trust divine timing. Let go of perfectionism. Embrace transitions and find ease in daily living.",
  },
  {
    icon: "✨",
    title: "Days 36-40: Integration & Celebration",
    description: "Reflect on your journey. Set intentions for the future. Celebrate your transformation and embody the art of letting go.",
  },
];

const JourneySection = () => {
  return (
    <section className="py-24 bg-background" id="journey">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Your 40-Day Journey to Freedom
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[linear-gradient(135deg,hsl(280_60%_35%)_0%,hsl(320_70%_45%)_100%)] rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="space-y-8">
            {journeyPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-white/30 pl-6"
              >
                <h3 className="text-xl md:text-2xl font-light mb-2">
                  {phase.icon} {phase.title}
                </h3>
                <p className="text-white/90 text-base md:text-lg">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
