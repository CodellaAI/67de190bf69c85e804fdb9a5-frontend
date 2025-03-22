
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'API', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Cookies', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <span className="ml-2 text-xl font-bold">FlowSaaS</span>
            </Link>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Streamline your workflow and boost productivity with our all-in-one SaaS platform.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerLinks.slice(0, 2).map((group) => (
                <div key={group.title} className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{group.title}</h3>
                  <ul className="mt-6 space-y-4">
                    {group.links.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerLinks.slice(2, 4).map((group) => (
                <div key={group.title} className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{group.title}</h3>
                  <ul className="mt-6 space-y-4">
                    {group.links.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; {currentYear} FlowSaaS, Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs leading-5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-xs leading-5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-xs leading-5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
