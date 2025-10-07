"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  color: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

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
    sendToWhatsApp();
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
      platform: "LinkedIn",
      icon: LINKEDIN_LOGO,
      color: "hover:bg-blue-600",
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
      color: "hover:bg-green-600",
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
      color: "hover:bg-pink-600",
      onPressAction: () => {
        const username = "kalaakaar_soni";
        const mobileLink = `instagram://user?username=${username}`;
        const webLink = `https://www.instagram.com/${username}/`;

        if (typeof navigator !== "undefined") {
          const isMobile = /android|iphone|ipad|ipod/i.test(
            navigator.userAgent
          );

          if (isMobile) {
            const iframe = document.createElement("iframe");
            iframe.style.display = "none";
            iframe.src = mobileLink;
            document.body.appendChild(iframe);

            setTimeout(() => {
              document.body.removeChild(iframe);
              window.location.href = webLink;
            }, 500);
          } else {
            window.open(webLink, "_blank");
          }
        }
      },
    },
    {
      id: 3,
      platform: "YouTube",
      icon: YOUTUBE_LOGO,
      color: "hover:bg-red-600",
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
      color: "hover:bg-blue-700",
      onPressAction: () => {
        window.open("https://www.facebook.com", "_blank");
      },
    },
    {
      id: 5,
      platform: "WhatsApp",
      icon: WHATSAPP_LOGO,
      color: "hover:bg-green-500",
      onPressAction: sendMessageToWhatsApp,
    },
    {
      id: 6,
      platform: "Telegram",
      icon: TELEGRAM_LOGO,
      color: "hover:bg-blue-500",
      onPressAction: () => {
        sendMessageToTelegram();
      },
    },
    {
      id: 7,
      platform: "Gmail",
      icon: GMAIL_LOGO,
      color: "hover:bg-red-500",
      onPressAction: handleComposeMail,
    },
    {
      id: 8,
      platform: "GitHub",
      icon: GITHUB_LOGO,
      color: "hover:bg-gray-600",
      onPressAction: () => {
        window.open("https://github.com/Mrdynamic-soni", "_blank");
      },
    },
  ];

  const sendToWhatsApp = () => {
    const phoneNumber = "+917234869244";
    const { message } = formData;
    const encodedMessage = encodeURIComponent(message);

    const mobileLink = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    const webLink = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    const desktopLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

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

  return (
    <section className="min-h-screen py-20 px-4 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
            <span className="gradient-text">Get In</span>
            <span className="text-light"> Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s connect and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-space font-bold text-light mb-6">
                Connect With Me
              </h3>
              <p className="text-muted text-lg mb-8">
                Follow me on social media for updates, insights, and behind-the-scenes content.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socialMediaPlatforms.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center gap-3 p-4 glass-effect rounded-xl transition-all duration-300 group ${item.color}`}
                  onClick={item.onPressAction}
                  aria-label={`Visit ${item.platform}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Image
                      src={item.icon}
                      height={24}
                      width={24}
                      alt={`${item.platform} logo`}
                    />
                  </div>
                  <span className="text-light text-sm font-medium group-hover:text-white transition-colors">
                    {item.platform}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-space font-bold text-light mb-6">
                Send a Message
              </h3>
              <p className="text-muted text-lg mb-8">
                Have a project in mind? Drop me a message and let&apos;s discuss how we can work together.
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-light font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-4 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light placeholder-muted transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-light font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full p-4 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light placeholder-muted transition-all duration-300"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-light font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full p-4 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light placeholder-muted transition-all duration-300 resize-none"
                  rows={6}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-all duration-300 neon-glow"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;