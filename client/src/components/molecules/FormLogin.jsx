import { styled } from "styled-components";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";
import {AiOutlineLogin} from 'react-icons/ai';


function FormLogin({InputFileParam,BtnText}) {
    return (
        <Login>
            {InputFileParam.map((inputProps, index) => <InputField {...inputProps} key={index} />)}
            
            <Button>{BtnText} <AiOutlineLogin/></Button>

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
        
        svg{
            font-size: 1.4rem;
        }
  }

  @media (max-width:700px) {
        width: 90%;
  }
`;

export default FormLogin;