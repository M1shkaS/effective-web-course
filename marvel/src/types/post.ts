interface Comics {
  resourceURI: string;
  name: string;
}
interface Series {
  resourceURI: string;
  name: string;
}

interface Characters {
  resourceURI: string;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  page?: string;
}

export interface DataPosts {
  totalPosts: number;
  postsList: Post[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  comics: Comics[];
  series: Series[];
}

export interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  pageCount: string;
  price: string;
  language: string;
  characters: Characters[];
  series: Series[];
}
