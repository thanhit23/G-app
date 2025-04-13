declare namespace Interface {
  import { UseQueryOptions as UseQueryOptionsType } from '@tanstack/react-query';

  export type UseQueryOptions<T> = Partial<UseQueryOptionsType<T, unknown, any>>

  export interface BaseResponse<T> {
    data: T;
    meta: {
      total: number;
      page: number;
      limit: number;
    };
  }
}
