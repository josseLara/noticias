import { sidebarData } from "../data/sideBarData";

export default function activeLinkSidebar(txt){
        sidebarData.links[0].forEach((link) => {
                link.classLink = txt == link.txt ? 'active' : null
        });
}