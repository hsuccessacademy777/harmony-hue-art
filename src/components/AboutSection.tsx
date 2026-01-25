import { motion } from "framer-motion";
import ravinderSingh from "@/assets/ravinder-singh.png";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Your Expert Guide
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center card-gradient p-10 md:p-14 rounded-3xl shadow-elevated border border-border/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[hsl(320_70%_50%/0.1)] rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[hsl(280_60%_40%/0.1)] rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                <img
                  src={ravinderSingh}
                  alt="Ravinder Singh - Holistic Success Coach"
                  className="w-full h-full object-cover bg-gradient-to-b from-card to-secondary"
                />
              </div>
              
              <h3 className="font-heading text-3xl font-normal text-foreground mb-2">
                Ravinder Singh
              </h3>
              <p className="text-xl text-accent font-medium mb-6">
                Holistic Success Coach & Healer with 20+ Years Experience
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                With profound wisdom in mindfulness and personal transformation, Ravinder creates 
                a safe, nurturing space for deep inner work. His compassionate guidance and proven 
                techniques have helped countless individuals discover peace, freedom, and authentic 
                connection with themselves.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16"
        >
          <div className="card-gradient p-10 rounded-3xl border-l-4 border-l-primary shadow-soft text-center">
            <blockquote className="font-heading text-2xl md:text-3xl font-light text-foreground italic mb-4">
              "Emotions are not a hindering block to surrender. They are actually a gateway to surrender."
            </blockquote>
            <p className="text-accent font-medium">— Ravinder Singh</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
