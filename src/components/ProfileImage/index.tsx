import React from "react";

import { IProfileImage } from '../../interfaces';

export const ProfileImage = ({ image, name }: IProfileImage): JSX.Element => (
  <div className="relative inline-block leading-none w-48 lg:w-48">
    <img
      src={image}
      alt={name}
      className="rounded-full relative z-10"
    />
    <div className="absolute inset-0 rounded-full bg-lead z-0 transform translate-x-12"></div>
  </div>
)
