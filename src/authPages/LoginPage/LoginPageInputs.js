import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInputs = ({mail, setMail, password, setPassword}) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="email"
        placeholder="enter email address"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="password"
        type="password"
        placeholder="enter password"
      /> 
    </>
  );
};

export default LoginPageInputs;