import { DefinedUseQueryResult, useQuery } from '@tanstack/react-query';

import { markerService } from 'src/api';

export const useFetchNewsFeed = (
  params: SearchParams.NewsFeed,
  options: Interface.UseQueryOptions<Interface.BaseResponse<Model.Post[]>> = {},
): DefinedUseQueryResult<Interface.BaseResponse<Model.Post[]>, Error> => {
  return useQuery<Interface.BaseResponse<Model.Post[]>, Error>({
    queryKey: markerService.newsFeed.keys.get_news_feed(params),
    queryFn: async () => {
      const { data } = await markerService.newsFeed.getNewsFeed(params);
      return data.data;
    },
    ...options,
  });
}
