// import { getComment, saveComment } from "../../_actions/comment_action";
import { useDispatch, useSelector } from "react-redux";
import LandingTemplate from "../templates/LandingTemplate";
import { sidebarData } from "../../data/sideBarData";
import { tobbarData } from "../../data/tobbarData";
import { useEffect, useState } from "react";
import { getNewsGeneral, getNewsPagination, getStorageNews } from "../../_actions/news_action";
import activeLinkBar from "../../helpers/activeLinkBar";
import LandingState from "../../context/Landing/LandingState";


function LandingPage() {

    let dispatch = useDispatch();
    const user = useSelector(state => state.user);
    let newsData = useSelector(state => state.news);
    const [pagination, setPagination] = useState(1);
    const [paginationArrowLeft, setPaginationArrowLeft] = useState(false);
    const [paginationArrowRight, setPaginationArrowRight] = useState(true);
    const [categoryPagination, setCategoryPaginatio] = useState('general');

    // Handler for category pagination
    let onCategoryPaginationHandler = (category) => {
        setCategoryPaginatio(category)
        setPagination(1)
    }

    // Handler for pagination
    let onPaginationHandler = (num) => {
        let pag = pagination + num;

        if (pag > 0) {
            // Dispatch action to get news with pagination
            dispatch(getNewsPagination(categoryPagination, pag)).then((response) => {
                if ((response.payload.articles).length == 0) {
                    // If there are no more articles, go back one page
                    dispatch(getNewsPagination(categoryPagination, pag - 1)).then((response) => {
                        // Handle response from getNewsPagination with pag-1
                        setPaginationArrowRight(false)
                        setPagination(pag - 1);
                    });
                } else {
                    setPaginationArrowRight(true);
                }
            });
            if (pag == 1) {
                setPaginationArrowLeft(false);
            } else {
                setPaginationArrowLeft(true);
            }
        }
        setPagination(pag);
    };

    useEffect(() => {
        // SideBar active event 
        activeLinkBar('News', true);
        if (user.userData) {
            // Dispatch action to get saved news
            dispatch(getStorageNews(user.userData)).then((response) => {
                if (response.payload.success) {
                    // Handle successful response
                } else {
                    alert('Error getting saved news');
                }
            });
        }

        // Dispatch action to get general news
        dispatch(getNewsGeneral('general')).then((response) => {
            if (response.payload.status == "ok") {
                // Handle successful response
            } else {
                alert('error save comment');
            }
        });
    }, [user])



    return (
        <LandingState states={{
            sidebarData, tobbarData, newsData, pagination,
            onPaginationHandler, paginationArrowLeft, paginationArrowRight, onCategoryPaginationHandler
        }}>
            <LandingTemplate sideBarData={sidebarData} tobBarData={tobbarData} />
        </LandingState>
    );
}

export default LandingPage;









// ------
