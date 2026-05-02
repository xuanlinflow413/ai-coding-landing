"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, ImageIcon, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ImageUploader({ onImageSelect }: { onImageSelect: (file: File | null) => void }) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      onImageSelect(file);
    };
    reader.readAsDataURL(file);
  }, [onImageSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const clearImage = useCallback(() => {
    setPreview(null);
    onImageSelect(null);
  }, [onImageSelect]);

  if (preview) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative rounded-xl overflow-hidden border bg-muted/30"
      >
        <img
          src={preview}
          alt="Preview"
          className="w-full h-64 object-contain bg-background"
        />
        <button
          onClick={clearImage}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-background/90 hover:bg-background border shadow-sm transition-colors"
          aria-label="Remove image"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 border text-xs font-medium">
          <Check className="h-3.5 w-3.5 text-green-600" />
          Image ready
        </div>
      </motion.div>
    );
  }

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`relative rounded-xl border-2 border-dashed transition-colors ${
        isDragging
          ? "border-primary bg-primary/5"
          : "border-border bg-muted/30 hover:bg-muted/50"
      }`}
    >
      <label className="flex flex-col items-center justify-center w-full h-64 cursor-pointer">
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
        <div className="flex flex-col items-center gap-3 text-center px-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">
              {isDragging ? "Drop image here" : "Click to upload or drag and drop"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Supports JPG, PNG, WebP up to 5MB
            </p>
          </div>
        </div>
      </label>
    </div>
  );
}
