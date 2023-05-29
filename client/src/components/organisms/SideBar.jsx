import { styled } from "styled-components";
import SideBarLinks from "../molecules/SideBarLinks";
import BtnToggle from "../atoms/BtnToggle";
import { useSelector } from "react-redux";
import { useSpring, animated } from 'react-spring';
import { useState } from "react";

function SideBar({ links, onLogoutNewsHandler }) {
    const user = useSelector(state => state.user.userData)
    // animations spring
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const ShowAnim = useSpring({
        from: { x: '-210%', position: 'fixed', zIndex: 100 },
        to: { x: '0%', position: 'fixed' },
        loop: false,
        reverse: sidebarToggle,
        config: { mass: 2, tension: 2500, friction: 1200 },
    });

    return (
        <Content>
            <BtnToggle click={() => setSidebarToggle(!sidebarToggle)} />
            <animated.aside style={ShowAnim}>
                <SideBarContent>

                    {/* molecule */}
                    <SideBarUser>
                        <img src={user?.photo ?? "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="user" />
                        <div>
                            <span className="name">{user?.name}</span>
                            <span className="connect">connect</span>
                        </div>
                    </SideBarUser>
                    {/*  */}

                    <SideBarLinks links={links[0]} />

                    {/*  */}
                    <SideBarLinks links={links[1]} onLogoutNewsHandler={onLogoutNewsHandler} />

                    <div></div>
                </SideBarContent>
            </animated.aside>
        </Content>
    );
}

let Content = styled.div`

    aside{
        
        @media (min-width: 700px){
            position:relative !important;
         }
        }
`;
let SideBarContent = styled.aside`
    width: 160px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #0d1117;
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