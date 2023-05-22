import { styled } from "styled-components";

function Link({ txt, icon = "", className ="" }) {
    return (

        <LinkItem className={className}>
            {icon}
            {txt}
        </LinkItem>

    );
}


let LinkItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    font-weight: 500;
    color: #fff;

    svg{
        font-size: 1.4rem;
    }

    

`;

export default Link;