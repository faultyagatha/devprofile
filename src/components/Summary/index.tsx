import React from "react";
import { FaGithub } from "react-icons/fa";

import { ISummary } from '../../interfaces';

export const Summary = ({ profile }: ISummary): JSX.Element => (
  <div className="flex pb-8">
    <div className="w-1/2 pr-4 lg:pr-12 border-r border-line">
      <h5 className="font-header font-semibold text-front text-sm uppercase">
        Company
      </h5>
      <h3 className="font-header font-light text-2xl text-front leading-tight">
        {profile.company}
      </h3>
      {profile.for_hire && (
        <div className="font-header font-semibold text-xs uppercase pt-2">
          <span className="inline-block w-2 h-2 rounded-full mr-1 bg-green-500"></span>
          Available for hire
        </div>
      )}
    </div>
    <div className="w-1/2 pl-4 lg:pl-12">
      <h5 className="font-header font-semibold text-front text-sm uppercase">
        Currently learning
      </h5>
      <div className="font-header font-light text-2xl text-front leading-tight">
        {profile.focus.intro}
        {profile.focus.url && (
          <div>
            <a
              aria-label="website"
              className="inline-block text-front opacity-50 hover:opacity-75 h-4 w-4 transition-opacity duration-150"
              href={profile.focus.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);