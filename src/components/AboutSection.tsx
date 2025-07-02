'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

export const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:g.l.snodgrass95@gmail.com',
      text: 'g.l.snodgrass95@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/landonsnodgrass',
      text: 'linkedin.com/in/landonsnodgrass'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
      text: 'github.com/yourusername'
    }
  ]

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-[#F5F2E8]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          className="fascinate-font text-4xl md:text-5xl text-center mb-16 text-[#CC5500]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          About
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <motion.div 
              className="relative inline-block cursor-pointer group mx-auto md:mx-0"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg relative z-10 flex items-center justify-center overflow-hidden"
                whileHover={{ x: -4, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Replace with your actual image */}
                <span className="text-gray-600 text-lg">Your Photo Here</span>
                {/* Uncomment when you have an image:
                <Image
                  src="/your-photo.jpg"
                  alt="G. Landon Snodgrass"
                  fill
                  className="object-cover"
                />
                */}
              </motion.div>
              <motion.div
                className="absolute top-0 left-0 w-80 h-80 bg-[#CC5500] rounded-lg -z-10"
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 8, y: 8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <div className="space-y-6">
              <motion.p 
                className="text-xl leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I'm a full-stack developer with 7 years of experience building web applications 
                that solve real-world problems. I specialize in{' '}
                <span className="font-semibold text-[#CC5500]">React, TypeScript, and Go</span>, 
                with a focus on healthcare technology and user-centered design.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Currently based in{' '}
                <span className="inline-flex items-center gap-1">
                  <MapPin size={16} className="text-[#CC5500]" />
                  <span className="font-medium text-[#4A3426]">Seattle, WA</span>
                </span>
                , I work remotely and love collaborating with teams to build products that make a difference. 
                I'm passionate about creating{' '}
                <span className="font-semibold text-[#CC5500]">scalable, accessible, and performant</span>{' '}
                applications.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                When I'm not coding, you might find me working on{' '}
                <span className="font-medium text-[#4A3426]">game development projects</span>,{' '}
                creating technical content, or exploring the beautiful Pacific Northwest.
              </motion.p>

              {/* Contact Links */}
              <motion.div 
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <h3 className="text-lg font-semibold text-[#4A3426] mb-4">Let's Connect</h3>
                <div className="space-y-3">
                  {contactLinks.map((link, index) => {
                    const IconComponent = link.icon
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group"
                        whileHover={{ x: 4 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      >
                        <div className="w-10 h-10 bg-[#CC5500] rounded-lg flex items-center justify-center text-white group-hover:bg-[#4A3426] transition-colors">
                          <IconComponent size={18} />
                        </div>
                        <div>
                          <div className="font-medium text-[#4A3426] group-hover:text-[#CC5500] transition-colors">
                            {link.label}
                          </div>
                          <div className="text-sm text-gray-500">
                            {link.text}
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}