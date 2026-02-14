import { User } from './user';

export interface Chart {
  id: string;
  author: User;
  sourceHandle?: string;
  headline?: string;
  content: string;
  linkUrl?: string;
  linkTitle?: string;
  linkDescription?: string;
  linkImage?: string;
  gameType: string;
  difficulty: string;
  stakeLevel: number;
  gameId: string;
  reactions: {
    likes: number;
    comments: number;
    reposts: number;
    shoutouts: number;
  };
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  createdAt: string;
  replies?: Comment[];
}