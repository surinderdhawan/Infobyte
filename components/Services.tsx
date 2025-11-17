'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
// Icon Components
const Code = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)
const Cloud = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
)
const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)
const Smartphone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)
const Database = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
)
const Network = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)
const Server = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
)
const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business requirements and drive growth. From web applications to enterprise systems, we build scalable, maintainable software that solves real business problems.',
    color: 'from-primary-500 to-primary-700',
    features: ['Web Applications', 'Enterprise Software', 'API Development', 'System Integration'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions & Migration',
    description: 'Seamless cloud migration and management services to scale your business infrastructure. We help you leverage AWS, Azure, and Google Cloud to reduce costs and improve performance.',
    color: 'from-secondary-500 to-secondary-700',
    features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Multi-Cloud Strategy'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your digital assets and ensure data integrity. We implement security best practices, conduct audits, and provide ongoing protection.',
    color: 'from-red-500 to-red-700',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Monitoring'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices. We create user-friendly, high-performance mobile apps that engage users and drive business results.',
    color: 'from-green-500 to-green-700',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Expert database design, optimization, and management for optimal performance. We handle everything from schema design to performance tuning and data migration.',
    color: 'from-yellow-500 to-yellow-700',
    features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery'],
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    description: 'Design, implementation, and maintenance of robust network infrastructure solutions. We ensure your network is secure, scalable, and optimized for performance.',
    color: 'from-purple-500 to-purple-700',
    features: ['Network Design', 'Security Implementation', 'Monitoring', 'Troubleshooting'],
  },
  {
    icon: Server,
    title: 'DevOps & CI/CD',
    description: 'Automated deployment pipelines and infrastructure management for faster delivery. We implement DevOps best practices to accelerate your development cycle.',
    color: 'from-blue-500 to-blue-700',
    features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring'],
  },
  {
    icon: Zap,
    title: 'IT Consulting',
    description: 'Strategic IT consulting to help you make informed technology decisions. Our experts analyze your needs and provide recommendations for digital transformation.',
    color: 'from-pink-500 to-pink-700',
    features: ['Technology Strategy', 'Digital Transformation', 'Architecture Design', 'Best Practices'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Decorative Image */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
          alt="Technology Pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-xl p-6 hover:glow transition-all cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-400 mb-6">
              We understand that every business is unique. Our team works closely with you to understand your specific needs and deliver tailored solutions that drive results.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold text-white glow"
            >
              Discuss Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

