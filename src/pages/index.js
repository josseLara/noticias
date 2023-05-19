import Layout from '@/components/Layout'
import styles from '../styles/index.module.css';
import { useDispatch, useSelector } from 'react-redux'
import datosSlice, { setDataSports, setDataBusiness, setDataTechnology, setDatosGeneral } from '@/feactures/datos/datosSlice';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Scrollbar, A11y } from "swiper";
import Slider_News from '@/components/container/Slider_News';
import Min_Card from '@/components/pure/Min_Card';
import Tag from '@/components/pure/Tag';
import Max_Card from '@/components/pure/Max_Card';

// icons 
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { store } from '@/store';
import { ObtenerDatos } from '@/helpers/FetchNews';
import { Pagination } from '@/components/container/Pagination';


export default function Home() {
  let [dataNews, setDataNews] = useState();
  const dispatch = useDispatch();
  let typeNew = useSelector(state => state.datos.type);
  const newsContry = useSelector(state => state.datos.newsContry);
  let news = useSelector(state => state.datos[typeNew ?? "datosGeneral"]);
  let newsFavorite = useSelector(state => state.dataFavorite.favorite);

  // get data news
  useEffect(() => {

    let fetchData = async () => {
      if (typeNew) {
        if (typeNew == "datosGeneral") {
          let dataGeneral = await ObtenerDatos('general', newsContry, 1)
          dispatch(setDatosGeneral(dataGeneral))
        }
        else if (typeNew == "dataBusiness") {
          let dataBusiness = await ObtenerDatos('business', newsContry, 1)
          dispatch(setDataBusiness(dataBusiness))
        }
        else if (typeNew == "dataTechnology") {
          let dataTechnology = await ObtenerDatos('technology', newsContry, 1)
          dispatch(setDataTechnology(dataTechnology))
        }
      }
    }
    fetchData();

  }, [typeNew]);

  return (
    <Layout>
      {/* cards Noticias */}
      <main className={styles.main}>
        {/* 1  */}
        <div className={styles.main__left}>
          <Slider_News />
          {/* left cards */}
          <div className={styles.main__left__cards}>
            {news && news.status != 'error' && news.articles.map((itemNew, index) => <Max_Card key={index} newData={itemNew} number={index} />)}
          </div>
          <Pagination />
        </div>
        {/* main right */}
        <div className={styles.main__right}>

          <div className={styles.main__right__title}>
            <h1>Treding News</h1>
            <HiOutlineArrowNarrowRight />
          </div>
          {/* right cards */}
          <div className={styles.main__right__cards}>
            {news && news.status != 'error' && news.articles.slice(0, 3).map((itemNew, index) => <Min_Card key={index} newData={itemNew} number={index} />)}

          </div>
          <div className={styles.main__right__title}>
            <h1>Popular Tags</h1>
            <HiOutlineArrowNarrowRight />
          </div>
          {/* right tags */}
          <div className={styles.main__right__tags}>
            {
              ['Sport', 'Teach', 'Politics', 'News'].map(e => <Tag key={e} txt={e} />)
            }
          </div>

        </div>
      </main>
      {/* ................ */}

    </Layout >
  )
}


// export async function getServerSideProps(context) {

//   const language = store.getState().datos.language;

//   let datosGeneral = await ObtenerDatos('general', language)
//   let dataTechnology = await ObtenerDatos('technology', 'us')
//   let dataBusiness = await ObtenerDatos('business', 'us')
//   // let datosDeporte = await ObtenerDatos('sports', 'us')


//   return {
//     props: {
//       datosGeneral,
//       dataBusiness,
//       dataTechnology,
//       // datosDeporte,
//       // datosGeneral
//     },
//   }

// }