import { useDispatch, useSelector } from "react-redux";
import { getComment, saveComment } from "../../_actions/comment_action";
import LandingTemplate from "../templates/LandingTemplate";
import { sidebarData } from "../../data/sideBarData";
import { tobbarData } from "../../data/tobbarData";
import { useEffect } from "react";
import activeLinkSidebar from "../../helpers/activelinkSidebar";


function LandingPage() {
    // borrar
    let dispatch = useDispatch();
    let body = {
        "name": "jos",
        "email": "josse@gmail.com",
        "comment": "holl",
        "created_at": "2022-02-01",
        "news_id": 1
    }
    const user = useSelector(state => state.user);

    useEffect(()=>{
        // sidebarData.user.name = user.userData.name;
        // sidebarData.links[0][0].classLink= 'active'
        activeLinkSidebar('News')
    })

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
        <LandingTemplate sideBarData={sidebarData} tobBarData={tobbarData}/>
    );
}

export default LandingPage;