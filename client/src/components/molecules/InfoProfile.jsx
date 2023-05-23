import { styled } from "styled-components";
import InputField from "../atoms/InputField";

let InputFileParam = [
    {label:"Nombre",InputValue:"Marcos",InputType:"text"},
    {label:"Full Name",InputValue:"Marcos",InputType:"text"},
    {label:"Phone Number",InputValue:"Marcos",InputType:"text"},
    {label:"Email Address",InputValue:"Marcos",InputType:"text"},
]
function InfoProfile() {
    return (
        <Info onSubmit={() => null}>
           {InputFileParam.map((inputProps,index)=> <InputField {...inputProps} key={index}/>)}
        </Info>
    );
}

const Info = styled.form`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 60px;
    flex-wrap: wrap;
    @media (max-width:700px) {
         grid-template-columns: 1fr;
         justify-items: center;
         align-items: center
        };
    
`;

export default InfoProfile;