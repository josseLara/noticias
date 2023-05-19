import Layout from "@/components/Layout";
import styles from '../styles/storage.module.css';
import Max_Card from "@/components/pure/Max_Card";
import Storage_Indicator from "@/components/pure/Storage_Indicator";
import Storage_Users from "@/components/pure/Storage_Users";
import { useSelector } from "react-redux";

function Storage() {
  let favoritesNews = useSelector( state => state.dataFavorite.favorite)
  return (
    <Layout>
      {/* cards Noticias */}
      <main className={styles.main}>
        {/* 1 */}
        <div  className={styles.main__header}>
          <Storage_Indicator number={24} txt="Saved"/>
          <Storage_Users/>
          <Storage_Indicator number={224} txt="Followers"/>
        </div>
        {/*  */}
        <div className={styles.main__saved}>
          <h1>Guardados: <span>25 news</span></h1>
          <div className={styles.main__saved__list}>
            {
              favoritesNews.map((newFavorite,index) =>  <Max_Card newsFavoritesProp={newFavorite} sectionStorage={true} key={index}/>)
            }

          </div>
        </div>
      </main>
      {/* ................ */}

    </Layout >
  );
}

export default Storage;