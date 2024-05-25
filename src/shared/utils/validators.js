export const validateLoginForm = ({mail, password})=>{
  const isMailValid = validateMail(mail);
  const isPasswordvalid = validatePassword(password);

  return isMailValid && isPasswordvalid;
}

export const ValidateRegisterForm = ({username, mail, password})=>{
  const isUsernameValid = validateUsername(username);
  const isMailValid = validateMail(mail);
  const isPasswordvalid = validatePassword(password);

  return isUsernameValid && isMailValid && isPasswordvalid;
}

const validatePassword = (password)=>{
  return password.length > 5 && password.length <= 12; 
}

const validateUsername = (username)=>{
  return username.length > 2 && username.length <= 12; 
}

export const validateMail = (mail)=>{
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4}$/;
  return emailPattern.test(mail);
}