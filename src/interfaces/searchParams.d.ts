declare namespace SearchParams {
  export interface Base {
    offset?: number;
    take?: number;
    limit?: number;
    after?: string | number;
    page?: number;
    locale?: keyof typeof LOCALE_TYPE;
  }

  export interface SuggestStatus {
    question?: string;
  }

  export interface Profile { 
    username: string 
  }
  
  export interface PostEntity extends Base {
    username: string 
  }
  
  export interface Comment extends Base {
    postId: string;
  }
  
  export interface PostDetail extends Base {
    id: string;
  }

  export type NewsFeed = Base
}
