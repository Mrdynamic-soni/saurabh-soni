"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { number: "50+", label: "Happy Clients", color: "from-primary to-accent" },
    { number: "100+", label: "Projects Completed", color: "from-secondary to-primary" },
    { number: "3000+", label: "Hours of Coding", color: "from-accent to-secondary" },
    { number: "24/7", label: "Support Available", color: "from-primary to-secondary" },
  ];

  const personalInfo = [
    { label: "Birthday", value: "28th Aug 2000" },
    { label: "Website", value: "electro-monk", link: "https://electromonk.vercel.app/" },
    { label: "Phone", value: "+91 7234869244", link: "tel:+917234869244" },
    { label: "City", value: "Bangalore, India" },
    { label: "Age", value: "24" },
    { label: "Degree", value: "B.Tech" },
    { label: "Email", value: "ssoni5930@gmail.com", link: "mailto:ssoni5930@gmail.com" },
    { label: "Freelance", value: "Available" },
  ];

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
            <span className="gradient-text">About</span>
            <span className="text-light"> Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-16 h-16 border-2 border-primary/30 border-dashed rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-12 h-12 border-2 border-secondary/30 border-dashed rounded-full"
              />
              
              {/* Main Image */}
              <div className="relative w-80 h-80 mx-auto glass-effect rounded-2xl p-4 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://avatars.githubusercontent.com/u/61721761?s=400&u=3ca59ad71b95db0f87427648f33308e0c0d03f2a&v=4"
                  alt="Saurabh Soni - Full Stack Developer"
                  className="w-full h-full object-cover rounded-xl"
                  width={320}
                  height={320}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl" />
              </div>
            </div>
          </motion.div>

          {/* Right - Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-space font-bold text-light mb-4">
                Software Craftsman &
                <span className="gradient-text"> Tech Innovator</span>
              </h3>
              <p className="text-muted text-lg leading-relaxed mb-6">
                I&apos;m Saurabh Soni, a passionate full-stack developer with expertise in modern web technologies. 
                I specialize in React, Next.js, and scalable cloud solutions, with a proven track record of 
                delivering innovative projects and mentoring aspiring developers.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Passionate about leveraging cutting-edge technology to create impactful solutions that push 
                the boundaries of what&apos;s possible in the digital realm.
              </p>
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 glass-effect rounded-lg hover:border-primary/50 transition-colors"
                >
                  <span className="text-primary font-semibold min-w-[80px]">
                    {info.label}:
                  </span>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-light hover:text-accent transition-colors underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-light">{info.value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 glass-effect rounded-xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                {stat.number}
              </div>
              <p className="text-muted font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;