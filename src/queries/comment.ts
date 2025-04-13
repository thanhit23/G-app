import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { markerService } from 'src/api';

export const useCreationComment = (
  options: UseMutationOptions<any, unknown, any> = {},
) => {
  return useMutation({
    mutationFn: async (variables) => {
      const { data } = await markerService.comment.createComment(variables);

      return data;
    },
    ...options,
  });
};
