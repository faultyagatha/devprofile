import React from "react";

import { Location } from "../Location";
import { ProfileImage } from "../ProfileImage";
import { SocialLinks } from "../SocialLinks";
// import { Skills } from '../Skills';
import { About } from "../About";

import { ISidebar } from '../../interfaces';

export const Sidebar = ({ profile, social }: ISidebar): JSX.Element => {
  return (
    <aside className="flex justify-center w-full px-4 lg:w-1/4 lg:px-6 xl:px-12">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-header font-light text-front text-2xl leading-none mb-4">
            {profile.profession}
          </h2>
          <h1 className="font-header text-gray-500 font-black text-front text-4xl leading-none break-words mb-6">
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
          <br />
          {profile.about && <About about={profile.about} />}
          {/* {profile.skills && <Skills skills={profile.skills} />} */}
          <div className="inline-flex mt-6 w-full">
            <SocialLinks social={social} />
          </div>
        </div>
      </div>
    </aside>
  );
}
