import { useDispatch } from "react-redux";
import SideBar from "../organisms/SideBar";
import TopBar from "../organisms/TopBar";
import { styled } from "styled-components";
import { getNewsGeneral, getSearchNews } from "../../_actions/news_action";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import activeLinkBar from "../../helpers/activeLinkBar";


function Layout({ children, sideBarData, tobBarData }) {

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

    // -----> TopBar Category <-------

    const onCategoryNewsHandler = (categoryNews) => {

        activeLinkBar(categoryNews, false);

            dispatch(getNewsGeneral(categoryNews)).then((response) => {
                if (response.payload.status == "ok") {

                } else {
                    alert('error save comment');
                }
            });
        
            if (location.pathname !== '/' || location.pathname !== '/index') {
                // Navigate to the search page
                navigate('/');
            }
    };


    // 
    return (
        <>
            <TopBar {...tobBarData} onCategoryNewsHandler={onCategoryNewsHandler} onSearchHandler={onSearchHandler} />

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