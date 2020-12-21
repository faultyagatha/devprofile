import React from "react";

interface IProjectTags {
  tags: string[];
}

export const ProjectTags = ({ tags }: IProjectTags): JSX.Element => (
  <>
    {tags.map(tag => (
      <li
        className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back"
        key={tag}
      >
        {tag}
      </li>
    ))}
  </>
)