import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface ILocation {
  location: string;
  remote: boolean;
}

export const Location = ({ location, remote }: ILocation): JSX.Element => (
  <>
    <div className="inline-flex items-center bg-front mt-6 w-auto">
      <span className="text-lead border-r-2 border-back px-3">
        <FaMapMarkerAlt className="h-4 w-4" />
      </span>
      <span className="text-back font-header font-bold py-1 px-3 text-lg">
        {location}
      </span>
    </div>
    {remote && (
      <div className="text-xs uppercase mt-2 font-semibold text-front font-header">
        Available for remote work
      </div>
    )}
  </>
)