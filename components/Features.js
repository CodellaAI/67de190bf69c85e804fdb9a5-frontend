
'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Zap, 
  BarChart, 
  Lock, 
  Users, 
  Clock, 
  Globe, 
  MessageSquare, 
  PieChart 
} from 'lucide-react'

const features = [
  {
    name: 'Lightning Fast Performance',
    description: 'Experience blazing-fast load times and smooth interactions across all devices.',
    icon: Zap,
  },
  {
    name: 'Advanced Analytics',
    description: 'Gain valuable insights with our comprehensive analytics dashboard.',
    icon: BarChart,
  },
  {
    name: 'Enterprise-grade Security',
    description: 'Your data is protected with industry-leading security protocols and encryption.',
    icon: Lock,
  },
  {
    name: 'Team Collaboration',
    description: 'Work seamlessly with your team members in real-time with collaborative tools.',
    icon: Users,
  },
  {
    name: 'Automation Tools',
    description: 'Save time by automating repetitive tasks and streamlining your workflow.',
    icon: Clock,
  },
  {
    name: 'Global Accessibility',
    description: 'Access your workspace from anywhere in the world with our cloud-based solution.',
    icon: Globe,
  },
  {
    name: 'Integrated Messaging',
    description: 'Communicate effectively with built-in messaging and notification systems.',
    icon: MessageSquare,
  },
  {
    name: 'Custom Reporting',
    description: 'Create personalized reports and visualizations tailored to your needs.',
    icon: PieChart,
  },
]

export default function Features() {
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
    <section id="features" className="section bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Powerful Features</h2>
          <p className="mt-2 section-title">Everything you need to boost productivity</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our comprehensive suite of tools is designed to streamline your workflow and help your team achieve more in less time.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 md:grid-cols-2">
            {features.map((feature) => (
              <motion.div 
                key={feature.name} 
                variants={itemVariants}
                className="card hover:shadow-md hover:-translate-y-1"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
