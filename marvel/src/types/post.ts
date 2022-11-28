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
