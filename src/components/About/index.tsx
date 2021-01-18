import React from "react";

import { IAbout } from '../../interfaces';

export const About = ({ about }: IAbout): JSX.Element => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      About
    </h5>
    <div className="font-text text-sm pb-12 leading-relaxed whitespace-pre-line">
      {about}
    </div>
  </>
);