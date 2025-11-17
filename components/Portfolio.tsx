'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const projects = [
  {
    title: 'Enterprise Cloud Migration',
    description: 'Migrated legacy infrastructure to AWS cloud, reducing costs by 45% and improving scalability.',
    category: 'Cloud Solutions',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Built a scalable e-commerce platform handling 1M+ daily transactions with 99.9% uptime.',
    category: 'Web Development',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    title: 'Mobile Banking App',
    description: 'Developed secure mobile banking application with biometric authentication and real-time transactions.',
    category: 'Mobile Development',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Created intelligent analytics platform with machine learning predictions and real-time insights.',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare management system with patient records, scheduling, and telemedicine features.',
    category: 'Enterprise Software',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
  },
  {
    title: 'IoT Smart Home Solution',
    description: 'Integrated IoT platform connecting smart devices with centralized control and automation.',
    category: 'IoT',
    technologies: ['Python', 'MQTT', 'React', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent to-secondary-900/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing successful projects and innovative solutions we&apos;ve delivered
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden hover:glow transition-all group cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-primary-400 text-sm font-medium">
                  <span>View Project</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

