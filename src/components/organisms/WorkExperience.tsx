"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCalendar, FaMapPin, FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";

const workExperienceData = [
  {
    title: "Software Engineer",
    company: "Securonix",
    duration: "Jul 2024 - Present",
    location: "Bengaluru, Karnataka, India",
    type: "Full-time",
    color: "from-primary to-accent",
    achievements: [
      "Leveraged JavaScript and Python to develop and automate software solutions, significantly enhancing team productivity and reducing repetitive tasks.",
      "Contributed to system architecture and implemented scalable solutions using MySQL and AWS, ensuring optimal performance and security in software applications.",
      "Played a key role in fostering DevOps practices, streamlining CI/CD pipelines, and implementing automated testing, leading to improved software quality and workflow efficiency.",
    ],
    skills: ["JavaScript", "Python", "MySQL", "AWS", "DevOps"],
  },
  {
    title: "Software Engineer",
    company: "timelyAI",
    duration: "Jun 2023 - Jul 2024",
    location: "India",
    type: "Full-time",
    color: "from-secondary to-primary",
    achievements: [
      "Spearheaded 90% of the React Native app development, focusing on optimizing performance through engaging animations.",
      "Implemented a secure Multi-Login System from scratch, integrating backend and API seamlessly.",
      "Engineered an automated mailer system, delivering dynamic content emails during user onboarding.",
    ],
    skills: ["React Native", "MERN Stack", "AWS Lambda", "Express.js", "Node.js"],
  },
  {
    title: "Software Engineer Intern",
    company: "Exora Labs",
    duration: "Feb 2023 - Jun 2023",
    location: "Remote",
    type: "Internship",
    color: "from-accent to-secondary",
    achievements: [
      "Developed user interfaces utilizing HTML5, CSS3, JavaScript, Nest, Next, PostgreSQL.",
      "Modified existing software to correct errors and improve performance.",
      "Collaborated with other developers to ensure code quality and functionality.",
    ],
    skills: ["React.js", "NestJS", "Express.js", "Node.js", "Next.js"],
  },
  {
    title: "Certified Python Mentor",
    company: "Codeyoung",
    duration: "Jul 2021 - Jun 2023",
    location: "Remote",
    type: "Part-time",
    color: "from-primary to-secondary",
    achievements: [
      "Worked on training students for Python programming and development, mentoring them on project development.",
      "Trained more than 100 students, completing over 600 hours of training.",
      "Taught topics including Python, OOPs, Tkinter, SQL, sci-kit-learn, machine learning, and more.",
    ],
    skills: ["Python", "SQL", "Machine Learning", "Tkinter"],
  },
];

const WorkExperienceSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [expanded, setExpanded] = useState(false);
  const experiencesToShow = expanded ? workExperienceData : workExperienceData.slice(0, 3);

  return (
    <section className="min-h-screen py-20 px-4 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
            <span className="text-light">Work </span>
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto">
            Professional journey building innovative solutions and leading technical teams
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-30" />

          <div className="space-y-12">
            <AnimatePresence>
              {experiencesToShow.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="w-full md:w-5/12 glass-effect rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden ml-16 md:ml-0"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${experience.color} text-white font-medium`}>
                              {experience.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-space font-bold text-light group-hover:gradient-text transition-all mb-2">
                            {experience.title}
                          </h3>
                          <p className="text-primary font-semibold text-lg">
                            {experience.company}
                          </p>
                        </div>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`p-3 rounded-lg bg-gradient-to-br ${experience.color} text-white`}
                        >
                          <FaBriefcase size={20} />
                        </motion.div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-muted">
                          <FaCalendar size={14} className="text-primary" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted">
                          <FaMapPin size={14} className="text-primary" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted text-sm leading-relaxed flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, i) => (
                            <motion.span
                              key={i}
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

                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="absolute left-7 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-dark shadow-lg z-10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Show More/Less Button */}
        {workExperienceData.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setExpanded(!expanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <span>{expanded ? "Show Less" : "Show More"}</span>
              {expanded ? <FaChevronUp /> : <FaChevronDown />}
            </motion.button>
          </motion.div>
        )}

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <div className="text-muted">Years Experience</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">4+</div>
              <div className="text-muted">Companies</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">100+</div>
              <div className="text-muted">Students Mentored</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">600+</div>
              <div className="text-muted">Training Hours</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;