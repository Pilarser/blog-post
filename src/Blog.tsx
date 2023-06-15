import React, { useEffect, useState } from "react";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { fetchPosts, submitHandler } from "./reducers/actions";
import CreatePost from "./CreatePost";
import { Post } from "./reducers/types";
import PostDetails from "./PostDetails";

interface BlogProps {
  loading: boolean;
  error: string | null;
  data: Post[];
  fetchPosts: () => void;
  submitHandler: (values: any) => void;
}

const Blog: React.FC<BlogProps> = ({
  loading,
  error,
  data,
  fetchPosts,
  submitHandler
}) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const clickedPost = (post: Post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="blog-container">
        <button className="back-button" onClick={handleBackClick}>
          Back to posts
        </button>
        <PostDetails post={selectedPost} />
      </div>
    );
  }
  return (
    <div className="Container">
      <CreatePost submitHandler={submitHandler} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}...</p>}
      <div className="post-list">
        {data.map((dataObj: Post, index: number) => {
          return (
            <article key={index} className="post-item">
              <h3 className="post-title">{dataObj.title}</h3>
              <p className="post-body">{dataObj.body}</p>
              <button className="btn-more" onClick={() => clickedPost(dataObj)}>
                Read more
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    loading: state.blog.loading,
    error: state.blog.error,
    data: state.blog.data
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    submitHandler: (values: any) => dispatch(submitHandler(values))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Blog);
