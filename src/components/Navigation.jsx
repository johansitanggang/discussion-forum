import React from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  return (
    <Navbar fluid rounded className="border-gray-500 border-2 rounded-lg mt-2 shadow-lg">
      <div>
        <h1 className="self-center whitespace-nowrap text-3xl font-bold dark:text-white">
          <Link to="/">Forum Diskusi</Link>
        </h1>
      </div>

      <div className="flex flex-row gap-x-2 md:order-2 items-center">
        <Dropdown className="border-2 border-gray-300" arrowIcon={false} inline label={<Avatar alt="" img={authUser.avatar} rounded />}>
          <Dropdown.Item className="text-red-500 text-md font-bold" onClick={signOut}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <h3 className="font-semibold text-slate-800">{authUser.name}</h3>
      </div>
    </Navbar>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
