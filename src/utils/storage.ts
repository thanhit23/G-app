import { setCookie } from 'cookies-next';

export const StorageKeys = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  USER_INFO: 'USER_INFO',
};

class Storage {
  public static setItem(key: keyof typeof StorageKeys, value: string) {
    localStorage.setItem(key, value);
  }

  public static getItem(key: keyof typeof StorageKeys) {
    localStorage.getItem(key);
  }

  public static removeItem(key: keyof typeof StorageKeys) {
    localStorage.removeItem(key);
  }

  public static clear() {
    Object.values(StorageKeys).forEach((key) => {
      localStorage.removeItem(key);
    });
  }

  public static getAccessToken() {
    return localStorage.getItem(StorageKeys.ACCESS_TOKEN);
  }

  public static setAccessToken(token: string) {
    setCookie('ACCESS_TOKEN_COOKIE', token);
    localStorage.setItem(StorageKeys.ACCESS_TOKEN, token);
  }

  public static getUserInfo() {
    const userInfo =
      typeof window !== 'undefined' &&
      localStorage.getItem(StorageKeys.USER_INFO);

    if (userInfo) {
      try {
        return userInfo;
      } catch (error) {
        console.log(error, 'error');
        return null;
      }
    }

    return null;
  }

  public static setUserInfo(userInfo: any) {
    localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(userInfo));
  }
}

export default Storage;
