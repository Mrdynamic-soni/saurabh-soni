"use client";
import React, { FC, HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLParagraphElement> {
  heading: string;
  fontSize?: "text-sm" | "text-base" | "text-lg";
  fontWeight?: "font-light" | "font-normal" | "font-bold";
}

const Heading: FC<HeadingProps> = ({
  heading,
  fontSize = "text-base",
  fontWeight = "font-normal",
  className = "",
  ...rest
}) => {
  return (
    <p className={`${fontSize} ${fontWeight} ${className}`} {...rest}>
      {heading}
    </p>
  );
};

export default Heading;
