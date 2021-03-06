import React from 'react';

import { Project } from '../Project';
import { IProjects } from '../../interfaces';

export const Projects = ({ projects }: IProjects): JSX.Element => (
  <>
    <h5 className="font-header font-semibold text-front leading-relaxed text-sm uppercase mb-3">
      Projects
    </h5>
    <p className="text-sm leading-relaxed">Below is a short list of my work-in progress and finished web projects. For more just hit my
    <a
        href="https://github.com/faultyagatha"
        className="text-black m-1.5 no-underline hover:underline ...hover:opacity-75 transition-opacity duration-150"
        rel="noreferrer noopener"
        target="_blank"
      >
        github link.
        </a>
    </p>
    <br />
    {projects.map((project, i) => (
      <Project key={`${project.name}_${i}`} {...project} />
    ))}
  </>
)
