import { styled } from "styled-components";
import SideBarLinks from "../molecules/SideBarLinks";
import { BiNews } from 'react-icons/bi';
import { MdOutlineAccountCircle, MdOutlineSportsBasketball } from 'react-icons/md';
import {  AiOutlineInbox } from 'react-icons/ai'
import {IoExit} from 'react-icons/io5';
import BtnToggle from "../atoms/BtnToggle";

let linksList =[
    {txt:'News',icon:<BiNews/>},
    {txt:'Store',icon:<AiOutlineInbox/>},
]
let linksList1 =[
    {txt:'Account',icon:<MdOutlineAccountCircle/>},
    {txt:'Log out',icon:<IoExit/>},
]
function SideBar() {
    return (
        <SideBarContent>
            
            <BtnToggle />

            {/* molecule */}
            <SideBarUser>
                <img src="https://cdn.dribbble.com/userupload/5279196/file/original-e7ac5ca215cbd2df38d4165020026124.png?compress=1&resize=1504x1665&vertical=center" alt="user" />
                <div>
                    <span className="name">elfaro jaldo</span>
                    <span className="connect">connect</span>
                </div>
            </SideBarUser>
            {/*  */}

            <SideBarLinks links={linksList} />

            {/*  */}
            <SideBarLinks links={linksList1} />
            
            <div></div>
        </SideBarContent>
    );
}


let SideBarContent = styled.aside`
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media (max-width:700px) {
        position: absolute;
          left: 100vw;
    }
`;

let SideBarUser = styled.aside`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
    padding-top: 10px;
    position: relative;

    img{
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 100%;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .name{
        font-size: 1.1rem;
        color: #fff;
        font-weight: 600;
    }
    .connect{
        color: #13b513;
        font-weight: 600;
        font-size: .8rem;
    }
`;


export default SideBar;