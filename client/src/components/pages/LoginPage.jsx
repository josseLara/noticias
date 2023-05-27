import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/user_action';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginTemplate from '../templates/LoginTemplate';


function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      "email": Email,
      "password": Password,
      
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.success) {
        navigate('/');
        window.localStorage.setItem('userId', response.payload.userId);
      } else {
        alert('Error');
      }
    });
  };

  const inputFileParam = useMemo(() => {
    return [
      { label: "Email", inputValue: "", inputType: "email", onChange: onEmailHandler, placeHolder: "youname@example.com" },
      { label: "Password", inputValue: "", inputType: "password", onChange: onPasswordHandler, placeHolder: "password" },
    ];
  }, []);
  return (
    <LoginTemplate 
    inputFileParam={inputFileParam} btnText="Sig In" title="Login" 
    link="I forgot the password" onSubmitForm={onSubmitHandler}
    />
  );
}


export default LoginPage;