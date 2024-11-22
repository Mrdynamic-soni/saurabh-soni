import React from "react";

const About: React.FC = () => {
  return (
    <section className="h-min-screen py-12 px-6 md:px-16 bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block">
          About
        </h2>
        <p className="text-gray-600 leading-relaxed mb-10 text-sm sm:text-base">
          I’m Saurabh Soni, a seasoned software engineer with expertise in
          front-end and full-stack development, specializing in React, React
          Native, and scalable web solutions. With a proven track record of
          delivering innovative projects and mentoring aspiring developers, I am
          passionate about leveraging technology to create impactful solutions.
          Open to freelance opportunities and collaborative ventures to build
          groundbreaking products.
        </p>

        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Image Section */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <img
              src="https://avatars.githubusercontent.com/u/61721761?s=400&u=3ca59ad71b95db0f87427648f33308e0c0d03f2a&v=4"
              alt="Profile"
              className="rounded-lg shadow-md w-48 h-48 sm:w-64 sm:h-64 object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
              Software Craftsman & Emerging Innovator
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base text-center lg:text-left">
              Crafting innovative software solutions with precision, creativity,
              and a passion for pushing technological boundaries.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base">
              <div>
                <p>
                  <strong>Birthday:</strong> 28th Aug 2000
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://electromonk.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    electro-monk
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>
                  <a
                    href="tel:+917234869244"
                    style={{
                      color: "#007bff",
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginLeft: "0.5rem",
                    }}
                  >
                    +91 7234869244
                  </a>
                </p>
                <p>
                  <strong>City:</strong> Banglore, India
                </p>
              </div>
              <div>
                <p>
                  <strong>Age:</strong>24
                </p>
                <p>
                  <strong>Degree:</strong> B.Tech
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:ssoni5930@gmail.com"
                    style={{
                      color: "#007bff",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    ssoni5930@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Freelance:</strong> Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-500">4</p>
            <p className="text-gray-600 text-sm sm:text-base">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-500">3</p>
            <p className="text-gray-600 text-sm sm:text-base">Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-500">1500+</p>
            <p className="text-gray-600 text-sm sm:text-base">
              Hours Of Support
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-500">32</p>
            <p className="text-gray-600 text-sm sm:text-base">Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
