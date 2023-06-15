import { Dispatch } from "redux";

const fetchPostsRequest = () => {
  return {
    type: "FETCH_POSTS_REQUEST"
  };
};

const fetchPostsSuccess = (data: any) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: data
  };
};

const fetchPostsFailed = (error: string) => {
  return {
    type: "FETCH_POSTS_FAILED",
    payload: error
  };
};

const submitPostRequest = () => {
  return {
    type: "SUBMIT_POST_REQUEST"
  };
};

const submitPostSuccess = (data: any) => {
  return {
    type: "SUBMIT_POST_SUCCESS",
    payload: data
  };
};

const submitPostFailed = (error: string) => {
  return {
    type: "SUBMIT_POST_FAILED",
    payload: error
  };
};

export const fetchPosts = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchPostsRequest());

    const url: string = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchPostsSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchPostsFailed(err.message));
      });
  };
};

export const submitHandler = (values: any) => {
  return (dispatch: Dispatch) => {
    dispatch(submitPostRequest());

    const url: string = "https://jsonplaceholder.typicode.com/posts";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        dispatch(submitPostSuccess(data));
      })
      .catch((err) => {
        dispatch(submitPostFailed(err.message));
      });
  };
};
