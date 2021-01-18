import React from "react";

import { ISkill } from '../../interfaces';

export const Skill = ({ skill }: ISkill): JSX.Element => (
  <li className="items-center">
    <div className="p-1 m-1 font-header bg-gradient-to-r from-indigo-400 to-green-400 ... rounded-lg border text-white font-semibold text-xs md:text-sm px-2 text-center">
      {skill}
    </div>
  </li>
);