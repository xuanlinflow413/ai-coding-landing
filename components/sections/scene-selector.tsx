"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon, Check } from "lucide-react";

const scenes = [
  { id: "clean-white", label: "Clean White Background", icon: "◻️" },
  { id: "lifestyle-table", label: "Lifestyle on Table", icon: "🪑" },
  { id: "in-hand", label: "In Hand", icon: "🤲" },
  { id: "being-used", label: "Being Used", icon: "✨" },
  { id: "nature", label: "Nature", icon: "🌿" },
  { id: "outdoor", label: "Outdoor", icon: "🏕️" },
  { id: "luxury", label: "Luxury Minimalist", icon: "💎" },
  { id: "holiday", label: "Holiday", icon: "🎄" },
  { id: "seasonal", label: "Seasonal", icon: "🍂" },
];

export function SceneSelector({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {scenes.map((scene) => {
        const isSelected = selected === scene.id;
        return (
          <motion.button
            key={scene.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(scene.id)}
            className={`relative flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-colors ${
              isSelected
                ? "border-primary bg-primary/5 text-primary"
                : "border-border bg-background hover:bg-muted/50"
            }`}
          >
            <span className="text-2xl">{scene.icon}</span>
            <span className="text-sm font-medium leading-tight">{scene.label}</span>
            {isSelected && (
              <div className="absolute top-2 right-2">
                <Check className="h-4 w-4 text-primary" />
              </div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
