import React from 'react';
import { Card } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/login');
  };

  return (
    <section className="register-page">
      <Card className="max-w-xl mx-auto mt-60">
        <h2 className="text-center text-2xl font-bold text-cyan-800">Create your account</h2>
        <RegisterInput register={onRegister} />
        <p>
          Already have an account?
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </Card>
    </section>
  );
}

export default RegisterPage;
