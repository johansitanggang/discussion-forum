import React from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <Card className="max-w-xl mx-auto mt-60">
        <h2 className="text-center text-2xl font-bold text-cyan-800">Login</h2>
        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </Card>
    </section>
  );
}

export default LoginPage;
