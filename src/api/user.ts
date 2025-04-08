import { Axios } from 'src/lib/axios';

export const keys = {
  sign_in: (payload: Payload.SignIn) => ['/auth/login', payload] as const,
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
}

export const user = new User();
