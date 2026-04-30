"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 mb-6">
            <Sparkles className="h-6 w-6" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Code 10x Faster?
          </h2>

          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Join 100,000+ developers who ship better code faster with AI.
            Start your free trial today - no credit card required.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-base bg-background text-foreground hover:bg-background/90"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Documentation
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Free 14-day Pro trial • No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
