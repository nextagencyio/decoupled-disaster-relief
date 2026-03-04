'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import OperationsPreview from './OperationsPreview'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Heart, Shield, Truck, Users, Phone, Globe, MapPin, Mail, Clock } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const experiences = [
  { icon: Heart, title: 'Emergency Medical Aid', description: 'Rapid deployment of medical teams and supplies to disaster zones' },
  { icon: Shield, title: 'Search & Rescue', description: 'Trained teams ready 24/7 for immediate search and rescue operations' },
  { icon: Truck, title: 'Supply Distribution', description: 'Efficient logistics networks ensuring aid reaches those who need it most' },
  { icon: Users, title: 'Community Recovery', description: 'Long-term programs to help communities rebuild and become resilient' },
  { icon: Phone, title: '24/7 Emergency Hotline', description: 'Round-the-clock crisis coordination and response activation' },
  { icon: Globe, title: 'Global Network', description: 'Partnerships with organizations in over 40 countries worldwide' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80&fit=crop', alt: 'Relief workers distributing supplies' },
  { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80&fit=crop', alt: 'Community support efforts' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&fit=crop', alt: 'Volunteers helping rebuild' },
  { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80&fit=crop', alt: 'Emergency response team' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <OperationsPreview />
      </ErrorBoundary>

      {/* Signature Experiences */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              How We Help
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From first response to lasting recovery &mdash; comprehensive humanitarian aid
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => {
              const IconComponent = exp.icon
              return (
                <div
                  key={exp.title}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 mb-5 group-hover:from-primary-200 group-hover:to-accent-200 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary-700" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Making a Difference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the impact of our relief efforts around the world
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Rich 4-Column Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-800 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-display text-2xl font-bold text-white">First Response</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Delivering rapid humanitarian assistance to communities affected by natural disasters and emergencies worldwide.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">750 Relief Dr, Washington, DC 20001</span>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wide">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/operations" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Operations</Link></li>
                <li><Link href="/resources" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Resources</Link></li>
                <li><Link href="/updates" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Situation Updates</Link></li>
                <li><Link href="/team" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Our Team</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wide">Get Involved</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm">Volunteer Programs</li>
                <li className="text-gray-400 text-sm">Corporate Partnerships</li>
                <li className="text-gray-400 text-sm">Monthly Giving</li>
                <li className="text-gray-400 text-sm">Emergency Response Training</li>
                <li className="text-gray-400 text-sm">Community Preparedness</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wide">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">(202) 555-0147</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">info@firstresponsealliance.org</span>
                </li>
                <li className="flex items-start space-x-2 mt-4">
                  <Clock className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-400 text-sm">
                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p>Emergency Hotline: 24/7</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} First Response Alliance. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2 md:mt-0">
              Serving communities in need worldwide
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
