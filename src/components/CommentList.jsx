import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { CommentItemShape } from './CommentItem';

function CommentList({ comments }) {
  return (
    <div className="flex flex-col gap-y-4">
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(CommentItemShape)).isRequired,
};

export default CommentList;
