import { styled } from "styled-components";

function InputField({label,InputValue="",InputType="text"}) {
    return (
            <Input>
                <label htmlFor="">{label}</label>
                <input type={InputType} value={InputValue}/>
            </Input>
    );
}


const Input = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    label{
        font-size: 1rem;
        font-weight: 700;
    }
    input{
        padding: 8px 16px;
        background: transparent;
        border-radius: 5px;
        border: 1px solid #fff;
        font-weight: 600;
        font-size: 1.3rem;
    }
`
export default InputField;