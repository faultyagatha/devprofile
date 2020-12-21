import React from "react";

export const ProfileImage = ({ image, name }) => (
  <div className="relative inline-block leading-none">
    <img
      src={image}
      alt={name}
      className="rounded-full relative z-10"
    />
    <div className="absolute inset-0 rounded-full bg-lead z-0 transform translate-x-12"></div>
  </div>
)
