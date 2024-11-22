import {
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Software Development",
    description:
      "Leveraged JavaScript, Python, and cloud technologies to develop scalable and secure solutions, optimizing team productivity and streamlining workflows.",
    icon: <FaLaptopCode size={40} className="text-blue-500" />,
    skills: ["JavaScript", "Python", "AWS", "Node.js", "React", "MySQL"],
  },
  {
    title: "Cloud Solutions & DevOps",
    description:
      "Designed and implemented cloud infrastructure, automated deployments, and CI/CD pipelines, improving the scalability and efficiency of systems.",
    icon: <FaCloud size={40} className="text-blue-500" />,
    skills: ["AWS Lambda", "Docker", "CI/CD", "AWS", "Serverless"],
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Built full-stack applications using the MERN stack, focusing on user experience and seamless front-end and back-end integration.",
    icon: <FaDatabase size={40} className="text-blue-500" />,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Next.js",
      "PostgreSQL",
    ],
  },
  {
    title: "Training & Mentoring",
    description:
      "Mentored over 100 students in Python and full-stack development, providing hands-on training on core programming concepts and technologies.",
    icon: <FaChalkboardTeacher size={40} className="text-blue-500" />,
    skills: ["Python", "SQL", "Machine Learning", "React", "Node.js"],
  },
  {
    title: "UI/UX Design & Development",
    description:
      "Specialized in creating responsive and intuitive user interfaces that improve user engagement and overall experience across platforms.",
    icon: <FaUsers size={40} className="text-blue-500" />,
    skills: ["React", "Material-UI", "CSS", "Bootstrap", "HTML5"],
  },
];

const ServicesSection = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-4 border-blue-500 inline-block">
        Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {service.description}
            </p>

            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
