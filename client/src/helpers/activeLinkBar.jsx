import { sidebarData } from "../data/sideBarData";
import { tobbarData } from "../data/tobbarData";


export default function activeLinkBar( txt, typeActive) {
        if(typeActive){
                sidebarData.links[0].forEach((link) => {
                        link.classLink = txt == link.txt ? 'active' : null
                });
        }else{
                tobbarData.links.forEach((link) => {
                        link.classLink = txt == (link.txt).toLowerCase() ? 'activeV' : null
                });
        }
}