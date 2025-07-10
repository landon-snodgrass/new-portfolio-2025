"use client";

import { AnimatePresence, motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/#about", label: "About" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      // Handle same-page navigation
      if (pathname !== "/") {
        // If not on home page, navigate to home first
        window.location.href = href;
      } else {
        // If on home page, scroll to section
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
    setIsOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      scrollToSection(href);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <nav className="px-6 py-6 md:px-12 bg-deep-brown text-white relative z-41">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.h1
            className="fascinate-font text-2xl md:text-3xl text-golden-yellow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Landon Snodgrass
          </motion.h1>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.href.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="nav-underline text-lg hover:text-burnt-orange transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="nav-underline text-lg hover:text-burnt-orange transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <button
            className="md:hidden text-2xl text-burnt-orange"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          className="absolute left-0 right-0 bg-white shadow-lg md:hidden z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.href.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-lg text-burnt-orange text-left w-full"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-burnt-orange block"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};
