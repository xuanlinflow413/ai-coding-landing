"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

const beforeAfterPairs = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    title: "Sneakers → Clean Studio",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    title: "Watch → Luxury Minimalist",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop",
    title: "Headphones → Lifestyle",
  },
];

export function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(true);

  const current = beforeAfterPairs[activeIndex];

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
            See the <span className="text-primary">Magic</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Transform ordinary product shots into professional e-commerce photos in seconds.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square bg-muted">
                <motion.img
                  key={current.before + "before"}
                  src={current.before}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showAfter ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  key={current.after + "after"}
                  src={current.after}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showAfter ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
                  {showAfter ? "After" : "Before"}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{current.title}</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowAfter(!showAfter)}
                    >
                      {showAfter ? (
                        <><ArrowLeft className="mr-2 h-4 w-4" />Before</>
                      ) : (
                        <><ArrowRight className="mr-2 h-4 w-4" />After</>
                      )}
                    </Button>
                  </div>
                </div>
                <div className="flex gap-2 justify-center">
                  {beforeAfterPairs.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setActiveIndex(idx); setShowAfter(true); }}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        idx === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to example ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
