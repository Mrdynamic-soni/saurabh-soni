"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FACEBOOK_LOGO,
  GITHUB_LOGO,
  GMAIL_LOGO,
  INSTAGRAM_LOGO,
  LINKEDIN_LOGO,
  TELEGRAM_LOGO,
  TOPMAT_LOGO,
  WHATSAPP_LOGO,
  YOUTUBE_LOGO,
} from "@/app/assests/svgConstants";

interface SocialMediaPlatform {
  id: number;
  platform: string;
  icon: string;
  onPressAction: () => void;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const sendMessageToWhatsApp = () => {
    const phoneNumber = "+917234869244";
    const mobileLink = `whatsapp://send?phone=${phoneNumber}`;
    const webLink = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    const desktopLink = `https://wa.me/${phoneNumber}`;
    if (
      typeof navigator !== "undefined" &&
      /android|iphone|ipad|ipod/i.test(navigator.userAgent)
    ) {
      window.open(mobileLink, "_self");
    } else if (navigator.userAgent.includes("WhatsApp")) {
      window.open(desktopLink, "_self");
    } else {
      window.open(webLink, "_blank");
    }
  };

  const handleComposeMail = () => {
    const mailto = "mailto:ssoni5930@gmail.com?subject=Hello&body=Hi there!";
    const webLink =
      "https://mail.google.com/mail/?view=cm&fs=1&to=ssoni5930@gmail.com&su=Hello&body=Hi there!";

    if (
      typeof navigator !== "undefined" &&
      /android|iphone|ipad|ipod/i.test(navigator.userAgent)
    ) {
      window.location.href = mailto;
    } else if (
      navigator.userAgent.includes("Macintosh") ||
      navigator.userAgent.includes("Mac OS")
    ) {
      window.open(mailto, "_blank");
    } else if (navigator.userAgent.includes("Gmail")) {
      window.open(webLink, "_self");
    } else if (navigator?.platform === "MacIntel") {
      window.open(webLink, "_self");
    } else {
      window.open(mailto, "_blank");
    }
  };

  const sendMessageToTelegram = () => {
    const username = "SAURABH_S_O_N_I";
    const mobileLink = `tg://resolve?domain=${username}`;
    const webLink = `https://web.telegram.org/#/im?p=@${username}`;
    const desktopLink = `https://t.me/${username}`;

    if (
      typeof navigator !== "undefined" &&
      /android|iphone|ipad|ipod/i.test(navigator.userAgent)
    ) {
      window.open(mobileLink, "_self");
    } else if (navigator.userAgent.includes("Telegram")) {
      window.open(desktopLink, "_self");
    } else {
      window.open(webLink, "_blank");
    }
  };

  const socialMediaPlatforms: SocialMediaPlatform[] = [
    {
      id: 0,
      platform: "Linkedin",
      icon: LINKEDIN_LOGO,
      onPressAction: () => {
        window.open(
          "https://www.linkedin.com/in/saurabh-soni-48a567166/",
          "_blank"
        );
      },
    },
    {
      id: 1,
      platform: "Topmate",
      icon: TOPMAT_LOGO,
      onPressAction: () => {
        window.open(
          "https://topmate.io/saurabh_soni/?utm_source=linkedin&utm_medium=product&utm_campaign=ss",
          "_blank"
        );
      },
    },
    {
      id: 2,
      platform: "Instagram",
      icon: INSTAGRAM_LOGO,
      onPressAction: () => {
        const username = "kalaakaar_soni";
        const mobileLink = `instagram://user?username=${username}`;
        const webLink = `https://www.instagram.com/${username}/`;

        if (
          typeof navigator !== "undefined" &&
          /android|iphone|ipad|ipod/i.test(navigator.userAgent)
        ) {
          window.location.href = mobileLink;
          setTimeout(() => {
            window.location.href = webLink;
          }, 1000);
        } else {
          window.open(webLink, "_blank");
        }
      },
    },
    {
      id: 3,
      platform: "Youtube",
      icon: YOUTUBE_LOGO,
      onPressAction: () => {
        window.open(
          "https://youtube.com/@electro_monk?si=TKzY2N9lIu0OwxJO",
          "_blank"
        );
      },
    },
    {
      id: 4,
      platform: "Facebook",
      icon: FACEBOOK_LOGO,
      onPressAction: () => {
        window.open("https://www.facebook.com", "_blank");
      },
    },
    {
      id: 5,
      platform: "Whatsapp",
      icon: WHATSAPP_LOGO,
      onPressAction: sendMessageToWhatsApp,
    },
    {
      id: 6,
      platform: "Telegram",
      icon: TELEGRAM_LOGO,
      onPressAction: () => {
        sendMessageToTelegram();
      },
    },
    {
      id: 7,
      platform: "Gmail",
      icon: GMAIL_LOGO,
      onPressAction: handleComposeMail,
    },
    {
      id: 8,
      platform: "Github",
      icon: GITHUB_LOGO,
      onPressAction: () => {
        window.open("https://github.com/Mrdynamic-soni", "_blank");
      },
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block">
        Contact
      </h2>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 sm:gap-8">
        <div className="mt-4 w-full sm:w-1/3 flex justify-center flex-wrap items-center gap-x-4 gap-y-4 sm:gap-y-0">
          {socialMediaPlatforms.map((item) => (
            <button
              key={item.id}
              className="flex justify-center items-center gap-x-4 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:bg-opacity-80"
              onClick={item.onPressAction}
              aria-label={`Visit ${item.platform}`}
            >
              <div className="bg-gray-300 p-3 rounded-full">
                <Image
                  src={item.icon}
                  height={24}
                  width={24}
                  alt={`${item.platform} logo`}
                  className="inline-block"
                />
              </div>
              {/* Hide the text on small screens */}
              <span className="hidden sm:inline-block text-gray-800 text-sm sm:text-base">
                {item.platform}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 w-full sm:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={6}
            />
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
