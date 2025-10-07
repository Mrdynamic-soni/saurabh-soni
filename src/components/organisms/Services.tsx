"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaUsers,
  FaChalkboardTeacher,
  FaRobot,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Software Development",
    description:
      "Leveraged JavaScript, Python, and cloud technologies to develop scalable and secure solutions, optimizing team productivity and streamlining workflows.",
    icon: <FaLaptopCode size={40} />,
    skills: ["JavaScript", "Python", "AWS", "Node.js", "React", "MySQL"],
    color: "from-primary to-accent",
  },
  {
    title: "Cloud Solutions & DevOps",
    description:
      "Designed and implemented cloud infrastructure, automated deployments, and CI/CD pipelines, improving the scalability and efficiency of systems.",
    icon: <FaCloud size={40} />,
    skills: ["AWS Lambda", "Docker", "CI/CD", "AWS", "Serverless"],
    color: "from-secondary to-primary",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Built full-stack applications using the MERN stack, focusing on user experience and seamless front-end and back-end integration.",
    icon: <FaDatabase size={40} />,
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "PostgreSQL"],
    color: "from-accent to-secondary",
  },
  {
    title: "Training & Mentoring",
    description:
      "Mentored over 100 students in Python and full-stack development, providing hands-on training on core programming concepts and technologies.",
    icon: <FaChalkboardTeacher size={40} />,
    skills: ["Python", "SQL", "Machine Learning", "React", "Node.js"],
    color: "from-primary to-secondary",
  },
  {
    title: "UI/UX Design & Development",
    description:
      "Specialized in creating responsive and intuitive user interfaces that improve user engagement and overall experience across platforms.",
    icon: <FaUsers size={40} />,
    skills: ["React", "Material-UI", "CSS", "Bootstrap", "HTML5"],
    color: "from-secondary to-accent",
  },
  {
    title: "IoT, Robotics & Drones",
    description:
      "Developed IoT solutions, robotics systems, and drone applications, integrating hardware and software to create intelligent, automated systems.",
    icon: <FaRobot size={40} />,
    skills: ["Arduino", "Raspberry Pi", "Sensors", "Robotics", "Drone Technology"],
    color: "from-accent to-primary",
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="min-h-screen py-20 px-4 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
            <span className="text-light">My </span>
            <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="ml-4 text-xl font-space font-bold text-light group-hover:gradient-text transition-all">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;