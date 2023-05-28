import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/user_action';
import { Link, useNavigate } from 'react-router-dom';
import LoginTemplate from '../templates/LoginTemplate';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State variables for email and password inputs
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  // Event handlers for email and password inputs
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  // Event handler for form submission
  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Create an object with email and password values
    let body = {
      "email": Email,
      "password": Password,
    };

    // Dispatch a loginUser action with the body object
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.success) {
        // If the login is successful, navigate to the home page and store the user ID in local storage
        navigate('/');
        window.localStorage.setItem('userId', response.payload.userId);
      } else {
        // If the login is unsuccessful, show an error message
        alert('Error');
      }
    });
  };

  // Create an array of objects with input label, value, type, onChange function, and placeholder for email and password inputs
  const inputFileParam = useMemo(() => {
    return [
      { label: "Email", inputValue: "", inputType: "email", onChange: onEmailHandler, placeHolder: "youname@example.com" },
      { label: "Password", inputValue: "", inputType: "password", onChange: onPasswordHandler, placeHolder: "password" },
    ];
  }, []);

  // Render the LoginTemplate component with the inputFileParam array, button text, title, link, and onSubmitForm function
  return (
    <LoginTemplate 
    inputFileParam={inputFileParam} btnText="Sig In" title="Login" 
    link="I forgot the password" onSubmitForm={onSubmitHandler}
    />
  );
}

export default LoginPage;