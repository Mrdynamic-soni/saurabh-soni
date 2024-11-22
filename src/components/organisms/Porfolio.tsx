import { FaGithub, FaEye } from "react-icons/fa";
// import Slider from "react-slick";

const portfolioData = [
  {
    type: "tech",
    title: "Enacse",
    description:
      "A full-stack web application built with Next.js 14, focused on personal interviews. I contributed 20% to the project, which includes features like user authentication, an interview scheduling system, and a personalized dashboard for users to track their interview progress.",
    technologies: ["Next.js", "Tailwind CSS", "Redux", "Authentication"],
    githubLink: "#",
    liveLink: "https://encase.ai/",
  },
  {
    type: "art",
    title: "Best Artwork ",
    images: [
      "https://scontent.fblr24-3.fna.fbcdn.net/v/t1.6435-9/118627984_1773821676106984_6208686349899203508_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=OyZTZd1PHEgQ7kNvgFB4e7E&_nc_zt=23&_nc_ht=scontent.fblr24-3.fna&_nc_gid=AHMLZa4GNxyKe3JVtOHpN9X&oh=00_AYAnmL_iL72ig0Q3P7Mdn-5M59noO4yVi4DBtgXXiZJopQ&oe=67684B67",
    ],
  },
  {
    type: "photo",
    title: "Best Photograph",
    images: [
      "https://scontent.fblr24-1.fna.fbcdn.net/v/t1.6435-9/43614517_1194733364015821_3418633799695597568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=oZCGm3IN27IQ7kNvgEcGWyr&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=ABpvPLi8bD44Ev14665A3_p&oh=00_AYAWolx7qIW84n1U2l1gOExJxqWaPo6lakWxSJ59TcQ25w&oe=67684B56",
    ],
  },
];

const PortfolioSection = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-16 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-gray-200 mb-6 border-b-4 border-blue-500 inline-block">
        My Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {portfolioData.map((project, index) =>
          project.type === "tech" ? (
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
                {/* Check if technologies exist before rendering */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies && project.technologies.length > 0 ? (
                    project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-blue-900 text-blue-200"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400">
                      No technologies listed
                    </span>
                  )}
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
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaEye size={20} />
                </a>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                {project.title}
              </h3>

              {/* Check if images exist before rendering */}
              {project?.images && project?.images?.length > 0 ? (
                project.images.map((image, i) => (
                  <div key={i} className="relative">
                    <img
                      src={image}
                      alt={`image-${i}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))
              ) : (
                <span className="text-gray-400">No images available</span>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PortfolioSection;
