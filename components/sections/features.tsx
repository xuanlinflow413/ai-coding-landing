"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Wand2, Bug, GitBranch, Terminal, Shield } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Intelligent Code Completion",
    description:
      "Context-aware suggestions that understand your codebase. Predicts entire functions and blocks with 95% accuracy.",
  },
  {
    icon: Wand2,
    title: "Natural Language to Code",
    description:
      "Describe what you want in plain English. AI generates production-ready code in any programming language.",
  },
  {
    icon: Bug,
    title: "Auto Bug Detection & Fix",
    description:
      "Identifies bugs, security vulnerabilities, and performance issues in real-time with instant fix suggestions.",
  },
  {
    icon: GitBranch,
    title: "Smart Refactoring",
    description:
      "Automatically refactor legacy code to modern standards. Maintain functionality while improving readability.",
  },
  {
    icon: Terminal,
    title: "Terminal Integration",
    description:
      "AI-powered terminal assistant. Generate shell commands, explain outputs, and debug errors instantly.",
  },
  {
    icon: Shield,
    title: "Security Analysis",
    description:
      "Detects OWASP vulnerabilities, SQL injection risks, and insecure dependencies before they reach production.",
  },
];

export function Features() {
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
            Everything You Need to{" "}
            <span className="text-primary">Code Smarter</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From writing your first line to deploying production code, our AI
            assists at every step.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-background hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
