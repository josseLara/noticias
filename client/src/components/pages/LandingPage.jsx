import { useDispatch, useSelector } from "react-redux";
import { getComment, saveComment } from "../../_actions/comment_action";
import LandingTemplate from "../templates/LandingTemplate";
import { sidebarData } from "../../data/sideBarData";
import { tobbarData } from "../../data/tobbarData";
import { useEffect, useState } from "react";
import { getNewsGeneral, getStorageNews } from "../../_actions/news_action";
import activeLinkBar from "../../helpers/activeLinkBar";


function LandingPage() {
    // let [categoryNews, setCategoryNews] = useState('general');
    // const onCategoryNewsHandler = (category) => {
    //     setCategoryNews(category);
    // };

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

    // useEffect(() => {
    //     // data de news
    //     activeLinkBar(categoryNews, false);

    //     if (newsData) {
    //         dispatch(getNewsGeneral(categoryNews)).then((response) => {
    //             if (response.payload.status == "ok") {

    //             } else {
    //                 alert('error save comment');
    //             }
    //         });
    //     }
    // }, [categoryNews])

    let handleSaveComment = () => {
        // para que guarda la noticia
        // dispatch(saveComment(body)).then((response) => {
        //     if (response.payload.success) {

        //     } else {
        //       alert('error save comment');
        //     }
        //   });
        // console.log(user.userData.email)

        // ? obtener los comment por id
        // dispatch(getComment({id: 1})).then((response) => {
        //     if (response.payload.success) {
        //         console.log(response.payload)
        //     } else {
        //         alert('error save comment');
        //     }
        // });
    };

    return (
        <LandingTemplate sideBarData={sidebarData}
            tobBarData={tobbarData} newsData={newsData.allNews?.articles ?? null}
        />
    );
}

export default LandingPage;