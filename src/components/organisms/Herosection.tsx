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
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
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
      <Image
        src={Me}
        alt="Background Image"
        className="object-cover w-full h-full opacity-30"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-white px-4 text-center">
        <Heading
          heading="Saurabh Soni"
          className="text-4xl md:text-6xl text-white font-bold"
        />

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-2">
          <Heading
            heading="I'm a"
            className="text-3xl md:text-4xl text-white font-semibold"
          />
          <div className="text-3xl md:text-4xl font-medium text-white">
            <span className="text-sky-600 font-bold border-b-2 border-sky-600">
              {currentText}
            </span>
            <span className="animate-blink">|</span>
          </div>
        </div>
      </div>

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
