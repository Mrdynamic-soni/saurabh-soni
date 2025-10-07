"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaServicestack,
  FaProjectDiagram,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import SAURABH from "../../app/assests/Images/saurabh.jpeg";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface NavigationProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems: MenuItem[] = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "workexperience", label: "Experience", icon: <FaBriefcase /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "services", label: "Services", icon: <FaServicestack /> },
    { id: "portfolio", label: "Portfolio", icon: <FaProjectDiagram /> },
    { id: "resources", label: "Resources", icon: <FaFileAlt /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (id: string) => {
    onSectionClick(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          scrolled ? "glass-effect" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-light hover:text-primary transition-colors"
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
          <h1 className="text-xl font-space font-bold gradient-text">
            Saurabh Soni
          </h1>
          <div className="w-8" /> {/* Spacer */}
        </div>
      </motion.header>

      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-0 h-screen w-64 glass-effect border-r border-primary/20 z-40 hidden md:flex flex-col py-8 px-4"
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative mb-4"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/50 p-1">
              <Image
                src={SAURABH}
                alt="Saurabh Soni"
                className="w-full h-full object-cover rounded-full"
                width={96}
                height={96}
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-dark" />
          </motion.div>
          <h2 className="text-xl font-space font-bold text-light mb-1">
            Saurabh Soni
          </h2>
          <p className="text-sm text-muted">Full Stack Developer</p>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-muted hover:text-light hover:bg-light/5"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-4 border-t border-primary/20">
          <p className="text-xs text-muted text-center mb-3">Connect with me</p>
          <div className="flex justify-center gap-3">
            {/* Add social media icons here */}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm" />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-80 h-full glass-effect border-r border-primary/20 p-6"
            >
              {/* Profile Section */}
              <div className="flex flex-col items-center mb-8 pt-16">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50 p-1 mb-4">
                  <Image
                    src={SAURABH}
                    alt="Saurabh Soni"
                    className="w-full h-full object-cover rounded-full"
                    width={80}
                    height={80}
                  />
                </div>
                <h2 className="text-lg font-space font-bold text-light">
                  Saurabh Soni
                </h2>
                <p className="text-sm text-muted">Full Stack Developer</p>
              </div>

              {/* Navigation Menu */}
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "text-muted hover:text-light hover:bg-light/5"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hire Me Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link
          href="/hireme"
          className="group relative"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg pulse-glow"
          >
            <span className="text-white font-bold text-xs text-center leading-tight">
              Hire<br />Me
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
};

export default Navigation;