import React, { useEffect } from 'react';
import { GrScorecard } from 'react-icons/gr';
import { Spinner } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboard/action';
import LeaderboardsList from '../components/LeaderboardsList';

function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  if (leaderboards === null) {
    return (
      <div className="flex justify-center h-screen items-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex h-[80vh] flex-col items-center justify-center">
        <div className="relative flex w-full max-w-[500px] flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3]">
          <div className="flex flex-row gap-x-2 h-fit w-full items-center rounded-t-2xl bg-slate-200 px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100">
            <GrScorecard size={20} />
            <h4 className="text text-xl font-semibold">Leaderboards</h4>
          </div>
          <div className="w-full px-4 ">
            <table role="table" className="w-full min-w-[500px] overflow-y-scroll">
              <thead>
                <tr role="row">
                  <th colSpan={1} role="columnheader" title="Toggle SortBy" style={{ cursor: 'pointer' }}>
                    <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">Name</div>
                  </th>
                  <th colSpan={1} role="columnheader" title="Toggle SortBy" style={{ cursor: 'pointer' }}>
                    <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">Score</div>
                  </th>
                </tr>
              </thead>
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <tbody role="rowgroup" className="px-4">
                {leaderboards.map((leaderboard) => (
                  <LeaderboardsList key={leaderboard.user.id} {...leaderboard} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardsPage;
