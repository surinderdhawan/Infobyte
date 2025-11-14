'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support to ensure your systems are always running smoothly.',
    icon: '🔄',
  },
  {
    title: 'Agile Methodology',
    description: 'Flexible development process with regular updates and iterative improvements.',
    icon: '⚡',
  },
  {
    title: 'Scalable Solutions',
    description: 'Build for growth with solutions that scale seamlessly as your business expands.',
    icon: '📈',
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security measures to protect your data and applications.',
    icon: '🔒',
  },
  {
    title: 'Cost Effective',
    description: 'Optimized solutions that reduce operational costs while improving efficiency.',
    icon: '💰',
  },
  {
    title: 'Latest Technologies',
    description: 'Stay ahead with cutting-edge technologies and modern development practices.',
    icon: '🚀',
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent to-primary-900/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We deliver exceptional value through expertise, innovation, and dedication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-xl p-6 hover:glow transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

