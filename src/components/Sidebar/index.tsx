import React from 'react';

import { Location } from '../Location';
import { ProfileImage } from '../ProfileImage';
import { SocialLinks } from '../SocialLinks';
import { About } from '../About';
import { Education } from '../Education';
import { ISidebar } from '../../interfaces';

export const Sidebar = ({ profile, social }: ISidebar): JSX.Element => {
  return (
    <aside className="flex w-full px-4 lg:w-1/4 lg:px-6 xl:px-12">
      <div className="flex flex-col items-center">
        <h2 className="font-header font-light text-front text-2xl leading-none mb-4">
          {profile.profession}
        </h2>
        <h1 className="font-header text-gray-500 font-black text-front text-3xl break-words mb-6">
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
        {profile.education && <Education education={profile.education} />}
        <button
          className="text-white text-sm w-full font-semibold leading-relaxed rounded-lg m-2 p-2 bg-gradient-to-r from-green-400 to-blue-500 ...">
          <a
            href="https://faultyagatha.github.io/"
            className="text-white m-1.5 no-underline hover:underline ...hover:opacity-75 transition-opacity duration-150"
            rel="noreferrer noopener"
            target="_blank"
          > HOW I ENJOY LIFE</a>
        </button>
        <div className="inline-flex mt-6 w-full">
          <SocialLinks social={social} />
        </div>
      </div>
    </aside>
  );
}
