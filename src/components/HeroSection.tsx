"use client";

import { motion } from "framer-motion";

export const HeroSection = () => {
  const scrollToExperience = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 text-deep-brown"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full-Stack Developer
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I built a healthcare platform from{" "}
            <span className="font-semibold text-burnt-orange">
              $0 to $200k ARR
            </span>{" "}
            serving 40,000+ patients across 56 medical practices.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="mailto:g.l.snodgrass95@gmail.com"
              className="bg-burnt-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.button
              onClick={scrollToExperience}
              className="border-2 border-burnt-orange text-burnt-orange px-6 py-3 rounded-lg font-medium hover:bg-burnt-orange hover:text-white transition-all duration-300"
            >
              View my work
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative inline-block cursor-pointer group"
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
                className="absolute top-0 left-0 w-80 h-80 bg-burnt-orange rounded-lg -z-10"
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 8, y: 8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
