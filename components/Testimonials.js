
'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

const testimonials = [
  {
    content: "FlowSaaS has completely transformed how our team collaborates. The interface is intuitive and the automation features save us hours every week.",
    author: {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 5,
  },
  {
    content: "As a startup founder, I needed a solution that could scale with my business. FlowSaaS not only met but exceeded my expectations. The analytics dashboard is particularly impressive.",
    author: {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Innovate Labs',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 5,
  },
  {
    content: "We've tried numerous productivity tools over the years, but FlowSaaS stands out for its seamless integration capabilities and user-friendly design. Our team adopted it with minimal training.",
    author: {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      company: 'Global Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 4,
  },
]

export default function Testimonials() {
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

  return (
    <section id="testimonials" className="section bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Testimonials</h2>
          <p className="mt-2 section-title">Trusted by businesses worldwide</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our customers have to say about FlowSaaS.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="card flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">"{testimonial.content}"</p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.author.name}</p>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.author.role}, {testimonial.author.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="inline-flex flex-wrap justify-center gap-8 md:gap-12">
              {['TechCorp', 'Innovate', 'GlobalSolutions', 'NextWave', 'PrimeDigital', 'FusionTech'].map((company) => (
                <div key={company} className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
