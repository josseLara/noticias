import { styled } from "styled-components";
import FormAuth from "../molecules/FormAuth";
import Title from "../atoms/Title";
import { Link } from "react-router-dom";


function AuthCard({inputFileParam,btnText,title,link, onSubmitForm}) {
    return ( 
        <Card>
            <Title>{title}</Title>
            <FormAuth inputFileParam={inputFileParam} btnText={btnText} onSubmitForm={onSubmitForm}/>
            <Link to={ link == "I am not registered" ? "/register" : "/login" }>{link}</Link>        
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
export default AuthCard;