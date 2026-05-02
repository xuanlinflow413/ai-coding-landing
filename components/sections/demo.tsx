"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageUploader } from "./image-uploader";
import { SceneSelector } from "./scene-selector";
import { Generator } from "./generator";

export function Demo() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedScene, setSelectedScene] = useState<string | null>(null);

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Try It <span className="text-primary">Now</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Upload your product photo, pick a scene, and let AI do the rest.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              1. Upload Product Image
            </h3>
            <ImageUploader onImageSelect={setSelectedImage} />
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              2. Choose a Scene
            </h3>
            <SceneSelector selected={selectedScene} onSelect={setSelectedScene} />
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              3. Generate
            </h3>
            <Generator hasImage={!!selectedImage} selectedScene={selectedScene} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
