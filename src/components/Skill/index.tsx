import React from "react";

import { ISkill } from '../../interfaces';

export const Skill = ({ skill }: ISkill): JSX.Element => (
  <li className="items-center m-8">
    <div className="absolute font-header bg-indigo-400 text-white font-semibold text-front text-sm md:text-base px-2 text-center">
      {skill}
    </div>
  </li>
);