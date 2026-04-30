import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const t = useTranslations('FAQ');
  const items = t.raw('items') as { question: string; answer: string }[];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 border-zinc-700 text-zinc-400">
              FAQ
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t('title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="py-8">
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-5 w-5 text-zinc-500 mt-1 shrink-0" />
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">
                      {item.question}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
              {index < items.length - 1 && (
                <Separator className="bg-zinc-900" />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
