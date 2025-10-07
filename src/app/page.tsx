"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/organisms/Navigation";
import HeroSection from "@/components/organisms/Herosection";
import About from "@/components/organisms/About";
import Skills from "@/components/organisms/Skills";
import WorkExperienceSection from "@/components/organisms/WorkExperience";
import ServicesSection from "@/components/organisms/Services";
import PortfolioSection from "@/components/organisms/Porfolio";
import ResourcesSection from "@/components/organisms/Resources";
import ContactSection from "@/components/organisms/Contact";
import Footer from "@/components/organisms/Footer";
import EducationSection from "@/components/organisms/Eduction";

interface SectionItem {
  id: string;
  component: React.ReactNode;
}

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const isClickingRef = useRef(false);

  const sections: SectionItem[] = useMemo(() => [
    { id: "home", component: <HeroSection /> },
    { id: "about", component: <About /> },
    { id: "workexperience", component: <WorkExperienceSection /> },
    { id: "education", component: <EducationSection /> },
    { id: "skills", component: <Skills /> },
    { id: "services", component: <ServicesSection /> },
    { id: "portfolio", component: <PortfolioSection /> },
    { id: "resources", component: <ResourcesSection /> },
    { id: "contact", component: <ContactSection /> },
  ], []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    isClickingRef.current = true;
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // Account for fixed header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setTimeout(() => {
        isClickingRef.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isClickingRef.current) {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSection(entry.target.id);
            }
          });
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-80px 0px -80px 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onSectionClick={scrollToSection} 
      />

      {/* Main Content */}
      <main className="md:ml-64">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {section.component}
          </motion.section>
        ))}
        
        {/* Footer */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Footer />
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
