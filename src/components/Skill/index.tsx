import React from "react";
// import { DiJavascript1, DiNodejs, DiHtml5 } from "react-icons/di";

interface ISkill {
  skill: string;
}

export const Skill = ({ skill }: ISkill): JSX.Element => (
  <li className="relative flex justify-center items-center rounded-full border-1 border-blue-500 border-opacity-75 md:border-opacity-50 m-8">
    <div className="absolute font-header font-semibold text-front text-sm md:text-base px-2 text-center">
      {skill}
    </div>
    {/* <DiJavascript1 className={`w-full text-skill-${i} h-16 opacity-25 m-2`} />
    <DiNodejs className={`w-full text-skill-${i} h-16 opacity-25 m-2`} />
    <DiHtml5 className={`w-full text-skill-${i} h-16 opacity-25 m-2`} /> */}
  </li>
);