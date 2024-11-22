// components/Skills.tsx
import React, { useEffect, useState } from "react";

// Define the structure of a skill
interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  // Skills data defined directly inside the component (similar to a JSON structure)
  const skillsData: Skill[] = [
    {
      name: "HTML",
      level: 100,
    },
    {
      name: "CSS",
      level: 90,
    },
    {
      name: "JAVASCRIPT",
      level: 75,
    },
    {
      name: "PHP",
      level: 80,
    },
    {
      name: "WORDPRESS/CMS",
      level: 90,
    },
    {
      name: "PHOTOSHOP",
      level: 55,
    },
  ];

  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    // Set skills data
    setSkills(skillsData);

    // Intersection Observer for progress bar animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    const section = document.getElementById("skills-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section
      id="skills-section"
      className="min-h-screen py-12 px-6 md:px-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block">
          Skills
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-md text-gray-900 font-semibold">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-full bg-blue-500 rounded-full ${
                    inView ? "transition-all duration-1000" : "w-0"
                  }`}
                  style={{ width: `${inView ? skill.level : 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
