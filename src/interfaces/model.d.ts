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
    countFollowers: number;
    countFollowing: number;
  }

  export interface PostEntity {
    id: string;
    created_at: string;
    updated_at: string;
    userId: string;
    content: string;
    image: string | null;
    user: User;
    is_liked: boolean;
    total_likes: number;
    total_comments: number;
  }

  export interface Post {
    post: PostEntity;
  }
}
