export interface IProfile {
  name: string;
  email: string;
  profession: string;
  image: string;
  location: string;
  company: string;
  for_hire: boolean;
  remote: boolean;
  about: string;
  education: string;
  skills: string[];
  frameworks: string[];
  focus: {
    intro: string;
    url: string;
  }
}

export interface ISummary {
  profile: IProfile;
}

export interface IProfileImage {
  image: string;
  name: string;
}

interface ISocial {
  network: string;
  username?: string;
  url: string;
}

export interface ISocialLinks {
  social: ISocial[];
}

export interface ISidebar {
  profile: IProfile;
  social: ISocial[];
}

export interface IMainBody {
  profile: IProfile;
  projects: IProject[];
}

export interface ISkill {
  skill: string;
}

export interface ISkills {
  skills: string[];
}

export interface ILocation {
  location: string;
  remote: boolean;
  email: string;
}

export interface IAbout {
  about: string;
}

export interface IEducation {
  education: string;
}

export interface IProject {
  name: string;
  image: string;
  liveUrl?: string;
  url?: string;
  description: string;
  status: string;
  tags: string[];
}

export interface IProjects {
  projects: IProject[]
}

export interface IProjectStatus {
  status: string;
}

export interface IProjectIcon {
  url?: string;
  liveUrl?: string;
}

export interface IFrameworks {
  frameworks: string[];
}

export interface IProjectTags {
  tags: string[];
}

export interface ISocialIcon {
  name: string;
  [otherProps: string]: any;
}


