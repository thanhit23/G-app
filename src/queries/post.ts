import { DefinedUseQueryResult, useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query';

import { markerService } from 'src/api';

export const useFetchPostsProfile = (
  params: SearchParams.PostEntity,
  options: Interface.UseQueryOptions<Model.PostEntity[]> = {},
): DefinedUseQueryResult<Model.PostEntity[], Error> => {
  return useQuery<Model.PostEntity[], Error>({
    queryKey: markerService.post.keys.get_post_profile(params),
    queryFn: async () => {
      const { data } = await markerService.post.getPostEntity(params);
      return data.data;
    },
    ...options,
  });
}

export const useFetchPosts = (
  params: SearchParams.Base,
  options: Interface.UseQueryOptions<Model.PostEntity[]> = {},
): DefinedUseQueryResult<Model.PostEntity[], Error> => {
  return useQuery<Model.PostEntity[], Error>({
    queryKey: markerService.post.keys.get_post(params),
    queryFn: async () => {
      const { data } = await markerService.post.getAllPost(params);
      return data.data;
    },
    ...options,
  });
}

export const useCreationPost = (
  options: UseMutationOptions<any, unknown, any> = {},
) => {
  return useMutation({
    mutationFn: async (variables) => {
      const { data } = await markerService.post.createPost(variables);

      return data;
    },
    ...options,
  });
};
