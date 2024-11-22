"use client";

import React, { useState } from "react";
import {
  FaHome,
  FaRegFilePdf,
  FaRegImages,
  FaLaptopCode,
} from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaServer } from "react-icons/fa6";
import { LuContact2 } from "react-icons/lu";
import Image from "next/image";
import { theme } from "@/utils/theme";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import Heading from "@/components/typography/Heading";
import HeroSection from "@/components/organisms/Herosection";
import About from "@/components/organisms/About";
import Skills from "@/components/organisms/Skills";
import WorkExperienceSection from "@/components/organisms/WorkExperience";
import ServicesSection from "@/components/organisms/Services";
import PortfolioSection from "@/components/organisms/Porfolio";
import ResourcesSection from "@/components/organisms/Resources";
import ContactSection from "@/components/organisms/Contact";
import Footer from "@/components/organisms/Footer";

// Dummy Component for future scope
const DummyComponent = ({ title }: { title: string }) => (
  <div
    id={title.toLowerCase()}
    className="h-screen flex items-center justify-center bg-gray-100 text-gray-800"
  >
    <h1 className="text-4xl font-bold">{title}</h1>
  </div>
);

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      id: "home",
      label: "Home",
      icon: <FaHome />,
      component: <HeroSection />,
    },
    {
      id: "about",
      label: "About",
      icon: <IoPersonCircleSharp />,
      component: <About />,
    },
    {
      id: "workexperience",
      label: "Work Experience",
      icon: <FaRegImages />,
      component: <WorkExperienceSection />,
    },
    {
      id: "skills",
      label: "Skills",
      icon: <FaLaptopCode />,
      component: <Skills />,
    },
    {
      id: "services",
      label: "Services",
      icon: <FaServer />,
      component: <ServicesSection />,
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: <FaRegImages />,
      component: <PortfolioSection />,
    },
    {
      id: "resources",
      label: "Resources",
      icon: <FaRegFilePdf />,
      component: <ResourcesSection />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <LuContact2 />,
      component: <ContactSection />,
    },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id || "home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Menu for Mobile and Tablet */}
      <div className="fixed top-0 left-0 z-50 w-full bg-gray-900 text-white flex items-center px-4 py-3 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none"
        >
          {isMenuOpen ? <IoCloseSharp /> : <HiMenuAlt3 />}
        </button>
        <Heading
          heading="Saurabh Soni"
          className="text-xl font-bold text-center"
        />
      </div>

      <nav
        className={`fixed left-0 top-0 h-screen w-52 flex flex-col items-center bg-gray-900 text-white py-4 space-y-4 shadow-lg px-4 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 z-40 pt-16 overflow-y-auto overflow-x-hidden`}
        style={{ maxHeight: "100vh" }}
      >
        <Image
          src={
            "https://avatars.githubusercontent.com/u/61721761?s=400&u=3ca59ad71b95db0f87427648f33308e0c0d03f2a&v=4"
          }
          alt="profil"
          width={200}
          height={200}
          className="rounded-full mx-6 border-8"
          style={{
            borderColor: theme?.colors?.surface?.secondary,
          }}
        />
        <Heading
          heading="Saurabh Soni"
          className="text-2xl"
          fontWeight="font-bold"
        />
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="flex gap-x-2 items-center justify-start py-2 w-full focus:outline-none group"
          >
            <span className="text-lg text-gray-500 group-hover:text-white group-focus:text-white transition-colors duration-300">
              {item.icon}
            </span>
            <span className="text-xs text-gray-500 group-hover:text-white group-focus:text-white transition-colors duration-300">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <main className="ml-0 md:ml-52">
        {menuItems.map((item) => (
          <section key={item.id} id={item.id}>
            {item.component}
          </section>
        ))}
        <section>
          <Footer />
        </section>
      </main>

      {/* Hire Me Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-gray-800 text-white border-2 border-gray-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-gray-700 focus:outline-none transition-transform duration-300 hover:scale-105"
        >
          <span className="text-sm font-bold p-2">Hire me</span>
        </button>
      </div>
    </>
  );
};

export default Home;
