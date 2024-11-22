import React, { useState, useEffect } from "react";
import Image from "next/image";
import Me from "../../app/assests/Images/Me.jpg";
import Heading from "../typography/Heading";

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Developer", "Mentor", "Trainer", "Entrepreneur", "Artist"];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopIndex % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, currentText.length - 1)
        : currentRole.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        // Move to the next word
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      }

      setTypingSpeed(isDeleting ? 100 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopIndex, typingSpeed, roles]);

  return (
    <div className="relative h-screen bg-gray-900">
      {/* Background Image */}
      <Image
        src={Me}
        alt="Background Image"
        className="object-cover w-full h-full opacity-30"
        priority
      />

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-white px-4 text-center">
        {/* Name Heading */}
        <Heading
          heading="Saurabh Soni"
          className="text-4xl md:text-6xl text-white"
          fontWeight="font-bold"
        />

        {/* Typing Effect */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-2">
          {/* Static Heading */}
          <Heading
            heading="I'm a"
            className="text-3xl md:text-4xl font-semibold text-white"
          />

          {/* Typing Effect */}
          <div className="text-3xl md:text-4xl font-medium text-white">
            <span className="text-sky-600 font-bold border-b-2 border-sky-600">
              {currentText}
            </span>
            <span className="animate-blink">|</span>
          </div>
        </div>
      </div>

      {/* Additional Tailwind CSS */}
      <style jsx>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
