import { DefinedUseQueryResult, useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query';

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

export const useFetchComments = (
  params: SearchParams.Comment,
  options: Interface.UseQueryOptions<Interface.BaseResponse<Model.PostEntity[]>> = {},
): DefinedUseQueryResult<Interface.BaseResponse<Model.PostEntity[]>, Error> => {
  return useQuery<Interface.BaseResponse<Model.PostEntity[]>, Error>({
    queryKey: markerService.comment.keys.get_comment(params),
    queryFn: async () => {
      const { data } = await markerService.comment.getComments(params);
      return data.data;
    },
    ...options,
  });
}
