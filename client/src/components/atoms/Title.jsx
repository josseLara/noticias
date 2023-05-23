import { styled } from "styled-components";

function Title({children}) {
    return ( 
        <MainTitle>{children}</MainTitle>
     );
}

const MainTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: 600;
    color: #fff;
    margin: 0;
    height: fit-content;
    margin: 0;
    padding: 0;
`;
export default Title;