import React from 'react';

import { IFrameworks } from '../../interfaces';

export const Frameworks = ({ frameworks }: IFrameworks): JSX.Element => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Frameworks
    </h5>
    <ul className="flex-col mt-2">
      {frameworks.map(framework => (
        <li className="inline-block md:block mb-1 mr-1 md:mr-0" key={framework}>
          <span className="inline-block subpixel-antialiased bg-lead px-3 py-1 font-header font-light text-xl md:text-xl text-lead-text">
            {framework}
          </span>
        </li>
      ))}
    </ul>
  </>
);