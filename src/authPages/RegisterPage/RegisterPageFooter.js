import React from 'react';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Enter correct e-mail address, username should contains between 3 and 12 characters and password should contains between 6 and 12 characters.";
};

const getFormValidMessage = () => {
  return "Press to register";
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const history = useNavigate();

  const handlePushToLoginPage = () => {
    history("/login");
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="You have already an account?"
        additionalStyles={{ marginTop: "5px", marginBottom: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;