"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillsData: Skill[] = [
    { name: "HTML", level: 100, category: "Frontend" },
    { name: "CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 80, category: "Frontend" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "React Native", level: 90, category: "Mobile" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Express.js", level: 75, category: "Backend" },
    { name: "Nest.js", level: 70, category: "Backend" },
    { name: "Python", level: 80, category: "Backend" },
    { name: "PostgreSQL", level: 70, category: "Database" },
    { name: "MongoDB", level: 70, category: "Database" },
    { name: "MySQL", level: 75, category: "Database" },
    { name: "AWS", level: 80, category: "Cloud" },
    { name: "Git", level: 80, category: "Tools" },
    { name: "WordPress/CMS", level: 90, category: "Tools" },
  ];

  const categories = ["Frontend", "Backend", "Mobile", "Database", "Cloud", "Tools"];

  const getSkillsByCategory = (category: string) => 
    skillsData.filter(skill => skill.category === category);

  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: "from-primary to-accent",
      Backend: "from-secondary to-primary",
      Mobile: "from-accent to-secondary",
      Database: "from-primary to-secondary",
      Cloud: "from-secondary to-accent",
      Tools: "from-accent to-primary",
    };
    return colors[category as keyof typeof colors] || "from-primary to-secondary";
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
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
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-space font-bold gradient-text mb-6">
                {category}
              </h3>
              
              <div className="space-y-4">
                {getSkillsByCategory(category).map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-light font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="relative h-2 bg-dark/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${getCategoryColor(category)} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">6+</div>
              <div className="text-muted">Categories</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">16+</div>
              <div className="text-muted">Technologies</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <div className="text-muted">Years Experience</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">100+</div>
              <div className="text-muted">Projects Built</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;