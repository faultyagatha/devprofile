import React from "react";
import { FaGithub } from "react-icons/fa";

export const ProjectIcon = (): JSX.Element => (
  <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
    <FaGithub className="w-6 h-6" />
  </span>
);