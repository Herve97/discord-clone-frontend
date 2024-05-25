import React, { useState, useEffect } from "react";
import AuthBox from '../../shared/components/AuthBox';
import { ValidateRegisterForm } from "../../shared/utils/validators";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageHeader from "./RegisterPageHeader";
import RegisterPageInputs from "./RegisterPageInputs";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({register}) =>{

  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormvalid] = useState(false);

  useEffect(() => {
    setIsFormvalid(ValidateRegisterForm({ username, mail, password }));
  }, [username, mail, password, setIsFormvalid]);

  const handleRegister = () => {
    const userDetails = {
      username,
      mail,
      password,
    };
    register(userDetails, history);
  };

  return (
    <AuthBox>
      <RegisterPageHeader />
      <RegisterPageInputs
        username={username}
        setUsername={setUsername}
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );

}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);