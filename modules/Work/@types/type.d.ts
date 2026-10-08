export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  coverImage: string;
  images: string[];
  features: string[];
  techStack: string[];
  url?: string;
  githubUrl?: string;
}

export interface WorkImageItem {
  title: string;
  category?: string;
  path: string;
  url?: string;
}

export interface WorkSlide {
  images: WorkImageItem[];
}
