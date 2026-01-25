
export interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  codeLink: string;
  liveLink: string;
  image: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  link?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  link: string;
}

