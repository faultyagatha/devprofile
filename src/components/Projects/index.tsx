import React from "react";

import { Project } from "../Project";

interface IProject {
  projects: {
    name: string,
    image: string,
    url: string,
    description: string,
    status: string,
    tags: string[],
    icon: string
  }[]
}

export const Projects = ({ projects }: IProject): JSX.Element => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Projects
    </h5>
    {projects.map((project, i) => (
      <Project key={`${project.name}_${i}`} {...project} />
    ))}
  </>
)
