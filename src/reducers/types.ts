export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface BlogState {
  loading: boolean;
  error: string | null;
  data: Post[];
}

export interface FetchPostsRequestAction {
  type: "FETCH_POSTS_REQUEST";
}

export interface FetchPostsSuccessAction {
  type: "FETCH_POSTS_SUCCESS";
  payload: Post[];
}

export interface FetchPostsFailedAction {
  type: "FETCH_POSTS_FAILED";
  payload: string;
}

export interface SubmitPostRequestAction {
  type: "SUBMIT_POST_REQUEST";
}

export interface SubmitPostSuccessAction {
  type: "SUBMIT_POST_SUCCESS";
  payload: Post;
}

export interface SubmitPostFailedAction {
  type: "SUBMIT_POST_FAILED";
  payload: string;
}

export type BlogAction =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailedAction
  | SubmitPostRequestAction
  | SubmitPostSuccessAction
  | SubmitPostFailedAction;
