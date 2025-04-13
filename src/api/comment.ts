import { Axios } from 'src/lib/axios';

export const keys = {
  create_comment: () => ['/comments', {}] as const,
};

class Comment extends Axios {
  keys = keys;

  createComment(data: Payload.CreateComment) {
    return this.post(this.keys.create_comment()[0], data);
  }
}

export const comment = new Comment();
