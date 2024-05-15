import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardsList({ user, score }) {
  return (
    <tr>
      <td className="py-3 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-[30px] w-[30px] rounded-full">
            <img src={user.avatar} className="h-full w-full rounded-full" alt="" />
          </div>
          <p className="text-navy-700 text-sm font-medium ">{user.name}</p>
        </div>
      </td>
      <td className="py-3 text-sm">
        <p className="text-md font-medium text-gray-600 ">{score}</p>
      </td>
    </tr>
  );
}

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

LeaderboardsList.propTypes = {
  score: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

export default LeaderboardsList;
