import { Axios } from 'src/lib/axios';

export const keys = {
  get_me: () => '/v1/auth/me' as const,
  sign_in: (payload: Payload.SignIn) => ['/auth/login', payload] as const,
  profile: (params: SearchParams.Profile) =>
    [`/users/profile/${params.username}`, params] as const,
  sign_up: (payload: Payload.SignUp) => ['/auth/register', payload] as const,
};

class User extends Axios {
  keys = keys;

  signIn(payload: Payload.SignIn) {
    return this.post(this.keys.sign_in(payload)[0], payload);
  }

  signUp(payload: Payload.SignUp) {
    return this.post(this.keys.sign_up(payload)[0], payload);
  }

  getMe() {
    return this.get(this.keys.get_me());
  }

  profile(params: SearchParams.Profile) {
    return this.get(this.keys.profile(params)[0]);
  }
}

export const user = new User();
