import React from "react";

import { Project } from "../Project";

interface IProject {
  projects: {
    name: string,
    image: string,
    liveUrl: string;
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
    <p>Below is a short list of my work-in progress and finished web projects. For more just hit my github link. </p>
    <p>If you want to see me colourful and creative check my <a
      href="https://faultyagatha.github.io/"
      className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
      rel="noreferrer noopener"
      target="_blank"
    >other self</a>.
      </p>
    <br />
    {projects.map((project, i) => (
      <Project key={`${project.name}_${i}`} {...project} />
    ))}
  </>
)
