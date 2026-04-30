import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check, Code2, Shield, Zap, GitBranch, Lock, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const t = useTranslations();

  const features = [
    { icon: Code2, key: 0 },
    { icon: Check, key: 1 },
    { icon: Zap, key: 2 },
    { icon: Shield, key: 3 },
    { icon: GitBranch, key: 4 },
    { icon: Lock, key: 5 },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 border-zinc-700 text-zinc-400">
              AI-Powered Code Generation
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {t('Hero.headline')}
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
              {t('Hero.subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
                {t('Hero.ctaPrimary')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-900">
                {t('Hero.ctaSecondary')}
              </Button>
            </div>
            <p className="mt-8 text-sm text-zinc-500">
              {t('Hero.socialProof')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            {t('Features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-colors"
              >
                <feature.icon className="h-8 w-8 text-white mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {t(`Features.items.${feature.key}.title`)}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {t(`Features.items.${feature.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('CTA.headline')}
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            {t('CTA.subheadline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
              {t('CTA.ctaPrimary')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-900">
              {t('CTA.ctaSecondary')}
            </Button>
          </div>
          <p className="text-sm text-zinc-500">
            {t('CTA.trustLine')}
          </p>
        </div>
      </section>
    </main>
  );
}
