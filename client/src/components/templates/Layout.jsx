import { useDispatch } from "react-redux";
import SideBar from "../organisms/SideBar";
import TopBar from "../organisms/TopBar";
import { styled } from "styled-components";
import { getSearchNews } from "../../_actions/news_action";


function Layout({ children, sideBarData, tobBarData, onCategoryNewsHandler }) {

    const dispatch = useDispatch();
    // -----> SEARCH <-------
    const onSearchHandler = (value) => {
        dispatch(getSearchNews(value));
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