
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface AIResponse {
  idea: string;
  steps: string[];
  techStack: string[];
}
