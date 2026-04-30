import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Users, Sparkles } from 'lucide-react';

export default function PricingPage() {
  const t = useTranslations('Pricing');

  const tiers = [
    { icon: Sparkles, key: 0, popular: false },
    { icon: Zap, key: 1, popular: true },
    { icon: Users, key: 2, popular: false },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 border-zinc-700 text-zinc-400">
              Pricing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t('title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => {
              const features = t.raw(`tiers.${tier.key}.features`) as string[];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`h-full flex flex-col bg-zinc-950 border-zinc-800 ${
                      tier.popular ? 'border-zinc-600 ring-1 ring-zinc-600' : ''
                    }`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <tier.icon className="h-6 w-6 text-white" />
                        {tier.popular && (
                          <Badge className="bg-white text-black hover:bg-zinc-200">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold">
                        {t(`tiers.${tier.key}.name`)}
                      </h3>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-3xl font-bold">
                          {t(`tiers.${tier.key}.price`)}
                        </span>
                        <span className="text-zinc-400 text-sm">
                          / {t(`tiers.${tier.key}.period`)}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <Separator className="bg-zinc-800 mb-6" />
                      <ul className="space-y-3 flex-1">
                        {features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-zinc-400 mt-0.5 shrink-0" />
                            <span className="text-sm text-zinc-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full mt-6 ${
                          tier.popular
                            ? 'bg-white text-black hover:bg-zinc-200'
                            : 'bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800'
                        }`}
                      >
                        {t(`tiers.${tier.key}.cta`)}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-zinc-500">
              {t.raw('notes').map((note: string, i: number) => (
                <span key={i}>{note}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
