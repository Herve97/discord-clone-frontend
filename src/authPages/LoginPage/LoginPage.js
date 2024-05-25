import React, {useState, useEffect} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import {validateLoginForm} from '../../shared/utils/validators';
import {connect} from 'react-redux';
import {getActions} from '../../store/actions/authActions';
import { useNavigate } from "react-router-dom";

const LoginPage = ({login}) =>{
  const history = useNavigate();
  const [mail, setMail]= useState('');
  const [password, setPassword]= useState('');
  const [isFormValid, setIsFormvalid]= useState(false);

  useEffect(()=>{
    setIsFormvalid(validateLoginForm({mail, password}))
  }, [mail, password, setIsFormvalid])

  const handleLogin = ()=>{
    const userDetails = {
      mail, password
    }
    login(userDetails, history);
  }

  return (
    <AuthBox>
      <LoginPageHeader/>
      <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )

}

const mapActionsToProps = (dispatch) =>{

  return {
    ...getActions(dispatch)
  }

}

export default connect(null, mapActionsToProps)(LoginPage);