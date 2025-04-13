import { useRouter } from 'next/navigation';
import { DefinedUseQueryResult, useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query';

import { markerService } from 'src/api';
import Storage from 'src/utils/storage';

export const getMe = async () => {
  try {
    const { data } = await markerService.user.getMe();
    Storage.setUserInfo(data.data);

    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const useProfile = (
  params: SearchParams.Profile,
  options: Interface.UseQueryOptions<Model.User> = {},
): DefinedUseQueryResult<Model.User, Error> => {
  return useQuery<Model.User, Error>({
    queryFn: async () => {
      const { data } = await markerService.user.profile(params);
      return data.data as Model.User;
    },
    ...options,
    queryKey: markerService.user.keys.profile(params),
  });
}

export const useSignIn = (
  options: UseMutationOptions<any, unknown, any> = {},
) => {
  const router = useRouter();
  
  return useMutation({
    mutationFn: async (variables) => {
      const { data } = await markerService.user.signIn(variables);

      return data;
    },
    onSuccess(data) {
      Storage.setAccessToken(data.data.token.accessToken);
      Storage.setUserInfo(data.data.user);
      router.push('/');
    },
    ...options,
  });
};

export const useSignUp = (
  options: UseMutationOptions<any, unknown, any> = {},
) => {
  const router = useRouter();
  
  return useMutation({
    mutationFn: async (variables) => {
      const { data } = await markerService.user.signUp(variables);

      return data;
    },
    onSuccess(data) {
      const { token, ...userInfo } = data.data;
      
      Storage.setAccessToken(token.accessToken);
      Storage.setUserInfo(userInfo);
      router.push('/');
    },
    ...options,
  });
};
