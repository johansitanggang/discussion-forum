import React from 'react';
import { BiCommentDetail, BiLike, BiDislike } from 'react-icons/bi';
import { Avatar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadItem({ id, title, body, category, createdAt, upVotesBy, downVotesBy, totalComments, user }) {
  const { avatar, name } = user;

  return (
    <div className="flex flex-col space-y-4 rounded-lg bg-white p-4 shadow-md">
      <p className="w-fit rounded-lg border-2 border-gray-400 px-2 py-0.5 text-sm">#{category}</p>
      <div className="flex flex-row items-center gap-x-4">
        <Avatar img={avatar} alt={id} title={name} rounded />
        <h3 className="text-lg font-bold">{name}</h3>
      </div>
      <Link to={`threads/${id}`}>
        <h4 className="text-lg font-bold text-blue-500">{title}</h4>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-row gap-x-4">
          <p className="text-sm">
            <BiLike size={20} /> {upVotesBy.length || 0}
          </p>
          <p className="text-sm">
            <BiDislike size={20} /> {downVotesBy.length || 0}
          </p>
          <p className="text-sm">
            <BiCommentDetail size={20} /> {totalComments}
          </p>
        </div>
        <p className=" text-sm text-gray-700">
          Created
          {postedAt(createdAt)}
        </p>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  downVotesBy: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadItem;
