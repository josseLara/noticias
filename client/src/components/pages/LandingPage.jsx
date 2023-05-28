import { useDispatch, useSelector } from "react-redux";
import { getComment, saveComment } from "../../_actions/comment_action";
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

    let onCategoryPaginationHandler = (category) => {
        setCategoryPaginatio(category)
        setPagination(1)
        
    }
    
    let onPaginationHandler = (num) => {
        let pag = pagination + num;

        if (pag > 0) {
            
            dispatch(getNewsPagination(categoryPagination, pag)).then((response) => {
                if ((response.payload.articles).length == 0) {

                    dispatch(getNewsPagination(categoryPagination, pag - 1)).then((response) => {
                        // Manejar la respuesta de la llamada a getNewsPagination con pag-1
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

            dispatch(getStorageNews(user.userData)).then((response) => {
                if (response.payload.success) {

                } else {
                    alert('Error getting saved news');
                }
            });
        }

        dispatch(getNewsGeneral('general')).then((response) => {
            if (response.payload.status == "ok") {

            } else {
                alert('error save comment');
            }
        });


    }, [user])


    return (
        <LandingState states={{
            sidebarData, tobbarData, newsData, pagination,
            onPaginationHandler, paginationArrowLeft, paginationArrowRight,onCategoryPaginationHandler
        }}>
            <LandingTemplate sideBarData={sidebarData} tobBarData={tobbarData} />
        </LandingState>
    );
}

export default LandingPage;