import React from "react";

// import { About } from "../About";
import { Projects } from "../Projects";
import { Skills } from "../Skills";
import { Summary } from "../Summary";
import { Tools } from "../Tools";

import { IMainBody } from '../../interfaces';

export const MainBody = ({ profile, projects }: IMainBody): JSX.Element => {
  return (
    <main className="lg:w-3/4 lg:pl-8 xl:pl-12">
      <Summary profile={profile} />

      <div className="flex flex-wrap">
        <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
          {profile.skills && <Skills skills={profile.skills} />}
        </div>
        <div className="md:w-1/4 pb-12">
          {profile.tools && <Tools tools={profile.tools} />}
        </div>
      </div>

      {/* {profile.about && <About about={profile.about} />} */}
      <Projects projects={projects} />
    </main>
  );
}