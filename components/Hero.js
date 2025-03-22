
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pb-24 lg:pb-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-gray-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-900">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 ring-1 ring-inset ring-primary-700/10 dark:ring-primary-400/30 mb-6">
              Just launched <span className="ml-2 h-1.5 w-1.5 rounded-full bg-primary-600"></span>
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Streamline Your Workflow with FlowSaaS
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Boost productivity and simplify your business operations with our all-in-one platform. 
            Designed for teams of all sizes to collaborate seamlessly.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#contact" className="btn-primary">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#features" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {['No credit card required', '14-day free trial', 'Cancel anytime'].map((item) => (
              <div key={item} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <CheckCircle className="mr-2 h-4 w-4 text-primary-500" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 flow-root sm:mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative rounded-xl bg-gray-900/5 dark:bg-gray-100/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
