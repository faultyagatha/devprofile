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

export interface ISocialLinks {
  social: {
    network: string;
    username?: string;
    url: string;
  }[];
}

export interface ISidebar {
  profile: IProfile;
  social?: ISocialLinks;
}

export interface IMainBody {
  profile: IProfile;
  projects: IProject[];
}