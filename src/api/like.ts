import { Axios } from 'src/lib/axios';

export const keys = {
  like: (payload: Payload.Like) => [`/likes`, payload] as const,
  unlike: (payload: Payload.Unlike) => [`/likes`, payload] as const,
};

class Like extends Axios {
  keys = keys;

  like(payload: Payload.Like) {
    return this.post(this.keys.like(payload)[0], payload);
  }

  unlike(payload: Payload.Unlike) {
    return this.delete(this.keys.unlike(payload)[0], { data: payload });
  }
}

export const like = new Like();
