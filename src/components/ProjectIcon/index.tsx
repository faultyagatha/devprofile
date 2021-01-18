import React from 'react';
import { FaGithub, FaEye } from 'react-icons/fa';

import { IProjectIcon } from '../../interfaces';

export const ProjectIcon = ({ url, liveUrl }: IProjectIcon): JSX.Element => (
  <ul className="absolute right-0 bottom-0 mb-8 mr-8 text-back">
    {liveUrl && <a
      aria-label="website"
      className="inline-block text-front opacity-50 hover:opacity-75 h-4 w-4 transition-opacity duration-150 mr-5"
      href={liveUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <li className="inline-block mr-5">
        <FaEye className="w-5 h-5" />
      </li>
    </a>}
    {url && <a
      aria-label="website"
      className="inline-block text-front opacity-50 hover:opacity-75 h-4 w-4 transition-opacity duration-150"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <li className="inline-block">
        <FaGithub className="w-5 h-5" />
      </li>
    </a>}
  </ul>
);