'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';
import { deleteCookie } from 'cookies-next';

import { getMe } from 'src/queries/user';
import Storage from 'src/utils/storage';

export default function Authentication({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const queryClient = useQueryClient();

  const logout = async () => {
    queryClient.removeQueries();
    Storage.clear();
    deleteCookie('ACCESS_TOKEN_COOKIE');

    await router.push('/login');
  };

  useEffect(() => {
    document.addEventListener('TOKEN_EXPIRE', function () {
      logout();
    });
  }, []);

  useEffect(() => {
    const handleRouterChange = async () => {
      if (Storage.getAccessToken()) {
        await getMe();
      }
    };

    handleRouterChange();
  }, []);

  return <>{children}</>;
}
