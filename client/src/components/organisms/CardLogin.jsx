import { styled } from "styled-components";
import FormLogin from "../molecules/FormLogin";
import Title from "../atoms/Title";

function CardLogin() {
    return ( 
        <Card>
            <Title>Login</Title>
            <FormLogin/>
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
        font-size: 2rem;
    }
`
export default CardLogin;