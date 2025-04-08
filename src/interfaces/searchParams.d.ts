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
}
