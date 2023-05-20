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
import NewsPage from '@/components/views/NewsPage';


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
      <NewsPage/>
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