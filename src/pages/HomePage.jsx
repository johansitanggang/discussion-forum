import React, { useEffect } from 'react';
import { Spinner } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import ThreadList from '../components/ThreadList';

function HomePage() {
  const { threads = [], users = [], authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  if (threads.length === 0) {
    return (
      <div className="flex justify-center h-screen items-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <section className="home-page">
      <div className="thread-list mx-auto max-w-6xl bg-gray-100 p-6 flex flex-col gap-y-4 mt-10">
        <h1 className="text-2xl font-semibold text-gray-800">Discussion available</h1>
        <ThreadList threads={threadList} />
      </div>
    </section>
  );
}

export default HomePage;
