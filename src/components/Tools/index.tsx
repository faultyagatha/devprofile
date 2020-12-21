import React from "react";


interface ITools {
  tools: string[];
}

export const Tools = ({ tools }: ITools): JSX.Element => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Main tools
    </h5>
    <ul className="flex-col mt-2">
      {tools.map(tool => (
        <li className="inline-block md:block mb-1 mr-1 md:mr-0" key={tool}>
          <span className="inline-block subpixel-antialiased bg-lead px-3 py-1 font-header font-light text-xl md:text-2xl text-lead-text">
            {tool}
          </span>
        </li>
      ))}
    </ul>
  </>
);

export default Tools