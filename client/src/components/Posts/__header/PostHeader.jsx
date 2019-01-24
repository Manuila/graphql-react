import React from 'react';
import PostHeaderButtonEdit from './__button/PostHeaderButtonEdit';
import PropTypes from 'prop-types';


const PostHeader = ({ label }) => (
  <header className="todo-component__header">
    <h1 className="todo-component__header-title">{ label }</h1>
    <PostHeaderButtonEdit />
  </header>
);

PostHeader.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PostHeader;
