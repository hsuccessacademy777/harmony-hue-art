import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background - Deep purple/pink gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(220_20%_12%)_0%,hsl(240_15%_18%)_100%)]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(320_70%_50%)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[hsl(280_60%_45%)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-white mb-6">
            Your Transformation Begins February 16th
          </h2>
          <p className="text-white/80 text-xl mb-4">
            Spaces are intentionally limited to maintain the intimacy and power of this experience.
          </p>
          <p className="text-white text-2xl font-semibold mb-10">
            Are you ready to let go and let it happen?
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
          >
            <a
              href="https://wa.me/919821507855?text=I'm%20interested%20in%20the%2040-Day%20Art%20of%20Surrender%20Course"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 text-lg font-semibold rounded-full bg-[linear-gradient(135deg,#25D366_0%,#128C7E_100%)] text-white shadow-elevated hover:shadow-[0_0_40px_-10px_rgba(37,211,102,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: +91-9821507855
            </a>
            <a
              href="mailto:hsuccessacademy@gmail.com?subject=Art%20of%20Surrender%20Inquiry"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 text-lg font-semibold rounded-full bg-[linear-gradient(135deg,hsl(280_60%_40%)_0%,hsl(320_70%_50%)_100%)] text-white shadow-elevated hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg italic mt-12"
          >
            "Aik shanti thi. Aik shanti hai." (There was peace. There is peace.) — Abhinav Mathur
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
