import React from "react";
import Footer from "@/components/organisms/Footer";

const HireMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Hire Me</h1>
          <p className="text-base sm:text-lg mt-2">
            Let’s build something amazing together!
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 flex-grow">
        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">What I Offer</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:mx-48">
            {[
              {
                title: "Custom Software Development",
                description:
                  "Building scalable, user-friendly web and mobile apps tailored to your needs.",
              },
              {
                title: "IoT and Robotics Prototyping",
                description:
                  "Creating cutting-edge IoT devices and robotic solutions for real-world applications.",
              },
              {
                title: "Tech Consulting & Coaching",
                description:
                  "Providing expert guidance for tech teams and individuals to enhance your skills and strategies.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-base sm:text-lg mb-6">
            Ready to take your project to the next level? Reach out now!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/1cKK0etpe31bpkJi4u6gbYc_IbLnp4XGB/view"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              target="_blank"
              download
            >
              Download Resume
            </a>
            <a
              href="https://calendly.com/ssoni5930"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
            >
              Book an Appointment
            </a>
          </div>
        </section>
      </main>

      <section className="mt-8 flex-shrink-0">
        <Footer />
      </section>
    </div>
  );
};

export default HireMe;
