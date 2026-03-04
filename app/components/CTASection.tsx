'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Get in Touch'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Donate Now'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Volunteer'

  return (
    <section className="relative bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h2>
        {description && (
          <div className="text-primary-200 mb-10 max-w-2xl mx-auto text-lg" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="px-8 py-4 bg-white text-primary-900 rounded-full hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg"
          >
            {primaryLabel}
          </a>
          <a
            href="/operations"
            className="px-8 py-4 border-2 border-white/80 text-white rounded-full hover:bg-white/10 transition-colors font-bold text-lg"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
