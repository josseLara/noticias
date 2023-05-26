import { styled } from "styled-components";

// icons
import { AiOutlineLink } from 'react-icons/ai';

function ContextMenu({ toggle,onCopyLinkHandler }) {
    return (
        <>
            {toggle &&
                <Menu>
                    <ContextItem onClick={onCopyLinkHandler}>
                        <AiOutlineLink />
                        Url
                    </ContextItem>
                </Menu>
            }
        </>
    );
}

const Menu = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #fff;
    color: #000;
    padding: 10px;
    font-size: 1rem;
    border-radius: 10px;
    bottom: -38px;
    right: 2px;
    svg{
        font-size: 1.4rem;
    }
`;

const ContextItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &:hover{
        color: #1e74f6;
        cursor: pointer;
    }

`
export default ContextMenu;