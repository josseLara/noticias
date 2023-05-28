import { useContext } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { styled } from 'styled-components';
import { LandingContext } from '../../context/Landing/LandingContext';

function Pagination() {
    const {onPaginationHandler,paginationArrowLeft,paginationArrowRight } = useContext(LandingContext)

    return (
        <Content>
           {paginationArrowLeft && <IoIosArrowBack onClick={()=>onPaginationHandler(-1)}/>}
           {paginationArrowRight &&  <IoIosArrowForward onClick={()=>onPaginationHandler(1)}/>}
        </Content>
    );
}

const Content = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-left: auto;
    padding-right: 20px;

    svg{
        color: white;
        padding:10px;
        font-size: 20px;
        background-color: #0d1117;

        &:hover{
            background-color: #1E74F6;
            cursor: pointer;
        }
    }
`
export default Pagination;