import { AnyAction } from "redux";

const initialState = {
  loading: false,
  error: null,
  data: []
};

const blogReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
    case "SUBMIT_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      };
    case "FETCH_POSTS_FAILED":
    case "SUBMIT_POST_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case "SUBMIT_POST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};

export default blogReducer;
