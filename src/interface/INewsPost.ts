export default interface INewsPost {
  pinned: boolean;
  category: string;
  title: string;
  excerpt: string;
  author: { username: string, firstName: string, lastName: string, avatar: string };
  thumbnail: string;
  content: string;
  tags: string[];
  views: number;
  likes: number;
  minutesToRead: number;
  path: string;
  createdAt: Date;
}

