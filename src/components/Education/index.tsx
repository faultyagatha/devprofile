import React from 'react';

import { IEducation } from '../../interfaces';

export const Education = ({ education }: IEducation): JSX.Element => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Education
    </h5>
    <div className="font-text text-sm pb-12 leading-relaxed whitespace-pre-line">
      {education}
    </div>
  </>
);
