
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Send } from 'lucide-react'

export default function Cta() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1000)
  }

  return (
    <section id="contact" className="section bg-primary-600">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden px-6 py-24 sm:px-24 rounded-3xl">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-700 to-primary-600"></div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <svg
              className="absolute inset-0 h-full w-full"
              width="100%"
              height="100%"
            >
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle id="pattern-circle" cx="10" cy="10" r="8" fill="none" stroke="white" strokeWidth="0.5"></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>
          </div>
          
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to streamline your workflow?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Start your 14-day free trial today. No credit card required.
            </p>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-0">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-l-lg border-0 px-10 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-r-lg bg-white px-6 py-4 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70 flex items-center justify-center sm:w-auto w-full"
                >
                  {loading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-600 border-t-transparent"></div>
                  ) : (
                    <>
                      Get started <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-10 rounded-lg bg-white/10 p-6 text-white"
              >
                <Send className="mx-auto h-10 w-10 mb-4" />
                <h3 className="text-xl font-semibold">Thank you for your interest!</h3>
                <p className="mt-2">We've sent you an email with instructions to get started.</p>
              </motion.div>
            )}
            
            <p className="mt-8 text-xs leading-5 text-primary-100">
              By signing up, you agree to our{' '}
              <a href="#" className="font-semibold text-white hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-semibold text-white hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
