"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const portfolioData = [
  {
    type: "tech",
    title: "Zelvyn",
    description:
      "A platform connecting artists with clients, allowing artists to showcase their portfolios and get freelance opportunities. I am building Zelvyn as a mediator platform with a scalable web app, multi-language support, and easy onboarding for both artists and clients.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "AWS",
    ],
    githubLink: "https://github.com/zelvyn/landing-page", // Replace with GitHub repo if available
    liveLink: "https://zelvyn.vercel.app/", // Replace with live demo link once deployed
  },
  {
    type: "tech",
    title: "Encase",
    description:
      "A full-stack web application built with Next.js 14, focused on personal interviews. I contributed 20% to the project, which includes features like user authentication, an interview scheduling system, and a personalized dashboard for users to track their interview progress.",
    technologies: ["Next.js", "Tailwind CSS", "Redux", "Authentication"],
    githubLink: "#",
    liveLink: "https://encase.ai/",
  },
  {
    type: "tech",
    title: "Pune Software Technologies",
    description:
      "Developed a promotional website for an EdTech institute offering courses in SAP, Web Development, and Cybersecurity. Built with Next.js, Tailwind CSS, and Zustand on the frontend, and Node.js, Express, PostgreSQL on the backend to deliver a responsive, dynamic, and scalable platform.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    githubLink: "#",
    liveLink: "https://www.punesoftwaretechnologies.com/",
  },
  {
    type: "art",
    title: "Best Artwork",
    images: [
      "https://i.ibb.co/V03G4GXQ/Screenshot-from-2025-09-01-17-32-49.png",
    ],
    instagramLink: "https://www.instagram.com/kalaakaar_soni/",
    facebookLink: "https://www.facebook.com/saurabh.soni.3998/",
  },
  {
    type: "photo",
    title: "Best Photograph",
    images: [
      "https://i.ibb.co/DH3Csfd9/Screenshot-from-2025-09-01-17-38-36.png",
    ],
    instagramLink: "https://www.instagram.com/kalaakaar_soni/",
    facebookLink: "https://www.facebook.com/saurabh.soni.3998/",
  },
  {
    type: "youtube",
    title: "Tyrant Bot - My RC Car Project",
    videoLink: "https://www.youtube.com/embed/mdaS2J4i0MM",
    youtubeLink: "https://www.youtube.com/@electro_monk",
    websiteLink: "https://electromonk.vercel.app/",
  },
];

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="min-h-screen py-20 px-4 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

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
            <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto">
            Explore my latest projects and creative works across different
            domains
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-space font-bold text-light mb-4 group-hover:gradient-text transition-all">
                {project.title}
              </h3>

              {project.type === "tech" && (
                <>
                  <p className="text-muted mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 px-4 py-2 bg-dark border border-primary/30 rounded-lg text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      <FaGithub size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      <FaExternalLinkAlt size={14} />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  </div>
                </>
              )}

              {(project.type === "art" || project.type === "photo") && (
                <>
                  {project.images?.map((image, i) => (
                    <div
                      key={i}
                      className="relative mb-6 overflow-hidden rounded-lg"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} ${i + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        width={400}
                        height={200}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                    </div>
                  ))}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-secondary to-accent text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      Instagram
                    </motion.a>
                    <motion.a
                      href={project.facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      Facebook
                    </motion.a>
                  </div>
                </>
              )}

              {project.type === "youtube" && (
                <>
                  <div className="relative pb-[56.25%] mb-6 overflow-hidden rounded-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={project.videoLink}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      YouTube
                    </motion.a>
                    <motion.a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-accent to-primary text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      Website
                    </motion.a>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
