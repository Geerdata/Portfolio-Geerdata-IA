export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
  details?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}
