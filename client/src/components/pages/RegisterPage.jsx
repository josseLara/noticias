import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import RegisterTemplate from '../templates/RegisterTemplate';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Define state variables for email, password, name, and confirm password
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  // Define event handlers for changes to email, password, name, and confirm password
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  // Define event handler for form submission
  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Check if password and confirm password match
    if (Password !== ConfirmPassword) {
      return alert('Password and Confirm Password must be the same.');
    }

    // Create object with user information
    let body = {
      email: Email,
      password: Password,
      name: Name,
      lastName:"",
      role:"",
      tokenExp: 1
    };

    // Dispatch action to register user
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate('/login');
      } else {
        alert('Failed to sign up');
      }
    });
  };

  // Define input fields for form
  const inputFileParam = useMemo(() => {
    return [
      { label: "Name", inputValue: "", inputType: "Name", onChange: onNameHandler, placeHolder: "Name" },
      { label: "Email", inputValue: "", inputType: "email", onChange: onEmailHandler, placeHolder: "youname@example.com" },
      { label: "Password", inputValue: "", inputType: "password", onChange: onPasswordHandler, placeHolder: "password" },
      { label: "Confirm Password", inputValue: "", inputType: "password", onChange: onConfirmPasswordHandler, placeHolder: "confirm password" },
    ];
  }, []);
  
  return (
    <RegisterTemplate 
    inputFileParam={inputFileParam} btnText="Send" title="Register" 
    link="I'm already registered" onSubmitForm={onSubmitHandler}
    />
  );
}


export default RegisterPage;




