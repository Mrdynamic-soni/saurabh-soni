import React from "react";
import { Metadata } from "next";
import HireMeClient from "@/components/organisms/HireMeClient";

export const metadata: Metadata = {
  title: "Hire Me - Saurabh Soni",
  description: "Ready to work with an experienced Full Stack Developer? I offer custom software development, IoT solutions, and tech consulting services.",
  alternates: {
    canonical: 'https://saurabh.vercel.app/hireme',
  },
};

const HireMe: React.FC = () => {
  return <HireMeClient />;
};

export default HireMe;