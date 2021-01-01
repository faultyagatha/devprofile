import React from "react";
import {
  FaGithub,
  FaMediumM,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

interface ISocialIcon {
  name: string;
  [otherProps: string]: any;
}

export const SocialIcon = ({ name, ...otherProps }: ISocialIcon): JSX.Element => {
  const icons = {
    github: FaGithub,
    medium: FaMediumM,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    twitter: FaTwitter
  }

  const Icon = icons[name]

  return Icon ? <Icon {...otherProps} /> : null
}