'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, Heart } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Operations', href: '/operations' },
  { name: 'Resources', href: '/resources' },
  { name: 'Updates', href: '/updates' },
  { name: 'Team Members', href: '/team' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)

    const banner = document.querySelector('[class*="bg-amber-500"]')
    if (banner) {
      setBannerHeight(banner.getBoundingClientRect().height)
      const observer = new MutationObserver(() => {
        if (!document.querySelector('[class*="bg-amber-500"]')) setBannerHeight(0)
      })
      observer.observe(document.body, { childList: true, subtree: true })
      return () => {
        observer.disconnect()
        window.removeEventListener('scroll', handleScroll)
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) {
        return item.name
      }
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header
      className={clsx(
        'bg-white/95 backdrop-blur-md sticky z-50 transition-shadow duration-300',
        scrolled ? 'shadow-md' : 'shadow-sm'
      )}
      style={{ top: `${bannerHeight}px` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center shadow-sm">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-primary-900 hidden sm:block tracking-tight">
              First Response Alliance
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  activeTab === item.name
                    ? 'bg-primary-100 text-primary-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center bg-gradient-to-r from-primary-700 to-primary-800 text-white px-6 py-2 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-200 font-bold text-sm shadow-sm"
            >
              Donate Now
            </Link>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    'px-4 py-3 rounded-full text-sm font-medium transition-all duration-200',
                    activeTab === item.name
                      ? 'bg-primary-100 text-primary-900'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 inline-flex items-center justify-center bg-gradient-to-r from-primary-700 to-primary-800 text-white px-6 py-3 rounded-full font-bold text-sm"
              >
                Donate Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
