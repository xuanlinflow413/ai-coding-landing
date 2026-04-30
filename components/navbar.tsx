import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Code2 } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const t = useTranslations('Nav');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white">
            <Code2 className="h-6 w-6" />
            <span className="font-bold text-lg">AI Coding</span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t('features')}
            </Link>
            <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t('pricing')}
            </Link>
            <Link href="/faq" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t('docs')}
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
              {t('signIn')}
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-zinc-200">
              {t('startBuilding')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
