
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">FlowSaaS</span>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <span className="ml-2 text-xl font-bold">FlowSaaS</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {['Features', 'Testimonials', 'Pricing', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex items-center justify-between p-6">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">FlowSaaS</span>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"></div>
                    <span className="ml-2 text-xl font-bold">FlowSaaS</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="space-y-6 py-6 px-6">
                    {['Features', 'Testimonials', 'Pricing', 'FAQ'].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="block text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                  <div className="py-6 px-6">
                    <a
                      href="#contact"
                      className="block w-full btn-primary text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
