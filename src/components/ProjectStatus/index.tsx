import React from 'react';

import { IProjectStatus } from '../../interfaces';

export const ProjectStatus = ({ status }: IProjectStatus): JSX.Element => (
  <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
    <span
      className={`inline-block w-2 h-2 rounded-full mr-2 ${status === "complete"
        ? "bg-green-500" : "bg-indigo-500"
        }`}
    ></span>
    {status}
  </li>
)