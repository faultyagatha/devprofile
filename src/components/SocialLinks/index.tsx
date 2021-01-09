import React from "react";

import { SocialIcon } from "../SocialIcon";
import { ISocialLinks } from '../../interfaces';

export const SocialLinks = ({ social }: ISocialLinks): JSX.Element => {
  return (
    <div className="pb-6 flex w-full justify-around">
      {social.map(({ network, url }) => {
        return (
          <a
            aria-label={network}
            className="inline-flex w-12 rounded-full -ml-3 hover:shadow-lg transition-shadow duration-150"
            href={url}
            key={network}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialIcon name={network} className="w-6 h-6" />
          </a>
        )
      })}
    </div>
  )
}