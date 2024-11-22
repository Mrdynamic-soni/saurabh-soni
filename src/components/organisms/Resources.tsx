import { FaDownload, FaFileAlt, FaLink } from "react-icons/fa";

const resourcesData = [
  {
    title: "Resume",
    description: "Download my latest resume in PDF format.",
    fileLink: "/path/to/your/resume.pdf", // Replace with actual resume link
    icon: <FaFileAlt size={20} />,
    download: true,
  },
  {
    title: "GitHub Profile",
    description: "Explore my open-source contributions and repositories.",
    fileLink: "https://github.com/yourusername", // Replace with your actual GitHub link
    icon: <FaLink size={20} />,
    download: false,
  },
  {
    title: "LinkedIn Profile",
    description:
      "Connect with me on LinkedIn to discuss opportunities or projects.",
    fileLink: "https://www.linkedin.com/in/yourusername", // Replace with LinkedIn link
    icon: <FaLink size={20} />,
    download: false,
  },
  {
    title: "Blog - Tech Insights",
    description:
      "Read my latest tech blogs on software development and programming.",
    fileLink: "https://yourblog.com", // Replace with your actual blog link
    icon: <FaLink size={20} />,
    download: false,
  },
];

const ResourcesSection = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-16 bg-gray-800">
      <h2 className="text-3xl font-bold text-gray-100 mb-6 border-b-4 border-blue-500 inline-block">
        Resources
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {resourcesData.map((resource, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-blue-600 dark:text-blue-400">
                {resource.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 dark:text-white">
                  {resource.title}
                </h3>
                <p className="text-gray-400 dark:text-gray-300">
                  {resource.description}
                </p>
              </div>
            </div>

            {resource.download ? (
              <a
                href={resource.fileLink}
                download
                className="inline-block px-4 py-1.5 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 text-sm"
              >
                <FaDownload size={16} className="mr-2" />
                Download Resume
              </a>
            ) : (
              <a
                href={resource.fileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-1.5 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 text-sm"
              >
                <FaLink size={16} className="mr-2" />
                View Resource
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
