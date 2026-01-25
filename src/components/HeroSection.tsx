import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Serene lotus flower on calm water at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6"
          >
            Transform Your Life in Just<br />
            <span className="text-gradient font-semibold">21 Minutes a Day</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto"
          >
            What If Letting Go Was Your Greatest Power?
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center gap-12 md:gap-20 mb-10 flex-wrap"
          >
            {[
              { number: "40", label: "Days" },
              { number: "21", label: "Minutes Daily" },
              { number: "∞", label: "Life-Changing" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-light text-gradient">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Date Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-block bg-card/80 backdrop-blur-md px-8 py-5 rounded-full border border-border/50 shadow-soft mb-8"
          >
            <p className="font-semibold text-foreground text-lg">Program Starts</p>
            <p className="text-muted-foreground">Monday, February 16th, 2026 | 6:00 AM - 6:21 AM IST</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Secure Your Spot Now
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
