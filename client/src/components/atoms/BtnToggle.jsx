import { styled } from "styled-components";
import {GrMenu} from 'react-icons/gr';

function BtnToggle({click}) {
    return (
        <Button onClick={click}>
            <GrMenu />
        </Button>
    );
}


let Button = styled.div`
    position: fixed;
    width: 40px;
    height: 40px;
    left: 10px;
    z-index: 5;
    border-radius: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 100vw;
    @media (max-width:700px) {
          left: 20px;
          top: 20px;
    }
`;

export default BtnToggle;