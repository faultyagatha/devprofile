import React from "react";

export const About = ({ about }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      About
    </h5>
    <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line">
      {about}
    </div>
  </>
);