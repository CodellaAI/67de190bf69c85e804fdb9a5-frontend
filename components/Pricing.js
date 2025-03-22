
'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, X } from 'lucide-react'

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and startups',
      monthlyPrice: 19,
      annualPrice: 15,
      features: [
        'Up to 5 team members',
        'Basic analytics',
        '3 projects',
        '24/7 support',
        'Email notifications',
      ],
      notIncluded: [
        'Advanced analytics',
        'Custom reporting',
        'API access',
        'Priority support',
      ],
      cta: 'Start with Starter',
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'For growing teams with advanced needs',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        'Up to 20 team members',
        'Advanced analytics',
        'Unlimited projects',
        '24/7 support',
        'Email notifications',
        'Custom reporting',
        'API access',
      ],
      notIncluded: [
        'Priority support',
      ],
      cta: 'Start with Professional',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex requirements',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Unlimited team members',
        'Advanced analytics',
        'Unlimited projects',
        '24/7 support',
        'Email notifications',
        'Custom reporting',
        'API access',
        'Priority support',
        'Dedicated account manager',
        'Custom integrations',
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="section bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Pricing</h2>
          <p className="mt-2 section-title">Plans for teams of all sizes</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Choose the perfect plan that fits your needs. All plans include a 14-day free trial.
          </p>
          
          <div className="mt-10 flex justify-center">
            <div className="relative flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
              <button
                type="button"
                className={`relative w-32 rounded-full py-2 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                  annual ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setAnnual(true)}
              >
                Annual
                {annual && <span className="absolute -top-6 left-1/2 -translate-x-1/2 transform text-xs text-primary-600 dark:text-primary-400">Save 20%</span>}
              </button>
              <button
                type="button"
                className={`relative w-32 rounded-full py-2 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                  !annual ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div 
              key={plan.name} 
              variants={itemVariants}
              className={`flex flex-col overflow-hidden rounded-2xl ${
                plan.highlighted 
                  ? 'bg-white dark:bg-gray-700 ring-2 ring-primary-600 dark:ring-primary-400 shadow-xl' 
                  : 'bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 shadow-soft'
              }`}
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-1 text-base text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {annual ? 'Billed annually' : 'Billed monthly'}
                </div>
                <a
                  href="#contact"
                  className={`mt-6 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    plan.highlighted
                      ? 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500'
                      : 'bg-primary-50 text-primary-700 hover:bg-primary-100 focus:ring-primary-500'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
              <div className="flex flex-1 flex-col p-8 bg-gray-50 dark:bg-gray-800/50">
                <div className="mb-4 text-sm font-medium text-gray-900 dark:text-white">What's included:</div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.notIncluded.length > 0 && (
                  <>
                    <div className="mt-6 mb-4 text-sm font-medium text-gray-900 dark:text-white">Not included:</div>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <X className="h-5 w-5 flex-shrink-0 text-gray-400" />
                          <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
