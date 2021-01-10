import React from "react";

import { Project } from "../Project";

interface IProject {
  projects: {
    name: string,
    image: string,
    liveUrl?: string;
    url: string,
    description: string,
    status: string,
    tags: string[],
    icon: string
  }[]
}

export const Projects = ({ projects }: IProject): JSX.Element => (
  <>
    <h5 className="font-header font-semibold text-front leading-relaxed text-sm uppercase mb-3">
      Projects
    </h5>
    <p className="text-sm leading-relaxed">Below is a short list of my work-in progress and finished web projects. For more just hit my github link. </p>
    {/* <p>
      <button
        className="text-white text-sm leading-relaxed rounded-lg p-2 bg-gradient-to-r from-green-400 to-blue-500 ...">
        <a
          href="https://faultyagatha.github.io/"
          className="text-white m-1.5 no-underline hover:underline ...hover:opacity-75 transition-opacity duration-150"
          rel="noreferrer noopener"
          target="_blank"
        > If you want to see me colourful and playful check my other self. It willl make you smile. I promise.</a>
      </button>
    </p> */}
    <br />
    {projects.map((project, i) => (
      <Project key={`${project.name}_${i}`} {...project} />
    ))}
  </>
)
