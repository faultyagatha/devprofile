import React from 'react';

import { ProjectIcon } from '../ProjectIcon';
import { ProjectStatus } from '../ProjectStatus';
import { ProjectTags } from '../ProjectTags';
import { IProject } from '../../interfaces';

export const Project = ({
  name,
  image,
  liveUrl,
  url,
  description,
  status,
  tags
}: IProject
): JSX.Element => {
  return (
    <div
      className="relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm"
    >
      {image && (
        <div
          className="max-w-7xl pb-4 lg:w-2/5 lg:pr-8 lg:pb-0 transition duration-500 ease-in-out filter-grayscale hover:filter-none transform hover:scale-110 ..."
        >
          <img className="rounded-lg" src={image} alt={name} />
        </div>
      )}
      <div className="lg:flex-1">
        <h4 className="font-bold">{name}</h4>
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <ul className="pr-2 align-bottom">
          <p>{status && <ProjectStatus status={status} />}</p>
          <br />
          {tags && <ProjectTags tags={tags} />}
        </ul>
        <ProjectIcon url={url} liveUrl={liveUrl} />
      </div>
    </div>
  )
}
