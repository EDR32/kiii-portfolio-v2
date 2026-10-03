export interface WorkImageItem {
  title: string;
  category?: string;
  path: string;
  url?: string;
}

export interface WorkSlide {
  images: WorkImageItem[];
}
