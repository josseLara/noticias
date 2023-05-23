import { styled } from "styled-components";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";
import {AiOutlineLogin} from 'react-icons/ai';

let InputFileParam = [
    { label: "Email", InputValue: "", InputType: "email" },
    { label: "Password", InputValue: "", InputType: "password" },

]
function FormLogin() {
    return (
        <Login>
            {InputFileParam.map((inputProps, index) => <InputField {...inputProps} key={index} />)}
            
            <Button>Log In <AiOutlineLogin/></Button>
        </Login>
    );
}

const Login = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff14;
    backdrop-filter: blur(20px);
    border-radius: 10px;
    padding: 15px;
    gap: 30px;
    button{
        width: 110px;
        display: flex;
        align-items: center;
        gap: 10px;
        
  }
`;

export default FormLogin;