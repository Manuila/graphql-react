import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import { deletePost } from '../../../actions/posts';

import CellWithStateModalDelete from '../containers/CellWithStateModalDelete';
import CellWithStateModalEdit from '../containers/CellWithStateModalEdit';
import Button from '../../../common/Button/Button';


class Post extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isPublished: PropTypes.bool.isRequired,
    onPostPublished: PropTypes.func.isRequired,
    isLiked: PropTypes.bool.isRequired,
    onPostLiked: PropTypes.func.isRequired,
    dispatchDeletePost: PropTypes.func.isRequired,
  };

  render() {
    const {
      id,
      index,
      title,
      description,
      date,
      isPublished,
      onPostPublished,
      isLiked,
      onPostLiked,
      dispatchDeletePost,
    } = this.props;
    return (
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
        <CellWithStateModalDelete
          id={id}
          deleteItem={dispatchDeletePost}
        />
        <CellWithStateModalEdit
          id={id}
        />
      </tr>
    );
  }
}

const mapDispatchToProps = {
  dispatchDeletePost: deletePost,
};

export default connect(null, mapDispatchToProps)(Post);
