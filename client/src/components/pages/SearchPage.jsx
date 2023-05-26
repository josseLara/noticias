import { useSelector } from "react-redux";
import { sidebarData } from "../../data/sideBarData";
import { tobbarData } from "../../data/tobbarData";
import SearchTemplate from "../templates/SearchTemplate";

function SearchPage() {
    const searchNews = useSelector( state => state.news.searchNews?.articles) ?? [];
    
    return ( 

        <SearchTemplate sideBarData={sidebarData} tobBarData={tobbarData} searchNews={searchNews}/>
    
     );
}

export default SearchPage;