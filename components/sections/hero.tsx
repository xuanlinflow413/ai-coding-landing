"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Camera, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToDemo = () => {
    const el = document.getElementById("demo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            AI-Powered Product Photography
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Professional Product Photos{" "}
            <span className="text-primary">in Seconds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Upload any product image and let AI generate stunning photos for
            e-commerce, social media, and ads. No studio, no photographer needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="h-12 px-8 text-base" onClick={scrollToDemo}>
              Try It Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              <Camera className="mr-2 h-4 w-4" />
              View Examples
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              <span>9+ Scenes</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Instant Generation</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>High Resolution</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
