import React from "react";

import { ProjectIcon } from "../ProjectIcon";
import { ProjectStatus } from "../ProjectStatus";
import { ProjectTags } from "../ProjectTags";

interface IProject {
  name: string;
  image: string;
  url: string;
  description: string;
  status: string;
  tags: string[];
  icon: string;
}

export const Project = ({ name, image, url, description, status, tags, icon }: IProject): JSX.Element => {
  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      {image && (
        <div className="max-w-7xl pb-4 lg:w-2/5 lg:pr-8 lg:pb-0 transition duration-500 ease-in-out filter-grayscale hover:filter-none transform hover:scale-110 ...">
          <img src={image} alt={name} />
        </div>
      )}
      <div className="lg:flex-1">
        <h4 className="font-bold">{name}</h4>
        {url && (
          <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            {url}
          </a>
        )}
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <ul className="pr-2">
          {status && <ProjectStatus status={status} />}
          {tags && <ProjectTags tags={tags} />}
        </ul>

        {icon && <ProjectIcon icon={icon} />}
      </div>
    </div>
  )
}
