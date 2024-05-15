import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { Avatar } from 'flowbite-react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

// eslint-disable-next-line object-curly-newline
function ThreadDetail({ id, title, body, category, createdAt, owner, upVotesBy, downVotesBy }) {
  const { name, avatar } = owner;
  return (
    <div className="flex flex-col space-y-4 rounded-lg bg-white p-4 shadow-md">
      <p className="w-fit rounded-lg border-2 border-gray-200 px-2 py-0.5 text-sm">{category}</p>
      <div className="flex flex-row items-center gap-x-4">
        <Avatar img={avatar} alt={id} title={name} rounded />
        <h3 className="text-lg font-bold">{name}</h3>
      </div>

      <h4 className="text-lg font-bold text-gray-500">{title}</h4>

      <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: body }} />

      <div className="flex flex-col gap-y-2">
        <div className="flex flex-row gap-x-4">
          <p className="text-sm">
            {/* eslint-disable-next-line */}
            <BiLike size={20} /> {upVotesBy.length || 0}
          </p>
          <p className="text-sm">
            {/* eslint-disable-next-line */}
            <BiDislike size={20} /> {downVotesBy.length || 0}
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

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};

export default ThreadDetail;
