import { useTranslations } from 'next-intl';
import { Code2, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  const links = {
    Product: [
      { label: 'Features', href: '/' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    Legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
    ],
  };

  return (
    <footer className="bg-black border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white mb-4">
              <Code2 className="h-5 w-5" />
              <span className="font-bold">AI Coding</span>
            </Link>
            <p className="text-sm text-zinc-500 mb-4">
              {t('tagline')}
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            © 2025 AI Coding. All rights reserved.
          </p>
          <p className="text-sm text-zinc-600">
            Built for engineers who ship.
          </p>
        </div>
      </div>
    </footer>
  );
}
