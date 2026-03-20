import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I'm climbing the <strong>Mount Everest of my inner self</strong>... The control is in my hand. I'm not dependent on others for my happiness, for my peace.",
    author: "Abhinav Mathur",
  },
  {
    quote: "I feel <strong>less anxiety, less worry</strong>... your mind is more calmer. I feel <strong>calm</strong>... Everything is in place, everything is sorted.",
    author: "Priyanka Uppal",
  },
  {
    quote: "In the last 30 days, through your guidance, I immediately went into surrender... I found <strong>peace</strong>.",
    author: "Sangeeta Subhash",
  },
  {
    quote: "I realized it's <strong>very easier to process emotions</strong> now... I was <strong>calmer</strong> compared to what I was.",
    author: "Kalpita",
  },
  {
    quote: "<strong>Resistance has decreased</strong>... I was allowing emotions, and then I could just be at peace after 30 seconds or one minute.",
    author: "Monika Jain",
  },
  {
    quote: "A sense of <strong>patience has started coming</strong> now... I'm becoming more conscious in each and every moment.",
    author: "Pretty Manish",
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
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Real People. Real Transformations.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="h-full p-8 rounded-2xl card-gradient shadow-soft border-l-4 border-l-primary border border-border/30">
                <Quote className="w-8 h-8 text-accent/40 mb-4" />
                <p 
                  className="text-foreground text-lg leading-relaxed mb-6 italic"
                  dangerouslySetInnerHTML={{ __html: `"${testimonial.quote}"` }}
                />
                <p className="font-semibold text-accent">
                  — {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
