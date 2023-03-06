import Head from 'next/head'
import Layout from '@/components/Layout'
import { Box, Grid, Typography } from '@mui/material'
import style from '../styles/index.module.css';
import { ParallaxProvider } from 'react-scroll-parallax'
import { useDispatch, useSelector } from 'react-redux'
import { setDatos, setDatosDeportes, setDatosSalud, setDatosTecnologia, setDatosGeneral } from '@/feactures/datos/datosSlice';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { useState } from 'react';

import TabNoticias from '@/components/TabNoticias';
import "swiper/css/pagination";
import SwiperCore, { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import CardFirst from '@/components/CardFirst';
import { ObtenerDatos } from '@/functionExterna';

SwiperCore.use( [Navigation, Pagination, Scrollbar, A11y] );
// 


function IconContainer( props ) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const horaPublicacion = ( e ) => {
  const moment = require( 'moment-timezone' );
  const fecha = e;
  const fechaMoment = moment.tz( fecha, 'UTC' ).tz( 'America/Argentina/Buenos_Aires' );
  const diff = moment().diff( fechaMoment );
  const duracion = moment.duration( diff );

  if ( duracion.asHours() >= 24 ) {
    return ( `${Math.floor( duracion.asDays() )}d` );
  } else if ( duracion.asHours() >= 1 ) {
    return ( `${Math.floor( duracion.asHours() )}h` );
  } else {
    return ( `${Math.floor( duracion.asMinutes() )}min` );
  }
}


export default function Home( { datos, datosDeporte, datosSalud, datosTecnologia, datosGeneral } ) {

  const dispatch = useDispatch();
  dispatch( setDatos( datos ) )
  dispatch( setDatosDeportes( datosDeporte ) )
  dispatch( setDatosSalud( datosSalud ) )
  dispatch( setDatosTecnologia( datosTecnologia ) )
  dispatch( setDatosGeneral( datosGeneral ) )
  datosTecnologia = useSelector( ( state ) => state.datos.datosTecnologia );
  let datosStore = useSelector( ( state ) => state.datos.datos );
  console.log(datos);
  const [index, setIndex] = useState( 0 );


  return (
    <Layout>
      <Head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
      </Head>
      {/* cards Noticias */}
      <div>
        {/* 1 corrusel */}
        <Box sx={{ width: '100%', height: '300px', color: 'red' }}>
          <Swiper className="mySwiper" direction={"vertical"} pagination={{
            clickable: true,
          }} modules={[Pagination]}
            navigation={{
              nextEl: '.btn-next',
              prevEl: '.btn-prev',
            }}>
            {
              datosGeneral.articles.slice( 0, 10 ).map( ( e, i ) => {
                return (
                  <SwiperSlide key={`${'op'}${i * 20}`}>
                    <img src={e.urlToImage} alt="news" style={{ filter: 'brightness(0.5)' }} />
                    <Grid container className={style.contentInfo}>
                      <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: 'fit-content', marginTop: '10px' }}>
                        <ArrowCircleUpIcon sx={{ zIndex: 1, color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
                          className='btn-prev' />
                        <ArrowCircleDownIcon sx={{ zIndex: 1, color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
                          className='btn-next' />
                      </Grid>
                      <Grid item xs={11} ml={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                        <h1 className={style.tituloH1}>
                          {
                            e.title
                          }
                        </h1>
                        <span className={style.infoHora}>{horaPublicacion( e.publishedAt )} - hoy</span>
                      </Grid>

                    </Grid>

                  </SwiperSlide>
                );
              } )
            }


          </Swiper>
        </Box>

        {/* ... cards .... */}
        <Typography variant='h3' component='h3' ml={2} my={2} className={style.titulo} sx={{ fontSize: '1.2rem' }}>
          Noticias del dia
        </Typography>
        {/* ............... */}
        <Grid container p={1} columnSpacing={1} alignItems={'center'} justifyContent={'space-between'}>
          {
            datosGeneral.articles.slice( 10, 13 ).map( ( e, i ) => {
              return (
                <CardFirst datos={e} key={`${'e'}${i * 20}`} />
              )
            } )
          }
        </Grid>

        {/* .... tabs submenu... */}
        <Tabs aria-label="Basic tabs" defaultValue={0} sx={{ borderRadius: 'lg' }}
          value={index}
          onChange={( event, value ) => setIndex( value )}>
          <TabList sx={{
            mt: '80px', position: 'relative', left: '30%', width: '300px',
            fontFamily: 'poppins', fontWeight: 'bolder', fontSize: '1.2rem'
          }}
          >
            <Tab
              variant={index === 0 ? 'soft' : 'plain'}
              sx={{ background: index === 0 ? '#A51717' : '#000' }}>
              Economia
            </Tab>
            <Tab
              variant={index === 1 ? 'soft' : 'plain'}
              sx={{ background: index === 1 ? '#A51717' : '#000' }}>
              Salud</Tab>
            <Tab
              variant={index === 2 ? 'soft' : 'plain'}
              sx={{ background: index === 2 ? '#A51717' : '#000' }} >
              Deporte</Tab>
            <Tab
              variant={index === 3 ? 'soft' : 'plain'}
              sx={{ background: index === 3 ? '#A51717' : '#000' }} >
              Tecnologia</Tab>
           
          </TabList>
          <TabPanel value={0} sx={{ p: 2 }}>
            <TabNoticias datos={datosStore} />
          </TabPanel>
          <TabPanel value={1} sx={{ p: 2 }}>
            <TabNoticias datos={datosSalud} />
          </TabPanel>
          <TabPanel value={2} sx={{ p: 2 }}>
            <TabNoticias datos={datosDeporte} />
          </TabPanel>
          <TabPanel value={3} sx={{ p: 2 }}>
            <TabNoticias datos={datosTecnologia} />

          </TabPanel>
        </Tabs>

      </div>
      {/* ................ */}

    </Layout >
  )
}


export async function getServerSideProps( context ) {
  let datos =  await ObtenerDatos( 'business','us' ) 
  let datosDeporte = await ObtenerDatos( 'sports','us'  ) 
  let datosTecnologia =  await ObtenerDatos( 'technology','us'  ) 
  let datosSalud =  await ObtenerDatos( 'health','us'  ) 
  let datosGeneral =  await ObtenerDatos( 'general','us'  ) 
  
  // // -->Economia
  // let data = await fetch( 'https://newsapi.org/v2/top-headlines?country=ar&pageSize=40&category=business&apiKey=ce68154e45014bfdb3dc80fa072509c4' );
  // let datos = await data.json();
  // // -->DEPORTE
  // let deporte = await fetch( 'https://newsapi.org/v2/top-headlines?country=ar&pageSize=40&category=sports&apiKey=ce68154e45014bfdb3dc80fa072509c4' );
  // let datosDeporte = await deporte.json();
  // // -->SALUD
  // let salud = await fetch( 'https://newsapi.org/v2/top-headlines?country=ar&pageSize=40&category=health&apiKey=ce68154e45014bfdb3dc80fa072509c4' );
  // let datosSalud = await salud.json();
  // // -->TECNOLOGIA
  // let tecnologia = await fetch( 'https://newsapi.org/v2/top-headlines?country=ar&pageSize=40&category=technology&apiKey=ce68154e45014bfdb3dc80fa072509c4' );
  // let datosTecnologia = await tecnologia.json();
  // // -->GENERAL
  // let general = await fetch( 'https://newsapi.org/v2/top-headlines?country=ar&pageSize=13&category=general&apiKey=ce68154e45014bfdb3dc80fa072509c4' );
  // let datosGeneral = await general.json();
  return {
    props: {
      datos,
      datosDeporte,
      datosSalud,
      datosTecnologia,
      datosGeneral
    },
  }

}