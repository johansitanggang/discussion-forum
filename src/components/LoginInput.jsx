import React from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col gap-6">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput id="email" type="email" placeholder="Email" value={email} onChange={onEmailChange} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput id="password" type="password" placeholder="Password" value={password} onChange={onPasswordChange} required />
      </div>

      <Button type="button" onClick={() => login({ email, password })}>
        Login
      </Button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
