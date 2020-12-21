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
  skills: string[];
  tools: string[];
  focus: {
    intro: string;
    url: string;
  }
}

export interface IProject {
  name: string;
  image: string;
  url: string;
  description: string;
  status: string;
  tags: string[];
  icon: string;
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