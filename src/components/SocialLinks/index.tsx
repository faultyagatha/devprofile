import React from "react";

import { SocialIcon } from "../SocialIcon";
import { ISocialLinks } from '../../interfaces';

export const SocialLinks = ({ social }: ISocialLinks): JSX.Element => {
  return (
    <div className="pl-3">
      {social.map(({ network, url }, i) => {
        const colorsClass =
          i % 2 === 0 ? "bg-front text-back-light" : "bg-back-light text-front"
        return (
          <a
            aria-label={network}
            className={`inline-flex w-12 h-12 justify-center items-center rounded-full -ml-3 ${colorsClass} hover:shadow-lg transition-shadow duration-150`}
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