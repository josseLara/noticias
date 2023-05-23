import { styled } from "styled-components";

function Link({ txt, icon = "", classLink="" }) {
    return (
        <LinkItem className={classLink} active={classLink}>
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
    position: relative;

    svg{
        font-size: 1.4rem;
    }

   ${props => props.active === 'active'  &&
    ` &::after{
        content:' ';
        width: 3px;
        height: 100%;
        display: inline;
        background-color: #1E74F6;
        position: absolute;
        right: 0px;
    }
    `}

    ${
        props => props.active === "activeV" &&
        `
        &::after{
        content: '';
        width: 100%;
        height: 2px;
        background-color: #1E74F6;
        position: absolute;
        bottom: -10px;
    }
        `
    }
`;

export default Link;