import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import CellWithButtonDelete from '../containers/CellWithButtonDelete';
import CellWithButtonEdit from '../containers/CellWithButtonEdit';
import Button from '../../../common/Button/Button';


const Post = ({
  id,
  index,
  title,
  description,
  date,
  isPublished,
  onPostPublished,
  isLiked,
  onPostLiked,
}) => (
  <tr className="table-posts__row table__row-body">
    <td className="table-posts__cell table-posts__cell-body">
      {index}
    </td>
    <td className="table-posts__cell table-posts__cell-body">
      {title}
    </td>
    <td className="table-posts__cell table-posts__cell-body">
      {description}
    </td>
    <td className="table-posts__cell table-posts__cell-body">
      {date}
    </td>
    <td className="table-posts__cell table-posts__cell-body">
      <input
        className="input"
        type="checkbox"
        defaultChecked={isPublished}
        onClick={onPostPublished}
      />
    </td>
    <td className="table-posts__cell table-posts__cell-body">
      <Button
        className="button-like"
        onClick={onPostLiked}
        iconId={faThumbsUp}
        IconClassName={classNames('icon-like', { 'icon-like_active': isLiked })}
      />
    </td>
    <CellWithButtonDelete
      id={id}
    />
    <CellWithButtonEdit
      id={id}
    />
  </tr>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isPublished: PropTypes.bool.isRequired,
  onPostPublished: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onPostLiked: PropTypes.func.isRequired,
  description: PropTypes.string,
};

Post.defaultProps = {
  description: null,
};

export default Post;
