"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RESUME } from "@/utils/data";
import { FaFileAlt, FaGithub, FaLinkedin, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

const resourcesData = [
  {
    title: "Resume",
    description: "View or download my latest resume in PDF format. It highlights my skills, projects, and experience in software development, cloud solutions, and more.",
    fileLink: RESUME,
    icon: <FaFileAlt size={24} />,
    color: "from-primary to-accent",
    type: "PDF",
  },
  {
    title: "GitHub Profile",
    description: "Check out my GitHub for open-source contributions, projects, and code snippets. Let's collaborate on exciting tech projects.",
    fileLink: "https://github.com/Mrdynamic-soni",
    icon: <FaGithub size={24} />,
    color: "from-secondary to-primary",
    type: "Profile",
  },
  {
    title: "LinkedIn Profile",
    description: "Connect with me on LinkedIn to discuss opportunities, share ideas, or collaborate on tech projects. Let's grow our network!",
    fileLink: "https://www.linkedin.com/in/saurabh-soni-48a567166/",
    icon: <FaLinkedin size={24} />,
    color: "from-accent to-secondary",
    type: "Network",
  },
  {
    title: "YouTube Channel",
    description: "Watch tutorials on my YouTube channel covering software development, hardware projects, and more. Don't forget to subscribe for updates!",
    fileLink: "https://www.youtube.com/@electro_monk",
    icon: <FaYoutube size={24} />,
    color: "from-primary to-secondary",
    type: "Videos",
  },
];

const ResourcesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="min-h-screen py-20 px-4 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

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
            <span className="gradient-text">Resources</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto">
            Essential resources to learn more about my work and connect with me
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resourcesData.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${resource.color} text-white`}
                    >
                      {resource.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-space font-bold text-light group-hover:gradient-text transition-all mb-1">
                        {resource.title}
                      </h3>
                      <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${resource.color} text-white font-medium`}>
                        {resource.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted mb-8 leading-relaxed">
                  {resource.description}
                </p>

                {/* Action Button */}
                <motion.a
                  href={resource.fileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group-hover:neon-glow"
                >
                  <FaExternalLinkAlt size={16} />
                  <span>View Resource</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-space font-bold text-light mb-8">
            Quick <span className="gradient-text">Access</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {resourcesData.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.fileLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`p-4 glass-effect rounded-xl hover:border-primary/50 transition-all duration-300 group`}
              >
                <div className={`text-2xl bg-gradient-to-br ${resource.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                  {resource.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;