import React from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col gap-6">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput id="name" type="text" placeholder="Name" value={name} onChange={onNameChange} required />
      </div>
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

      <Button type="submit" onClick={() => register({ name, email, password })}>
        Register
      </Button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
