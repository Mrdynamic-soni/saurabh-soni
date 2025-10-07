"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRobot, FaChalkboardTeacher, FaDownload, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/organisms/Footer";
import { RESUME } from "@/utils/data";

const HireMe: React.FC = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Building scalable, user-friendly web and mobile apps tailored to your needs.",
      icon: <FaCode size={32} />,
      color: "from-primary to-accent",
      features: ["Full-Stack Development", "Mobile Apps", "Cloud Solutions", "API Integration"],
    },
    {
      title: "IoT and Robotics Prototyping",
      description: "Creating cutting-edge IoT devices and robotic solutions for real-world applications.",
      icon: <FaRobot size={32} />,
      color: "from-secondary to-primary",
      features: ["Hardware Design", "Sensor Integration", "Automation", "Drone Technology"],
    },
    {
      title: "Tech Consulting & Coaching",
      description: "Providing expert guidance for tech teams and individuals to enhance your skills and strategies.",
      icon: <FaChalkboardTeacher size={32} />,
      color: "from-accent to-secondary",
      features: ["Team Training", "Code Reviews", "Architecture Design", "Best Practices"],
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Background Elements */}
      <div className="fixed inset-0 cyber-grid opacity-5" />
      <div className="fixed top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 glass-effect border-b border-primary/20"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <FaArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-space font-bold">
              <span className="gradient-text">Hire</span>
              <span className="text-light"> Me</span>
            </h1>
            <div className="w-24" /> {/* Spacer */}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center text-muted text-lg mt-4"
          >
            Let's build something amazing together!
          </motion.p>
        </div>
      </motion.header>

      <main className="relative z-10 container mx-auto px-4 py-16">
        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              <span className="text-light">What I </span>
              <span className="gradient-text">Offer</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-space font-bold text-light group-hover:gradient-text transition-all">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-20"
        >
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              <span className="text-light">Let's </span>
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to take your project to the next level? I'm here to help you build innovative solutions 
              that make a real impact. Let's discuss your vision and bring it to life.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.a
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 neon-glow"
              >
                <FaDownload size={20} />
                <span>Download Resume</span>
              </motion.a>
              
              <motion.a
                href="https://calendly.com/ssoni5930"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaCalendarAlt size={20} />
                <span>Book Appointment</span>
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "100+", label: "Happy Clients" },
              { number: "3+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 glass-effect rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default HireMe;