"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for personal projects",
    price: "$0",
    period: "/month",
    features: [
      "100 AI completions/day",
      "5 languages supported",
      "Basic code suggestions",
      "Community support",
      "VS Code extension",
    ],
    cta: "Get Started",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    description: "For professional developers",
    price: "$19",
    period: "/month",
    features: [
      "Unlimited AI completions",
      "50+ languages supported",
      "Advanced code generation",
      "Bug detection & fixes",
      "Security analysis",
      "Priority support",
      "Team collaboration",
      "API access",
    ],
    cta: "Start Pro Trial",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For teams and organizations",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Self-hosted option",
      "SSO & SAML",
      "Advanced analytics",
      "Custom AI training",
      "Dedicated support",
      "SLA guarantee",
      "Audit logs",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Simple, Transparent{" "}
            <span className="text-primary">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={plan.popular ? "sm:-mt-4 sm:mb-4" : ""}
            >
              <Card
                className={`h-full flex flex-col ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    {plan.popular && (
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.variant}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
