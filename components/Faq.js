
'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How does the 14-day free trial work?',
    answer: 'You can sign up for a free trial with no credit card required. You\'ll have full access to all features for 14 days. At the end of your trial, you can choose to subscribe to one of our plans or your account will automatically switch to a limited free version.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new price will be prorated for the remainder of your billing cycle. If you downgrade, the new price will take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a limit to how many team members I can add?',
    answer: 'The number of team members you can add depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.',
  },
  {
    question: 'How secure is my data?',
    answer: 'We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Your data is stored in secure cloud environments with multiple layers of protection.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings. If you cancel, you\'ll still have access to your plan until the end of your current billing cycle. We don\'t offer refunds for partial months.',
  },
  {
    question: 'Do you offer discounts for nonprofits or educational institutions?',
    answer: 'Yes, we offer special pricing for qualified nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information and to apply for these special rates.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)
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

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="faq" className="section bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">FAQ</h2>
          <p className="mt-2 section-title">Frequently asked questions</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Find answers to common questions about FlowSaaS. If you don't see your question here, feel free to contact us.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200 dark:divide-gray-700"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="py-6">
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-start justify-between text-left"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-base text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
