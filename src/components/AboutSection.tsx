"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:g.l.snodgrass95@gmail.com",
      text: "g.l.snodgrass95@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/landonsnodgrass",
      text: "linkedin.com/in/landonsnodgrass",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/landon-snodgrass",
      text: "github.com/landon-snodgrass",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-warm-cream">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          className="fascinate-font text-4xl md:text-5xl text-center mb-16 text-burnt-orange"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          About
        </motion.h2>

        <div className="md:flex gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <Image
              src="/profile-photo-1.jpg"
              alt="G. Landon Snodgrass"
              height="1000"
              width="800"
              className="fancy-image mb-6 md:md-0"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-2"
          >
            <div className="space-y-6 text-center md:text-left">
              <motion.p
                className="text-xl leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I'm a full-stack developer with 7 years of experience building
                web applications that solve real-world problems. I specialize in{" "}
                <span className="font-semibold text-burnt-orange">
                  React, TypeScript, and Go
                </span>
                , with a focus on accessibilty and modern frontend technology.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Currently based in{" "}
                <span className="inline-flex items-center gap-1">
                  <MapPin size={16} className="text-burnt-orange" />
                  <span className="font-medium text-deep-brown">
                    Seattle, WA
                  </span>
                </span>
                , I work remotely and love collaborating with teams to build
                products that make a difference. I'm passionate about creating{" "}
                <span className="font-semibold text-burnt-orange">
                  scalable, accessible, and performant
                </span>{" "}
                applications.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Outside of coding I love rock climbing, playing music and game
                development.
              </motion.p>

              {/* Contact Links */}
              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <h3 className="text-lg font-semibold text-deep-brown mb-4">
                  Let's Connect
                </h3>
                <div className="space-y-3">
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
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group"
                        whileHover={{ x: 4 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      >
                        <div className="w-10 h-10 bg-burnt-orange rounded-lg flex items-center justify-center text-white group-hover:bg-deep-brown transition-colors">
                          <IconComponent size={18} />
                        </div>
                        <div>
                          <div className="font-medium text-deep-brown group-hover:text-burnt-orange transition-colors">
                            {link.label}
                          </div>
                          <div className="text-sm text-gray-500">
                            {link.text}
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
