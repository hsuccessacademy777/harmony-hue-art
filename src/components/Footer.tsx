import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            The Art of Surrender
          </h3>
          <p className="text-muted-foreground mb-6">
            Transform Your Life in 21 Minutes a Day
          </p>
          
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { label: "Testimonials", href: "#testimonials" },
              { label: "Journey", href: "#journey" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-border/50 pt-8">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by Ravinder Singh
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
