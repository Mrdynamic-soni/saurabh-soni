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
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Image Section */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-lg shadow-md w-48 h-48 sm:w-64 sm:h-64 object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
              UI/UX Designer & Web Developer.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base">
              <div>
                <p>
                  <strong>Birthday:</strong> 1 May 1995
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="http://www.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    www.example.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong> +123 456 7890
                </p>
                <p>
                  <strong>City:</strong> New York, USA
                </p>
              </div>
              <div>
                <p>
                  <strong>Age:</strong> 30
                </p>
                <p>
                  <strong>Degree:</strong> Master
                </p>
                <p>
                  <strong>Email:</strong> email@example.com
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
            <p className="text-3xl font-bold text-blue-500">232</p>
            <p className="text-gray-600 text-sm sm:text-base">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-500">521</p>
            <p className="text-gray-600 text-sm sm:text-base">Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-500">1453</p>
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
