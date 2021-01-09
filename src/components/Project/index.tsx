import React from "react";

import { ProjectIcon } from "../ProjectIcon";
import { ProjectStatus } from "../ProjectStatus";
import { ProjectTags } from "../ProjectTags";

interface IProject {
  name: string;
  image: string;
  liveUrl?: string;
  url: string;
  description: string;
  status: string;
  tags: string[];
}

export const Project = ({ name, image, liveUrl, url, description, status, tags }: IProject): JSX.Element => {
  return (
    <div className="relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      {image && (
        <div className="max-w-7xl pb-4 lg:w-2/5 lg:pr-8 lg:pb-0 transition duration-500 ease-in-out filter-grayscale hover:filter-none transform hover:scale-110 ...">
          <img className="rounded-lg" src={image} alt={name} />
        </div>
      )}
      <div className="lg:flex-1">
        <h4 className="font-bold">{name}</h4>
        {liveUrl && (
          <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={liveUrl}
            rel="noreferrer noopener"
            target="_blank"
          >
            see live
          </a>
        )}
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <ul className="pr-2">
          <p>{status && <ProjectStatus status={status} />}</p>
          <br />{tags && <ProjectTags tags={tags} />}
        </ul>
        <a
          aria-label="website"
          className="inline-block text-front opacity-50 hover:opacity-75 h-4 w-4 transition-opacity duration-150"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        ><ProjectIcon /></a>
      </div>
    </div>
  )
}
