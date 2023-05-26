import { styled } from "styled-components";
import SideBarLinks from "../molecules/SideBarLinks";
import BtnToggle from "../atoms/BtnToggle";


function SideBar({user,links,onLogoutNewsHandler}) {
    return (
        <SideBarContent>
            
            <BtnToggle />

            {/* molecule */}
            <SideBarUser>
                <img src={user.img} alt="user" />
                <div>
                    <span className="name">{user.name}</span>
                    <span className="connect">connect</span>
                </div>
            </SideBarUser>
            {/*  */}

            <SideBarLinks links={links[0]} />

            {/*  */}
            <SideBarLinks links={links[1]} onLogoutNewsHandler={onLogoutNewsHandler} />
            
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
    background-color: #0d1117;
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