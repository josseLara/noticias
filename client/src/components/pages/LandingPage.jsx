import { useDispatch, useSelector } from "react-redux";
import { getComment, saveComment } from "../../_actions/comment_action";
import LandingTemplate from "../templates/LandingTemplate";
import { sidebarData } from "../../data/sideBarData";
import { tobbarData } from "../../data/tobbarData";
import { useEffect, useState } from "react";
import { getNewsGeneral, getStorageNews } from "../../_actions/news_action";
import activeLinkBar from "../../helpers/activeLinkBar";
import LandingState from "../../context/Landing/LandingState";


function LandingPage() {

    let dispatch = useDispatch();
    const user = useSelector(state => state.user);
    let newsData = useSelector(state => state.news);

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
        <LandingState states={{sidebarData, tobbarData, newsData}}>
            <LandingTemplate sideBarData={sidebarData} tobBarData={tobbarData} />
        </LandingState>
    );
}

export default LandingPage;