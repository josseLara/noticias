import { styled } from "styled-components";
import InputField from "../atoms/InputField";
import {BsSave} from 'react-icons/bs';
import Button from "../atoms/Button";

function InfoProfile({ inputFileParam }) {
    return (
        <Info onSubmit={() => null}>
            {inputFileParam.map((inputProps, index) => <InputField {...inputProps} key={index} />)}
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