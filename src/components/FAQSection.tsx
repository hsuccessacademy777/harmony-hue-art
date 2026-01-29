import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the purpose of this course?",
    answer: "The 40 Days The Art of Surrender Course is designed to help participants embrace the art of letting go and living with greater ease, trust, and flow. Through guided meditation, journaling, and reflective exercises, this course aims to cultivate mindfulness, emotional resilience, and a deeper connection with yourself and your surroundings."
  },
  {
    question: "Who is this course for?",
    answer: `This course is for anyone who:
• Wants to explore the practice of surrender and letting go of control
• Is seeking clarity, emotional balance, and inner peace
• Desires to integrate daily mindfulness and journaling into their life
• Is open to personal growth and reflection

No prior experience in meditation or journaling is required.`
  },
  {
    question: "What will I learn in this course?",
    answer: `Participants will learn:
• Techniques to release resistance and embrace trust in life's flow
• How to use guided meditation for relaxation and mental clarity
• Journaling practices to explore and process emotions
• Reflective exercises to gain deeper insights into their thought patterns
• Tools to stay present and grounded in challenging situations`
  },
  {
    question: "How is the course structured?",
    answer: `Daily 21-minute Zoom Sessions: Each session will include:
• A guided meditation
• Journaling prompts
• A reflective task to integrate the day's learnings

WhatsApp Support: Daily instructions and reminders will be sent via WhatsApp.`
  },
  {
    question: "What is the time commitment for the course?",
    answer: `• Daily Zoom Sessions: 21 minutes
• Additional Tasks: 20-30 minutes for journaling and reflection (outside the Zoom session)

Participants should dedicate approximately 45-50 minutes daily to fully engage with the program.`
  },
  {
    question: "How will the course be delivered?",
    answer: `The course will be delivered through Zoom for the live sessions and WhatsApp for daily instructions, reminders, and ongoing support.

Participants will receive a link to join the daily Zoom sessions.`
  },
  {
    question: "Who is the facilitator for this course?",
    answer: "The course will be facilitated by Ravinder Singh, Holistic Success Coach. With a deep understanding of mindfulness and personal transformation, the facilitator will guide participants through meditations, journaling, and reflective practices to help them achieve the course's objectives."
  },
  {
    question: "What is the energy exchange for the course?",
    answer: "The Energy Exchange for the course is INR 3999"
  },
  {
    question: "What are the requirements to participate in the course?",
    answer: `Participants need:
• Access to a stable internet connection and Zoom for the daily sessions
• A physical journal or digital note-taking tool for journaling exercises
• Access to WhatsApp for receiving daily instructions and updates
• A willingness to commit to 40 days of self-reflection and mindfulness practices`
  },
  {
    question: "What if I miss a day or a live session?",
    answer: "If you miss a session, you can still follow the day's instructions sent on WhatsApp to stay on track, but forfeiture still applies."
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer: "Yes! Participants who complete all 40 days of the program will receive a certificate acknowledging their engagement and growth during the challenge."
  },
  {
    question: "How do I sign up for the course?",
    answer: `You can sign up by:
• Filling up the registration form
• Messaging us directly on WhatsApp (9821507855)

Upon registration, you will receive further instructions on payment of the security deposit and course details.`
  },
  {
    question: "How will this course benefit me in the long run?",
    answer: `By participating in this course, you will:
• Develop a habit of daily mindfulness and self-reflection
• Learn to embrace life's uncertainties with trust and resilience
• Gain tools to manage stress, anxiety, and emotional overwhelm
• Experience personal transformation through consistent guided practices`
  },
  {
    question: "What kind of support will be available during the course?",
    answer: `• Live Support: During the daily Zoom sessions, the facilitator will provide guidance and answer questions
• WhatsApp Support: Ongoing support for task instructions, reminders, and queries
• Tech Support: Our tech team at Holistic Success Academy will assist with any technical issues related to Zoom or WhatsApp`
  },
  {
    question: "What happens after the course ends?",
    answer: `At the end of the 40-day challenge, participants will receive:
• A certificate of completion
• Access to additional resources to continue their journey of mindfulness and surrender

This program is your opportunity to embrace life with trust, clarity, and ease. We can't wait to see you on this transformative journey! - all in just 21 minutes a day.`
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the 40-Day Art of Surrender program
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background/80 backdrop-blur-sm rounded-xl border border-primary/20 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
