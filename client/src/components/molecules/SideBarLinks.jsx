import { styled } from "styled-components";
import Link from "../atoms/Link";

function SideBarLinks({links,onLogoutNewsHandler}) {
    return (
            
            <Links>
                {
                    links.map((link,index) => <Link {...link} key={index} onLogoutNewsHandler={onLogoutNewsHandler}/>)
                }
            </Links>

    );
}



let Links = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    flex-direction: column;
    
    li:hover{
        color: #1E74F6;
        cursor: pointer;
    }

`;
export default SideBarLinks;