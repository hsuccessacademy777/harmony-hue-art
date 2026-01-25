import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
            Begin Your Transformation Today
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-10 leading-relaxed">
            Join thousands who have discovered the profound peace that comes 
            from the art of surrender. Your 40-day journey awaits.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button variant="golden" size="xl" className="group">
              Start Your 40-Day Journey
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <p className="text-primary-foreground/60 text-sm mt-6">
            No prior experience required • Guided daily practice • Lifetime access
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
