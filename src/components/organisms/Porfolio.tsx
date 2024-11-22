import { FaGithub, FaLink, FaEye } from "react-icons/fa";

const portfolioData = [
  {
    title: "Project 1",
    description:
      "A full-stack web application built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Project 2",
    description:
      "A mobile app built with React Native for cross-platform development.",
    technologies: ["React Native", "Expo", "Firebase"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Project 3",
    description:
      "A data visualization dashboard using React, D3.js, and Chart.js.",
    technologies: ["React", "D3.js", "Chart.js"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Project 4",
    description:
      "An e-commerce website with user authentication, shopping cart, and checkout system.",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#",
  },
];

const PortfolioSection = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-16 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-gray-200 mb-6 border-b-4 border-blue-500 inline-block">
        My Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {portfolioData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-300 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-blue-900 text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-600"
              >
                <FaLink size={20} />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <FaEye size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
