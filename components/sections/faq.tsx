"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is AI Product Photo Generator?",
    answer:
      "It's an AI-powered tool that transforms your product photos into professional e-commerce images. Upload any product shot, choose a scene (like clean white background, lifestyle, or luxury), and our AI generates stunning photos in seconds.",
  },
  {
    question: "Do I need photography skills to use it?",
    answer:
      "Not at all. The tool is designed for anyone — from solo entrepreneurs to marketing teams. Just upload your product image and pick a scene. The AI handles lighting, background, shadows, and composition automatically.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "We support JPG, PNG, and WebP formats up to 5MB per image. For best results, we recommend uploading clear, well-lit product photos with the product clearly visible.",
  },
  {
    question: "How many photos can I generate for free?",
    answer:
      "The Free plan includes 10 generations per month with access to 3 popular scenes. Upgrade to Pro for 100 generations/month and all 9+ scenes, or Business for unlimited generations.",
  },
  {
    question: "Can I use generated photos for commercial purposes?",
    answer:
      "Yes! Pro and Business plans include a commercial license. Free plan is for personal use only. All generated images are royalty-free for licensed users.",
  },
  {
    question: "What resolution are the generated images?",
    answer:
      "Free plan outputs standard resolution (1024×1024). Pro plan includes high-resolution 4K images (2048×2048). Business plan offers ultra HD resolution for large-format printing.",
  },
  {
    question: "How long does generation take?",
    answer:
      "Most generations complete in 3–5 seconds. During peak times, it may take up to 10 seconds. Pro and Business users get priority queue access for faster generation.",
  },
  {
    question: "Is my uploaded data safe?",
    answer:
      "Absolutely. We do not store your uploaded images permanently. They are processed in real-time and automatically deleted after generation. We never use your product images to train our AI models without explicit consent.",
  },
  {
    question: "Can I request a refund?",
    answer:
      "Yes, we offer a 7-day money-back guarantee for Pro and Business plans. If you're not satisfied, contact our support team within 7 days of purchase for a full refund.",
  },
  {
    question: "Do you offer API access?",
    answer:
      "API access is available on the Business plan. It allows you to integrate our AI photo generation directly into your e-commerce platform, CMS, or workflow automation tools.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to know about AI Product Photo Generator.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
