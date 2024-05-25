import React from 'react';
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterPageInputs = ({ username, setUsername, mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="username"
        type="text"
        placeholder="enter username"
      />
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

export default RegisterPageInputs;