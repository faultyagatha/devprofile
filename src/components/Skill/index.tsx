import React from "react";
const skillSvg = "./skill.svg";

interface ISkill {
  skill: string;
  i: number;
}

export const Skill = ({ skill, i }: ISkill): JSX.Element => (
  <li
    className={`relative flex justify-center items-center rounded-full border-2 border-skill-${i}`}
  >
    <span className="absolute font-header font-semibold text-front text-sm md:text-base px-2 text-center">
      {skill}
    </span>
    {skillSvg}
    {/* <SkillSvg className={`w-full text-skill-${i} opacity-75 m-2`} /> */}
  </li>
);