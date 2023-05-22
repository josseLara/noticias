import { styled } from "styled-components";
import TobBarLinks from "./TobBarLinks";
import { IoMdNotifications } from 'react-icons/io';
import { RiMessage3Fill } from 'react-icons/ri';
import Search from "./Search";

let linksBar = [
    { txt: "Sports", className: "active" },
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
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img{
        width: 50px;
        height: 40px;
        object-fit: cover;
    }

    @media (max-width:700px) {
      display: grid;
      grid-column-end: span;
      grid-template-columns: repeat(3,1fr);
    }
`;

const IconsBar = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    gap: 6px;

    svg:hover{
        cursor: pointer;
        color: #1E74F6;
    }
`;

export default TopBar;