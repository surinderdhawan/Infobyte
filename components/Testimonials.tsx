'use client'

import { motion } from 'framer-motion'

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z"/>
  </svg>
)

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp Solutions',
    company: 'TechCorp Solutions',
    content: 'InfoByte Tech transformed our entire IT infrastructure. Their expertise in cloud migration saved us 40% on operational costs while improving performance significantly.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO, Digital Innovations',
    company: 'Digital Innovations',
    content: 'The custom software solution they developed for us exceeded all expectations. The team was professional, responsive, and delivered on time and within budget.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, StartupXYZ',
    company: 'StartupXYZ',
    content: 'Working with InfoByte Tech has been a game-changer. Their mobile app development expertise helped us launch our product successfully and scale to 100K+ users.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Director of IT, Enterprise Corp',
    company: 'Enterprise Corp',
    content: 'Their cybersecurity services are top-notch. They identified vulnerabilities we didn\'t even know existed and implemented robust security measures that protect our business.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'Founder, E-Commerce Plus',
    company: 'E-Commerce Plus',
    content: 'The e-commerce platform they built for us is fast, secure, and user-friendly. Our conversion rates increased by 60% after the launch. Highly recommended!',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Operations Manager, Logistics Pro',
    company: 'Logistics Pro',
    content: 'InfoByte Tech\'s DevOps implementation streamlined our deployment process. We now deploy updates 10x faster with zero downtime. Outstanding service!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 hover:glow transition-all"
            >
              <QuoteIcon className="w-8 h-8 text-primary-500 mb-4" />
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
                <div className="text-xs text-primary-400 mt-1">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

