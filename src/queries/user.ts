import { useRouter } from 'next/navigation';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { markerService } from 'src/api';
import Storage from 'src/utils/storage';

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
      Storage.setAccessToken(data.data.token.accessToken);
      Storage.setUserInfo(data.data.user);
      router.push('/');
    },
    ...options,
  });
};
