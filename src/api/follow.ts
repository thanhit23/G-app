import { Axios } from 'src/lib/axios';

export const keys = {
  follow_user: (payload: Payload.FollowUser) => ['/follows', payload] as const,
  unfollow: (payload: Payload.FollowUser) => ['/follows', payload] as const,
};

class Follow extends Axios {
  keys = keys;

  follow_user(payload: Payload.FollowUser) {
    return this.post(this.keys.follow_user(payload)[0], payload);
  }

  unfollow(payload: Payload.FollowUser) {
    return this.delete(this.keys.unfollow(payload)[0], { data: payload });
  }
}

export const follow = new Follow();
