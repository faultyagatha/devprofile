import React from "react";
import { About } from "../About";
// import Projects from "../projects/projects"
import { Skills } from "../Skills";
import { Summary } from "../Summary";
import { Tools } from "../Tools";
// import WorkHistory from "../work-history/work-history"

export const MainBody = ({ projects, profile }) => {
  console.log(profile);
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <Summary profile={profile} />

      <div className="flex flex-wrap">
        <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
          {profile.skills && <Skills skills={profile.skills} />}
        </div>
        <div className="md:w-1/4 pb-12">
          {profile.tools && <Tools tools={profile.tools} />}
        </div>
      </div>

      {profile.about && <About about={profile.about} />}
      {/* <Projects projects={projects} />
      <WorkHistory history={history} /> */}
    </main>
  )
}