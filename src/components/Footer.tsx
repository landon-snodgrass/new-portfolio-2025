"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:g.l.snodgrass95@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/landonsnodgrass",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
    },
  ];

  return (
    <footer className="py-6 px-6 md:px-12 bg-deep-brown text-warm-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center space-y-6">
          {/* Copyright and Location */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">© 2025 G. Landon Snodgrass • Seattle, WA</p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="w-12 h-12 bg-[#CC5500] rounded-lg flex items-center justify-center text-white hover:bg-[#F5F2E8] hover:text-[#4A3426] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={link.label}
                >
                  <IconComponent size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
