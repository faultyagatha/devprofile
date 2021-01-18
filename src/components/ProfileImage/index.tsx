import React from "react";

import { IProfileImage } from '../../interfaces';

export const ProfileImage = ({ image, name }: IProfileImage): JSX.Element => (
  <img
    src={image}
    alt={name}
    className="rounded-full relative z-10 w-48"
  />
);
