'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const faqs = [
  {
    question: 'What services does InfoByte Tech provide?',
    answer: 'We offer comprehensive IT services including custom software development, cloud solutions, cybersecurity, mobile app development, database management, network infrastructure, DevOps, and IT consulting. Our team specializes in modern technologies and can handle projects of any scale.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while enterprise software solutions can take 3-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer 24/7 support and maintenance services. Our support packages include bug fixes, security updates, performance optimization, and feature enhancements. We ensure your systems run smoothly and stay up-to-date with the latest technologies.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, Java, AWS, Azure, Docker, Kubernetes, MongoDB, PostgreSQL, and more. Our team stays current with the latest trends and best practices in software development.',
  },
  {
    question: 'Can you work with our existing systems?',
    answer: 'Absolutely! We specialize in integrating new solutions with existing systems. Whether you need API integration, data migration, or system modernization, we can work with your current infrastructure to enhance and extend its capabilities.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile development methodology with regular sprints, daily standups, and continuous delivery. Our process includes requirements gathering, design, development, testing, deployment, and maintenance. We keep you involved at every step with regular updates and demos.',
  },
  {
    question: 'Do you offer cloud migration services?',
    answer: 'Yes, cloud migration is one of our core services. We help businesses migrate from on-premise infrastructure to cloud platforms like AWS, Azure, or Google Cloud. Our migration process is designed to minimize downtime and ensure data security throughout the transition.',
  },
  {
    question: 'How do you ensure data security?',
    answer: 'Security is our top priority. We implement industry-standard security practices including encryption, secure authentication, regular security audits, compliance with regulations (GDPR, HIPAA), and penetration testing. We also provide cybersecurity services to protect your digital assets.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Got questions? We've got answers
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary-500 flex-shrink-0" />
                </motion.div>
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
                    <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



