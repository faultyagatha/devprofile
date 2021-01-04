import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

interface ISocialIcon {
  name: string;
  [otherProps: string]: any;
}

export const SocialIcon = ({ name, ...otherProps }: ISocialIcon): JSX.Element => {
  const icons = {
    github: FaGithub,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn
  }

  const Icon = icons[name];

  return Icon ? <Icon {...otherProps} /> : null
}