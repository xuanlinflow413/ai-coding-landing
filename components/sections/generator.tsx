"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Loader2, Download, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const mockResults = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    alt: "Product on clean white background",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    alt: "Product lifestyle shot",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    alt: "Product in hand",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    alt: "Product being used",
  },
];

export function Generator({
  hasImage,
  selectedScene,
}: {
  hasImage: boolean;
  selectedScene: string | null;
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleGenerate = () => {
    if (!hasImage || !selectedScene) return;
    setIsGenerating(true);
    setProgress(0);
    setShowResults(false);
  };

  useEffect(() => {
    if (!isGenerating) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setShowResults(true);
          return 100;
        }
        return prev + 3.4; // ~3 seconds to reach 100
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isGenerating]);

  const canGenerate = hasImage && selectedScene && !isGenerating;

  return (
    <div className="space-y-6">
      <Button
        size="lg"
        className="w-full h-14 text-lg"
        disabled={!canGenerate}
        onClick={handleGenerate}
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-5 w-5" />
            Generate Product Photos
          </>
        )}
      </Button>

      <AnimatePresence>
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>AI is generating your photos...</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Generated Results</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowResults(false)}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Regenerate
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {mockResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative rounded-xl overflow-hidden border bg-muted/30"
                >
                  <img
                    src={result.src}
                    alt={result.alt}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button size="sm" variant="secondary">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
