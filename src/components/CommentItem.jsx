import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function CommentItem({ content, createdAt, owner, upVotesBy, downVotesBy }) {
  const { name, avatar } = owner;
  return (
    <div className="border px-6 py-4 rounded-lg bg-white">
      <div className="flex items-center mb-6">
        <img src={avatar} alt="" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <div className="text-lg font-medium text-gray-800">{name}</div>
          <div className="text-gray-500">{postedAt(createdAt)}</div>
        </div>
      </div>
      <div className="text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content }} />
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-x-6">
          <div>
            <BiLike size={20} /> {upVotesBy.length || 0}
          </div>
          <div>
            <BiDislike size={20} /> {downVotesBy.length || 0}
          </div>
        </div>
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const CommentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  downVotesBy: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};

CommentItem.propTypes = {
  ...CommentItemShape,
};

export { CommentItemShape };

export default CommentItem;
