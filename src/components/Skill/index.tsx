import React from "react";
const SkillSvg = "./skill.svg";

export const Skill = ({ skill, i }) => (
  <li
    className={`relative flex justify-center items-center rounded-full border-2 border-skill-${i}`}
  >
    <span className="absolute font-header font-semibold text-front text-sm md:text-base px-2 text-center">
      {skill}
    </span>
    {/* <SkillSvg className={`w-full text-skill-${i} opacity-75 m-2`} /> */}
  </li>
);