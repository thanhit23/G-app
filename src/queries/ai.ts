import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { markerService } from 'src/api';

export const useSuggestStatus = (
  options: UseMutationOptions<any, unknown, any> = {},
) => {
  return useMutation({
    mutationFn: async (variables) => {
      const { data } = await markerService.ai.suggestStatus(variables);

      return data;
    },
    ...options,
  });
};
