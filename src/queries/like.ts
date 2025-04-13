import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { markerService } from 'src/api';

export const useLike = (
  options: UseMutationOptions<any, unknown, any> = {},
) => {
  return useMutation({
    mutationFn: async (variables) => {
      const { data } = await markerService.like.like(variables);

      return data;
    },
    ...options,
  });
};

export const useUnlike = (
  options: UseMutationOptions<any, unknown, any> = {},
) => {
  return useMutation({
    mutationFn: async (variables) => {
      const { data } = await markerService.like.unlike(variables);
      return data.data;
    },
    ...options,
  });
}
