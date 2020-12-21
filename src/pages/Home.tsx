import React from 'react';

import { Sidebar } from '../components/Sidebar';
import { MainBody } from '../components/MainBody';
import Footer from '../components/Footer';
import { data } from '../data';

export const HomePage = (): JSX.Element => {
  const { profile, projects, social } = data;
  console.log(social);
  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social} />
        <MainBody
          profile={profile}
          projects={projects}
        />
      </div>
      <Footer />
    </div>
  )
}
