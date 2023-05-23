import { styled } from "styled-components";
import TobBarLinks from "../molecules/TobBarLinks";
import { IoMdNotifications } from 'react-icons/io';
import { RiMessage3Fill } from 'react-icons/ri';
import Search from "../molecules/Search";

let linksBar = [
    { txt: "Sports", classLink: "activeV" },
    { txt: "Finance" },
    { txt: "Politics" },
]
function TopBar() {
    return (
        <TobBar>
            <img src="https://i.ytimg.com/vi/-DV9h8zTXwg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNus1KU53X_qzMYjnNk4DvJ3yYSg" alt="logo" />

            <TobBarLinks links={linksBar} />

            <IconsBar>
                <IoMdNotifications />
                <RiMessage3Fill />
            </IconsBar>

            <Search />
        </TobBar>
    );
}

const TobBar = styled.header`
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        grid-row: 1/2;
        width: 50px;
        height: 40px;
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

const IconsBar = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    gap: 6px;
    margin-left: 27%;
    svg:hover{
        cursor: pointer;
        color: #1E74F6;
    }

    @media (max-width:700px) {
        justify-self: center;
        grid-row: 2/3;
        margin-left: 0px;
       
    }
`;

export default TopBar;