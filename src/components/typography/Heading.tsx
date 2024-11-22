"use client";
import React, { FC, HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLParagraphElement> {
  heading: string;
}

const Heading: FC<HeadingProps> = ({ heading, className = "", ...rest }) => {
  return (
    <p className={`${className}`} {...rest}>
      {heading}
    </p>
  );
};

export default Heading;
