'use client'

import { motion } from 'framer-motion'
// CheckCircle Icon Component
const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const features = [
  'Expert team with years of industry experience',
  'Cutting-edge technology stack',
  'Client-centric approach',
  '24/7 support and maintenance',
  'Proven track record of successful projects',
  'Agile development methodology',
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About InfoByte Tech</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              InfoByte Tech Pvt is a leading software company dedicated to providing
              exceptional IT services and solutions to businesses worldwide. Founded with
              a vision to bridge the gap between technology and business success, we combine
              innovation, expertise, and cutting-edge technology to help our clients
              achieve their digital transformation goals.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our team of skilled professionals is committed to delivering high-quality
              solutions that drive business growth and operational efficiency. With years
              of experience across various industries, we understand the unique challenges
              businesses face and provide tailored solutions that address specific needs.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We pride ourselves on building long-term partnerships with our clients based on
              trust, transparency, and excellence. From startups to Fortune 500 companies,
              we've helped organizations of all sizes leverage technology to achieve their
              strategic objectives and stay competitive in today's digital landscape.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-gray-400">Years Experience</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

