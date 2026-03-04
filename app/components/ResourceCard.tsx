import Link from 'next/link'
import { DrupalResource } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight, Shield } from 'lucide-react'

interface ResourceCardProps {
  item: DrupalResource
}

export default function ResourceCard({ item }: ResourceCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 bg-gray-100">
        {(item as any).image?.url ? (
          <ResponsiveImage
            src={(item as any).image.url}
            alt={(item as any).image.alt || item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            variations={(item as any).image.variations}
            targetWidth={400}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-50">
            <Shield className="w-12 h-12 text-primary-300" />
          </div>
        )}
      </div>

      <div className="p-6">
        {(item as any).audience && (
          <p className="text-sm font-bold text-primary-700 mb-1">{(item as any).audience}</p>
        )}
        <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-primary-700 font-medium text-sm group-hover:gap-2 transition-all">
          View Resource
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
