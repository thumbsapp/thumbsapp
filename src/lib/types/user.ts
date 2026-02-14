export interface User {
  id: string;
  displayName: string;
  handle: string;
  avatar: string | null;
  verified: boolean;
  reputation: number;
  country: string;
  followers: number;
  following: number;
  bio?: string;
}