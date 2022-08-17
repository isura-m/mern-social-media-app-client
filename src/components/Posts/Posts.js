import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.heading}>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
