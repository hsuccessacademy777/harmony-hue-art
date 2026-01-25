import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This program changed my relationship with stress forever. The daily practice became the anchor I didn't know I needed.",
    author: "Priya M.",
    role: "Business Executive",
  },
  {
    quote: "21 minutes seemed too simple, but the depth of transformation I've experienced is remarkable. I'm more peaceful now than I've ever been.",
    author: "Michael R.",
    role: "Teacher",
  },
  {
    quote: "Ravinder's guidance is gentle yet profound. The 40 days flew by, and I emerged a different person – more present, more content.",
    author: "Sarah K.",
    role: "Healthcare Professional",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Transformations
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            Stories of Surrender
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="h-full p-8 rounded-2xl card-gradient shadow-soft border border-border/30">
                <Quote className="w-10 h-10 text-accent/40 mb-6" />
                <p className="text-foreground text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/50 pt-6">
                  <p className="font-heading text-xl font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
