import { motion } from "framer-motion";

const targetAudience = [
  "You feel exhausted from trying to control everything",
  "You experience chronic stress, anxiety, or worry",
  "You struggle with perfectionism or fear of uncertainty",
  "You want to heal emotional wounds from the past",
  "You seek deeper meaning and spiritual connection",
  "You desire genuine peace and emotional freedom",
];

const WhoIsThisForSection = () => {
  return (
    <section className="py-24 bg-secondary/40" id="who">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Who This Is For
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {targetAudience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-card rounded-xl shadow-soft border border-border/30"
            >
              <p className="text-foreground">
                <span className="text-accent mr-2">✨</span>
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
