import { styled } from "styled-components";
import FormLogin from "../molecules/FormLogin";
import Title from "../atoms/Title";


function CardLogin({InputFileParam,BtnText,title,link}) {
    return ( 
        <Card>
            <Title>{title}</Title>
            <FormLogin InputFileParam={InputFileParam} BtnText={BtnText}/>
            <a href="">{link}</a>        
        </Card>
     );
}

const Card = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h1{
        font-size: 2.5rem;
        font-weight: 900;
    }
`
export default CardLogin;