import React from 'react';

import { Menu } from '../components/Menu';
import { MainBody } from '../components/MainBody';
import Footer from '../components/Footer';
import { data } from '../data';

export const HomePage = () => {
  const { profile, projects, social } = data;
  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Menu profile={profile} social={social} />

        <MainBody
          profile={profile}
          projects={projects}
        />
      </div>
      <Footer />
    </div>
  )
}
