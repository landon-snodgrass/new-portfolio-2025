"use client";

import { motion } from "motion/react";
import Image from "next/image";

export const HeroSection = () => {
  const scrollToExperience = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="mt-8 max-w-6xl mx-auto ">
      <motion.div
        className="mb-12 flex border-b-6 border-deep-brown"
        initial={{ opacity: 0, x: -2000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl text-center md:text-left md:text-6xl fascinate-font">
          Hey, I'm <span className="text-burnt-orange">Landon Snodgrass</span>
        </h1>
      </motion.div>
      <div className="px-6 md:px-12">
        <div className="md:flex gap-12">
          <div className="flex flex-col flex-1">
            <motion.h2
              className="text-xl md:text-5xl text-center md:text-left font-bold mb-6 text-deep-brown"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm a Full-Stack Developer
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 md:mb-0"
            >
              <Image
                src="/profile-photo-2.jpg"
                alt="G. Landon Snodgrass"
                height="400"
                width="400"
                className="fancy-image"
              />
            </motion.div>
          </div>
          <div className="flex flex-col flex-2 justify-between">
            <motion.p
              className="text-xl md:text-2xl text-center md:text-left mb-8 leading-relaxed text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I led frontend development for a women's healthcare platform that
              grew from{" "}
              <span className="font-semibold text-burnt-orange">
                $0 to $200k ARR
              </span>{" "}
              serving 40,000+ patients across 56 medical practices while at
              Pario.
              <br />
              <br />
              I'm experienced in building{" "}
              <span className="font-semibold text-burnt-orange">
                scalable, user-friendly, and fast
              </span>{" "}
              full-stack applications with a focus on modern frontend
              technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="mailto:g.l.snodgrass95@gmail.com"
                className="bg-burnt-orange cursor-pointer text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.button
                onClick={scrollToExperience}
                className="border-2 border-burnt-orange cursor-pointer text-burnt-orange px-6 py-3 rounded-lg font-medium hover:bg-burnt-orange hover:text-white transition-all duration-300"
              >
                View my work
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
