declare namespace Payload {
  export interface SignIn {
    email: string;
    password: string;
  }

  export interface SignUp {
    username: string;
    email: string;
    password: string;
  }

  export interface Unlike {
    id: string;
  }

  export interface Like {
    user_id: string;
    post_id?: string;
    comment_id?: string;
  }

  export interface CreateComment {
    user_id: string;
    post_id?: string;
    parent_id?: string;
  }
}
