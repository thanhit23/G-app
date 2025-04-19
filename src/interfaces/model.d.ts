declare namespace Model {
  export interface User {
    id: string;
    created_at: string;
    updated_at: string;
    email: string;
    name: string | null;
    username: string;
    avatar: string;
    address: string;
    bio: string;
    isFollowing: boolean;
    countFollowers: number;
    countFollowing: number;
    totalFollower: number;
    totalFollowing: number;
  }

  export interface PostEntity {
    id: string;
    createdAt: string;
    createdAt: string;
    userId: string;
    content: string;
    image: string | null;
    user: User;
    hasFollowed: boolean;
    isLiked: boolean;
    totalLikes: number;
    totalComments: number;
  }

  export interface Post {
    post: PostEntity;
  }
}
