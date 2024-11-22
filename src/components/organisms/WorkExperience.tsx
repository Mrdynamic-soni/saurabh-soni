import { useState } from "react";
import { FaCalendar, FaMapPin } from "react-icons/fa";

const workExperienceData = [
  {
    title: "Software Engineer",
    company: "Securonix",
    duration: "Jul 2024 - Present",
    location: "Bengaluru, Karnataka, India",
    type: "Full-time",
    achievements: [
      "Leveraged JavaScript and Python to develop and automate software solutions, significantly enhancing team productivity and reducing repetitive tasks.",
      "Contributed to system architecture and implemented scalable solutions using MySQL and AWS, ensuring optimal performance and security in software applications.",
      "Played a key role in fostering DevOps practices, streamlining CI/CD pipelines, and implementing automated testing, leading to improved software quality and workflow efficiency.",
    ],
    skills: ["Engineering", "Software Design"],
  },
  {
    title: "Software Engineer",
    company: "timelyAI",
    duration: "Jun 2023 - Jul 2024",
    location: "India",
    type: "Full-time",
    achievements: [
      "Spearheaded 90% of the React Native app development, focusing on optimizing performance through engaging animations.",
      "Implemented a secure Multi-Login System from scratch, integrating backend and API seamlessly.",
      "Engineered an automated mailer system, delivering dynamic content emails during user onboarding.",
    ],
    skills: [
      "MERN Stack",
      "React Native",
      "AWS Lambda",
      "Express.js",
      "Node.js",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Various Companies",
    duration: "Feb 2023 - Jun 2023",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Developed user interfaces utilizing HTML5, CSS3, JavaScript, Nest, Next, PostgreSQL.",
      "Modified existing software to correct errors and improve performance.",
      "Collaborated with other developers to ensure code quality and functionality.",
    ],
    skills: ["React.js", "NestJS", "Express.js", "Node.js", "Next.js"],
  },
  {
    title: "Certified Python Mentor",
    company: "Codeyoung",
    duration: "Jul 2021 - Jun 2023",
    location: "Remote",
    type: "Part-time",
    achievements: [
      "Worked on training students for Python programming and development, mentoring them on project development.",
      "Trained more than 100 students, completing over 600 hours of training.",
      "Taught topics including Python, OOPs, Tkinter, SQL, sci-kit-learn, machine learning, and more.",
    ],
    skills: ["Python", "SQL", "Jupyter", "Tkinter"],
  },
  {
    title: "Full-stack Developer",
    company: "Exora Labs",
    duration: "Feb 2023 - Apr 2023",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Collaborated with other developers to ensure code quality and functionality.",
      "Developed user interfaces utilizing HTML5, CSS3, JavaScript, Nest, Next, PostgreSQL.",
      "Modified existing software to correct errors and adapt it to new hardware.",
    ],
    skills: [
      "React.js",
      "NestJS",
      "Express.js",
      "Node.js",
      "JavaScript",
      "Bootstrap",
      "Next.js",
    ],
  },
  {
    title: "Frontend Developer",
    company: "RMgX Technologies LLP",
    duration: "Nov 2022 - Jan 2023",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Developed 65% of the front-end code, contributing to multiple projects for UI creation and code updates.",
      "Integrated 50% of APIs using Axios for seamless front-end and back-end communication.",
      "Boosted project speed by 35% through strategic optimizations.",
    ],
    skills: [
      "React.js",
      "Material-UI",
      "HTML5",
      "JavaScript",
      "Bootstrap",
      "CSS",
      "Next.js",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "Matrix Nodes",
    duration: "May 2022 - Aug 2022",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Developed backend APIs with Node.js, Express.js, MongoDB, and Mongoose.",
      "Developed front-end features using React.js, HTML, and CSS.",
      "Integrated backend APIs with frontend for live server interactions.",
    ],
    skills: ["React.js", "Express.js", "Node.js", "JavaScript", "MongoDB"],
  },
  {
    title: "Internet of Things Research Intern",
    company: "Codebugged",
    duration: "Jan 2020 - Jun 2021",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Worked on the development of wireless sensor nodes capable of reading environmental data and sending it to the cloud.",
      "Used Flask for web development and MySQL for storing data.",
      "Implemented real-time data visualization and plotting.",
    ],
    skills: ["Web Development", "Arduino", "Data Visualization", "Flask"],
  },
  {
    title: "Campus Ambassador",
    company: "Unacademy",
    duration: "Dec 2020 - Feb 2021",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Promoted Unacademy courses and helped with community engagement.",
    ],
    skills: ["Marketing", "Community Engagement"],
  },
  {
    title: "Campus Ambassador",
    company: "INDIAN ROBOTICS COMMUNITY",
    duration: "Oct 2020 - Dec 2020",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Organized online events such as Web-Expo for the robotics community.",
    ],
    skills: ["Event Management", "Community Building"],
  },
  {
    title: "Instructor",
    company: "Edu-Vitae Services",
    duration: "Jun 2020",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Taught interfacing with Arduino, Raspberry Pi, and cloud technologies.",
    ],
    skills: ["IoT", "Robotics", "Arduino", "Raspberry Pi"],
  },
  {
    title: "Subject Matter Expert",
    company: "Instasolv",
    duration: "Oct 2019 - Mar 2020",
    location: "Remote",
    type: "Freelance",
    achievements: [
      "Provided doubt clearing services and reviewed answers for students.",
    ],
    skills: ["Education", "Subject Matter Expertise"],
  },
];

const WorkExperienceSection = () => {
  const [expanded, setExpanded] = useState(false); // Track if the "Show More" button is clicked

  const experiencesToShow = expanded
    ? workExperienceData
    : workExperienceData.slice(0, 3); // Show all or the first 3 experiences

  return (
    <div className="min-h-screen py-12  px-6 md:px-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block dark:text-white">
        Work Experience
      </h2>

      <div className="space-y-6">
        {experiencesToShow.map((experience, index) => (
          <div
            key={`${experience.company}-${index}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {experience.title}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400">
                  {experience.company}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-0">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaCalendar size={16} className="mr-2" />
                  <span className="text-sm">{experience.duration}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaMapPin size={16} className="mr-2" />
                  <span className="text-sm">{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Expanded content for each experience */}
            <div>
              {experience.achievements.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
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
          </div>
        ))}

        {/* Show More / Show Less button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline focus:outline-none"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
