import { FaFileAlt, FaLink } from "react-icons/fa";

const resourcesData = [
  {
    title: "Resume",
    description:
      "View or download my latest resume in PDF format. It highlights my skills, projects, and experience in software development, cloud solutions, and more.",
    fileLink:
      "https://drive.google.com/file/d/1cKK0etpe31bpkJi4u6gbYc_IbLnp4XGB/view?usp=sharing", // Replace with actual resume link
    icon: <FaFileAlt size={20} />,
  },
  {
    title: "GitHub Profile",
    description:
      "Check out my GitHub for open-source contributions, projects, and code snippets. Let’s collaborate on exciting tech projects.",
    fileLink: "https://github.com/Mrdynamic-soni", // Replace with your actual GitHub link
    icon: <FaLink size={20} />,
  },
  {
    title: "LinkedIn Profile",
    description:
      "Connect with me on LinkedIn to discuss opportunities, share ideas, or collaborate on tech projects. Let’s grow our network!",
    fileLink: "https://www.linkedin.com/in/saurabh-soni-48a567166/", // Replace with LinkedIn link
    icon: <FaLink size={20} />,
  },
  {
    title: "Tech Tutorials - YouTube Channel",
    description:
      "Watch tutorials on my YouTube channel covering software development, hardware projects, and more. Don’t forget to subscribe for updates!",
    fileLink: "https://www.youtube.com/@electro_monk", // Replace with your actual YouTube link
    icon: <FaLink size={20} />,
  },
];

const ResourcesSection = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block">
        Resources
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {resourcesData.map((resource, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              {/* <div className="text-blue-600">{resource.icon}</div> */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {resource.title}
                </h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            </div>
            <a
              href={resource.fileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-1.5 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 text-sm"
            >
              <FaLink size={16} className="mr-2" />
              View Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
