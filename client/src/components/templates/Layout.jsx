import { useDispatch } from "react-redux";
import SideBar from "../organisms/SideBar";
import TopBar from "../organisms/TopBar";
import { styled } from "styled-components";
import { getSearchNews } from "../../_actions/news_action";
import { useLocation, useNavigate } from "react-router-dom";


function Layout({ children, sideBarData, tobBarData, onCategoryNewsHandler }) {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    
    // -----> SEARCH <-------
    const onSearchHandler = (value) => {
        dispatch(getSearchNews(value));

        if (location.pathname !== '/search') {
            // Navigate to the search page
            navigate('/search');
          }
    };

    return (
        <>
            <TopBar {...tobBarData} onCategoryNewsHandler={onCategoryNewsHandler} onSearchHandler={onSearchHandler}/>

            <Main>
                <SideBar {...sideBarData} />
                {children}
            </Main>
        </>
    );
}


// 
const Main = styled.main`
    width: 100%;
    display: flex;
    gap: 10px;
 
 
`;
export default Layout;