import { styled } from "styled-components";

function Button({ children,onClick }) {
    return (
        <Btn onClick={onClick}>{children}</Btn>
    );
}

const Btn = styled.button`
    width: fit-content;
    padding: 10px 15px;
    background-color: #ee7234;
    color: #000;
    display: flex;
    gap: 5px;
    align-items: center;
    margin-top: 20px;
    border: 1px solid transparent;

    &:hover{
        cursor: pointer;
        background-color: transparent;
        border: 1px solid #ee7234;
        color: #ee7234;
    }
`;
export default Button;