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
    question: "How does the AI code completion work?",
    answer:
      "Our AI analyzes your entire codebase context in real-time. It understands your coding patterns, imports, and dependencies to provide highly relevant suggestions. The model is trained on billions of lines of code across 50+ programming languages.",
  },
  {
    question: "Is my code secure and private?",
    answer:
      "Absolutely. We use enterprise-grade encryption and never store your proprietary code. Our Pro and Enterprise plans offer self-hosted options where all processing happens on your infrastructure. We're SOC 2 Type II certified.",
  },
  {
    question: "Which IDEs and editors are supported?",
    answer:
      "We support VS Code, JetBrains IDEs (IntelliJ, PyCharm, WebStorm), Vim, Neovim, Emacs, Sublime Text, and Atom. New integrations are added monthly based on user requests.",
  },
  {
    question: "Can I use it for commercial projects?",
    answer:
      "Yes! All plans including the Free tier allow commercial use. The Pro and Enterprise plans include additional features like team collaboration, advanced security scanning, and priority support for commercial teams.",
  },
  {
    question: "How accurate are the AI suggestions?",
    answer:
      "Our AI achieves 95%+ accuracy for code completion and 90%+ for bug detection. The model continuously learns from your feedback - thumbs up/down on suggestions helps it improve over time for your specific codebase.",
  },
  {
    question: "Is there a free trial for Pro features?",
    answer:
      "Yes! Every new user gets a 14-day free trial of Pro features with unlimited completions. No credit card required to start. You can downgrade to the Free plan anytime after the trial.",
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
            Everything you need to know about our AI coding assistant.
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
