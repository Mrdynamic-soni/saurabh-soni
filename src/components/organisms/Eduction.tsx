"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCalendar, FaMapPin, FaGraduationCap, FaTrophy } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    university: "MMMUT Gorakhpur",
    completionYear: "2023",
    duration: "4 years",
    location: "Gorakhpur, Uttar Pradesh, India",
    cgpa: "7.51/10.0",
    type: "Bachelor's",
    color: "from-primary to-accent",
  },
  {
    degree: "Intermediate",
    university: "ISC Heliger Borden Education Centre",
    completionYear: "2017",
    duration: "2 years",
    location: "Kanpur, Uttar Pradesh, India",
    percentage: "81.0%",
    type: "Higher Secondary",
    color: "from-secondary to-primary",
  },
  {
    degree: "High School",
    university: "ICSE Heliger Borden Education Centre",
    completionYear: "2015",
    duration: "2 years",
    location: "Kanpur, Uttar Pradesh, India",
    percentage: "81.4%",
    type: "Secondary",
    color: "from-accent to-secondary",
  },
];

const EducationSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="min-h-screen py-20 px-4 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

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
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto">
            Academic journey that shaped my technical foundation
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-30" />

          <div className="space-y-16">
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } gap-8`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 glass-effect rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${education.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${education.color} text-white font-medium`}>
                            {education.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-space font-bold text-light group-hover:gradient-text transition-all mb-2">
                          {education.degree}
                        </h3>
                        <p className="text-primary font-semibold text-lg">
                          {education.university}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-lg bg-gradient-to-br ${education.color} text-white`}
                      >
                        <FaGraduationCap size={24} />
                      </motion.div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted">
                        <FaCalendar size={14} className="text-primary" />
                        <span>{education.completionYear} • {education.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted">
                        <FaMapPin size={14} className="text-primary" />
                        <span>{education.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted">
                        <FaTrophy size={14} className="text-primary" />
                        <span className="font-semibold text-light">
                          {education.cgpa ? `CGPA: ${education.cgpa}` : `Score: ${education.percentage}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="hidden md:flex w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-dark shadow-lg relative z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                </motion.div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">2023</div>
              <div className="text-muted">Graduated</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">7.51</div>
              <div className="text-muted">CGPA</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">ECE</div>
              <div className="text-muted">Specialization</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;