import { styled } from "styled-components";
import TobBarLinks from "../molecules/TobBarLinks";
import { IoMdNotifications } from 'react-icons/io';
import { RiMessage3Fill } from 'react-icons/ri';
import Search from "../molecules/Search";


function TopBar({logo,links,onCategoryNewsHandler,onSearchHandler}) {
    return (
        <TobBar>
            <img src={logo} alt="logo" />

            <TobBarLinks links={links} onCategoryNewsHandler={onCategoryNewsHandler}/>

            <Search onSearchHandler={onSearchHandler}/>
        </TobBar>
    );
}

const TobBar = styled.header`
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0d1117;

    img{
        grid-row: 1/2;
        width: 70px;
        height: 70px;
        object-fit: cover;
        margin-left: 20px;
    }


    @media (max-width:700px) {
      height: 130px;
      display: grid;
      grid-column-end: span;
      grid-template-columns: repeat(2,1fr);
     
    }
`;



export default TopBar;