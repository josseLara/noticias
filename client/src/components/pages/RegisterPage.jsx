import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import RegisterTemplate from '../templates/RegisterTemplate';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

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

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('Password and Confirm Password must be the same.');
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
      lastName:"",
      role:"",
      tokenExp: 1
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate('/login');
      } else {
        alert('Failed to sign up');
      }
    });
  };

  const inputFileParam = useMemo(() => {
    return [
      { label: "Name", inputValue: "", inputType: "Name", onChange: onNameHandler, placeHolder: "Name" },
      { label: "Email", inputValue: "", inputType: "email", onChange: onEmailHandler, placeHolder: "youname@example.com" },
      { label: "Password", inputValue: "", inputType: "password", onChange: onPasswordHandler, placeHolder: "password" },
      { label: "Confirm Password", inputValue: "", inputType: "password", onChange: onConfirmPasswordHandler, placeHolder: "confirm password" },
    ];
  }, []);

  return (
    // <Container>
    //   <RegisterForm
    //     style={{ display: 'flex', flexDirection: 'column' }}
    //     onSubmit={onSubmitHandler}
    //   >
    //     <Title>Create an account</Title>
    //     <InputContainer>
    //       <label htmlFor="">Email</label>
    //       <input
    //         type="email"
    //         value={Email}
    //         onChange={onEmailHandler}
    //         placeholder="email"
    //         required="required"
    //       />
    //     </InputContainer>

    //     <InputContainer>
    //       <label htmlFor="">Name</label>
    //       <input
    //         type="text"
    //         value={Name}
    //         onChange={onNameHandler}
    //         placeholder="name"
    //         required="required"
    //       />
    //     </InputContainer>

    //     <InputContainer>
    //       <label htmlFor="">Password</label>
    //       <input
    //         type="password"
    //         value={Password}
    //         onChange={onPasswordHandler}
    //         placeholder="password"
    //         required="required"
    //       />
    //     </InputContainer>

    //     <InputContainer>
    //       <label htmlFor="">Confirm Password</label>
    //       <input
    //         type="password"
    //         value={ConfirmPassword}
    //         onChange={onConfirmPasswordHandler}
    //         placeholder="confirm password"
    //         required="required"
    //       />
    //     </InputContainer>

    //     <SubmitButton type="submit">Create account</SubmitButton>
    //   </RegisterForm>
    // </Container>

    <RegisterTemplate 
    inputFileParam={inputFileParam} btnText="Send" title="Register" 
    link="I'm already registered" onSubmitForm={onSubmitHandler}
    />
  );
}


export default RegisterPage;