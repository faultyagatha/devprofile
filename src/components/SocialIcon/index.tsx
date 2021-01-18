import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

import { ISocialIcon } from '../../interfaces';

export const SocialIcon = ({ name, ...otherProps }: ISocialIcon): JSX.Element => {
  const icons = {
    github: FaGithub,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn
  }

  const Icon = icons[name];

  return Icon ? <Icon {...otherProps} /> : null
}