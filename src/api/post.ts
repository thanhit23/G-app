import { Axios } from 'src/lib/axios';

export const keys = {
  get_post_profile: (params: SearchParams.PostEntity) => [`/posts/username/${params.username}`, params] as const,
  get_post: (params: SearchParams.Base) => [`/posts`, params] as const,
  get_post_detail: (params: SearchParams.PostDetail) => [`/posts/${params.id}`, params] as const,
  create_post: () => ['/posts', {}] as const,
};

class Post extends Axios {
  keys = keys;

  getPostEntity(params: SearchParams.PostEntity) {
    return this.get(this.keys.get_post_profile(params)[0], { params });
  }

  getAllPost(params: SearchParams.Base) {
    return this.get(this.keys.get_post(params)[0], { params });
  }

  getPostDetail(params: SearchParams.PostDetail) {
    return this.get(this.keys.get_post_detail(params)[0], { params });
  }

  createPost(data: Model.Post) {
    return this.post(this.keys.create_post()[0], data);
  }
}

export const post = new Post();
