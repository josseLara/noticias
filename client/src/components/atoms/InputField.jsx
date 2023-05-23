import { styled } from "styled-components";

function InputField({label,inputValue="",inputType="text",onChange, placeHolder}) {
    return (
            <Input>
                <label htmlFor="">{label}</label>
                <input type={inputType} defaultValue={inputValue} 
                required="required" onChange={onChange ?? null} 
                placeholder={placeHolder ?? null}/>
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