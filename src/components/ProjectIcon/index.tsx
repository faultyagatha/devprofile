import React from "react";
import { FaCompass, FaGithub } from "react-icons/fa";

interface IProjectIcon {
  icon: string;
}

export const ProjectIcon = ({ icon }: IProjectIcon): JSX.Element => (
  <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
    {icon === "github" ? (
      <FaGithub className="w-6 h-6" />
    ) : (
        <FaCompass className="w-6 h-6" />
      )}
  </span>
);