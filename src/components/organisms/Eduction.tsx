import { FaCalendar, FaMapPin } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    university: "MMMUT Gorakhpur",
    completionYear: "2023",
    duration: "4 years",
    location: "Gorakhpur, Uttar Pradesh, India",
    cgpa: "7.51/10.0",
  },
  {
    degree: "Intermediate",
    university: "ISC Heliger Borden Education Centre",
    completionYear: "2017",
    duration: "2 years",
    location: "Kanpur, Uttar Pradesh, India",
    percentage: "81.0%",
  },
  {
    degree: "High School",
    university: "ICSE Heliger Borden Education Centre",
    completionYear: "2015",
    duration: "2 years",
    location: "Kanpur, Uttar Pradesh, India",
    percentage: "81.4%",
  },
];

const EducationSection = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block">
        Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {educationData.map((education, index) => (
          <div
            key={`${education.university}-${index}`}
            className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-200"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {education.degree}
              </h3>
              <p className="text-lg text-blue-600">{education.university}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center text-gray-600">
                <FaCalendar size={16} className="mr-2" />
                <span className="text-sm">{education.completionYear}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapPin size={16} className="mr-2" />
                <span className="text-sm">{education.location}</span>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-gray-700 mb-2">Duration</h4>
              <p className="text-gray-600">{education.duration}</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700 mb-2">
                {education.cgpa ? "CGPA" : "Percentage"}
              </h4>
              <p className="text-gray-600">
                {education.cgpa || education.percentage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
