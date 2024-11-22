"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 text-center">
      <p>
        &copy; {new Date().getFullYear()} Saurabh Soni. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
