import React from 'react';
import PostHeaderButtonWithStateModalEdit from './__button/PostHeaderButtonWithStateModalEdit';

const PostHeader = () => (
  <header className="todo-component__header">
    <h1 className="todo-component__header-title">posts</h1>
    <PostHeaderButtonWithStateModalEdit />
  </header>
);

export default PostHeader;
