declare namespace SearchParams {
  export interface Base {
    offset?: number;
    take?: number;
    limit?: number;
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

  export type NewsFeed = Base
}