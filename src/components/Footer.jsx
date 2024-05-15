import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLeaderboard, MdOutlineHome } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-300 shadow  dark:bg-gray-800">
      <div className="flex mx-auto max-w-md">
        <Link to="/" className="w-full text-3xl flex justify-center p-2 hover:bg-gray-800 hover:text-white border-2">
          <MdOutlineHome />
        </Link>
        <Link to="/createThread" className="w-full text-3xl flex justify-center p-2 hover:bg-gray-800 hover:text-white border-2">
          <FaPlus />
        </Link>
        <Link to="/leaderboards" className="w-full text-3xl flex justify-center p-2 hover:bg-gray-800 hover:text-white border-2">
          <MdOutlineLeaderboard />
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
