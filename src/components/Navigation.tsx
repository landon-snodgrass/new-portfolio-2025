"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#about", label: "About" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="px-6 py-6 md:px-12">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1
          className="fascinate-font text-2xl md:text-3xl text-burnt-orange"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Landon Snodgrass
        </motion.h1>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="nav-underline text-lg hover:text-burnt-orange transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <button
          className="md:hidden text-2xl text-burnt-orange"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white shadow-lg mg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -1 }}
          >
            <div className="flex flex-col space-y-5 p-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-lg hover:text-burnt-orange transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
