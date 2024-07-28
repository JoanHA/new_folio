export interface Lang {
  info: {
    job: string;
    location: string;
  };
  about: {
    title: string;
    description: string;
  };
  technologies: {
    title: string;
  };
  experience: {
    title: string;
    duration: string;
    items: Array<{
      company: string;
      position: string;
      duration: string;
      description: string;
    }>;
  };
  projects: {
    title: string;
    items: Array<{
      id: number;
      name: string;
      subtitle: string;
      description: string;
    }>;
  };
  education: {
    title: string;
    items: Array<{
      name: string;
      subtitle: string;
      duration: string;
      description: string;
    }>;
  };
  extra: {
    projects: Array<{
      title: string;
      description: string;
    }>;
  };
}

export interface projectItem {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  github:string;
  link:string;
}
