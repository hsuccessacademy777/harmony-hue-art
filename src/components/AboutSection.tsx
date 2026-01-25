import { motion } from "framer-motion";
import ravinderSingh from "@/assets/ravinder-singh.png";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src={ravinderSingh}
                  alt="Ravinder Singh - Spiritual Guide"
                  className="w-full max-w-md mx-auto object-cover bg-gradient-to-b from-card to-secondary"
                />
              </div>
              {/* Decorative Elements - purple theme */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[hsl(320_70%_50%/0.25)] rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[hsl(280_60%_40%/0.15)] rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Your Guide
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Meet Ravinder Singh
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                With decades of experience in spiritual practices and personal transformation, 
                Ravinder Singh has guided thousands on their journey toward inner peace and 
                self-discovery.
              </p>
              <p>
                His unique approach combines ancient wisdom with modern understanding, 
                making profound spiritual concepts accessible to everyone, regardless of 
                their background or experience.
              </p>
              <p>
                The 40-Day Art of Surrender program distills his lifetime of learning into 
                a practical, daily practice that takes just 21 minutes but creates 
                lasting transformation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { number: "40", label: "Days" },
                { number: "21", label: "Minutes Daily" },
                { number: "∞", label: "Transformation" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="font-heading text-4xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
