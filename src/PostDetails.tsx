import React from "react";
import { Post } from "./reducers/types";

interface PostDetailsProps {
  post: Post;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
