import { Axios } from 'src/lib/axios';

export const keys = {
  create_comment: () => ['/comments', {}] as const,
  get_comment: (params: SearchParams.Comment) => ['/comments', params] as const,
};

class Comment extends Axios {
  keys = keys;

  createComment(data: Payload.CreateComment) {
    return this.post(this.keys.create_comment()[0], data);
  }

  getComments(params: SearchParams.Comment) {
    return this.get(this.keys.get_comment(params)[0], { params });
  }
}

export const comment = new Comment();
