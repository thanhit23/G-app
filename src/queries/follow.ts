import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { markerService } from 'src/api';

export const useFollowUser = (
  options: UseMutationOptions<any, unknown, any> = {},
) => {
  return useMutation({
    mutationFn: async (variables: Payload.FollowUser) => {
      const { data } = await markerService.follow.follow_user(variables);

      return data;
    },
    ...options,
  });
};

export const useUnfollow = (
  options: UseMutationOptions<any, unknown, any> = {},
) => {
  return useMutation({
    mutationFn: async (variables) => {
      const { data } = await markerService.follow.unfollow(variables);
      return data.data;
    },
    ...options,
  });
}
