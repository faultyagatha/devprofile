import React from "react";

import { Location } from "../Location";
import { ProfileImage } from "../ProfileImage";
import { SocialLinks } from "../SocialLinks";

import { ISidebar } from '../../interfaces';

export const Sidebar = ({ profile, social }: ISidebar): JSX.Element => {
  return (
    <aside className="w-full lg:w-1/4 lg:border-r border-line lg:px-6 xl:px-12">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-header font-light text-front text-2xl leading-none mb-4">
            {profile.profession}
          </h2>
          <h1 className="font-header font-black text-front text-4xl leading-none break-words mb-6">
            {profile.name}
          </h1>
          {profile.image && (
            <ProfileImage image={profile.image} name={profile.name} />
          )}
          <br />
          {profile.location && (
            <Location
              location={profile.location}
              remote={profile.remote}
              email={profile.email}
            />
          )}
        </div>
        <div className="pt-8 lg:py-0">
          <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
            Connect
        </h5>
          <SocialLinks social={social} />
        </div>
      </div>
      {/* <div className="pt-8 pb-12 lg:py-0">
          <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
            Connect
        </h5>
          <SocialLinks social={social} />
        </div>
      </div> */}
    </aside>
  );
}
