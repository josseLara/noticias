import { Box } from "@mui/joy";
import { Grid, Typography } from "@mui/material";
import styleMinCard from "./index.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Divider from '@mui/joy/Divider';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Stack from '@mui/joy/Stack';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisLikes, setFavorites, setLikes } from "@/feactures/perfildatos";
import BookmarkIcon from '@mui/icons-material/Bookmark';

// --> Calcula la hora de subida de la noticia
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
// --> Eventos de btns agregar|modificar datos
const handleLike = ( datos, dispatch ) => {
     dispatch( setLikes( datos ) )
}
const handleDisLike = ( datos, dispatch ) => {
     dispatch( setDisLikes( datos ) )
}
const handleFavorites = ( datos, dispatch ) => {
     dispatch( setFavorites( datos ) )
}

function TabCardMin( { datos, clickPagination } ) {
     // --> Datos noticias
     let dispatch = useDispatch();
     let compararLike = useSelector( state => state.perfil.likes );
     let compararDisLike = useSelector( state => state.perfil.disLikes );
     let compararFavorites = useSelector( state => state.perfil.favorites );
     // --> Determina acciones y estilos a los btns
     let [active, setActive] = useState();
     let [activeDis, setActiveDis] = useState();
     let [activeFavorites, setActiveFavorites] = useState();
     let [darLike,setDarLike] = useState(0);
     let [darDisLike,setDarDisLike] = useState(0);

     useEffect( () => {
          // --> Cambia los Datos
          setActive( compararLike ? compararLike.find( e => e.title == datos.title ) : null )
          setActiveDis( compararDisLike ? compararDisLike.find( e => e.title == datos.title ) : null )
          setActiveFavorites( compararFavorites ? compararFavorites.find( e => e.title == datos.title ) : null )

     }, [] )
     useEffect( () => {
          // --> Paganacion cambia los datos
          setActive( compararLike ? compararLike.find( e => e.title == datos.title ) : null )
          setActiveDis( compararDisLike ? compararDisLike.find( e => e.title == datos.title ) : null)
          setActiveFavorites( compararFavorites ? compararFavorites.find( e => e.title == datos.title ) : null )
     }, [clickPagination] )

     return (
          <>
               <Divider orientation="horizontal" sx={{ "--Divider-lineColor": '#A51717', fontFamily: 'poppins', opacity: .9 }}>
                    HOY
               </Divider>
               <Grid container ml={1} spacing={.5} alignItems='center'>
                    <Grid item xs={3} >
                         <img src={datos.urlToImage}
                              alt="img"
                              className={styleMinCard.img}
                         />
                    </Grid>
                    <Grid item xs={8} sx={{ ml: '5px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                         <h3 className={styleMinCard.h3}>{datos.title}</h3>
                         <p className={styleMinCard.p}>
                              {datos.content}
                         </p>
                         <Stack
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center"
                              spacing={2}
                         >
                              <Box sx={{ display: 'flex' }}>
                                   <Typography sx={{
                                        alignSelf: 'end',
                                        display: 'flex', alignItems: 'center', fontSize: '.8rem',
                                        gap: '4px', width: 'fit-content', px: '5px',
                                        borderRadius: '20px', opacity: .6
                                   }}> <RemoveRedEyeIcon sx={{ width: 'fit-content', fontSize: '20px' }} />{12}</Typography>


                                   <Typography sx={{
                                        alignSelf: 'end',
                                        display: 'flex', alignItems: 'center', fontSize: '.8rem',
                                        gap: '4px', width: 'fit-content', px: '5px',
                                        borderRadius: '20px', opacity: .6
                                   }}

                                   > <ThumbUpIcon sx={{ width: 'fit-content', fontSize: '20px' }}
                                        className={active ? 'active' : null}
                                        onClick={( e ) => {
                                             handleLike( datos, dispatch )
                                             setActive( !active ? 'active' : null )
                                             setDarLike(!active ? 1: 0)
                                        }} />{15+darLike}</Typography>

                                   <Typography sx={{
                                        alignSelf: 'end',
                                        display: 'flex', alignItems: 'center', fontSize: '.8rem',
                                        gap: '4px', width: 'fit-content', px: '5px',
                                        borderRadius: '20px', opacity: .6
                                   }}
                                   > <ThumbDownAltIcon sx={{ width: 'fit-content', fontSize: '20px' }}
                                        className={activeDis ? 'active' : null}
                                        onClick={( e ) => {
                                             handleDisLike( datos, dispatch )
                                             setActiveDis( !activeDis ? 'active' : null )
                                             setDarDisLike(!activeDis ? 1: 0)
                                        }} />{9+darDisLike}</Typography>

                                   <BookmarkIcon
                                   className={activeFavorites ? 'activeF' : null}
                                   onClick={( e ) => {
                                        handleFavorites( datos, dispatch )
                                        setActiveFavorites( !activeFavorites ? 'activeF' : null )
                                   }}/>
                              </Box>

                              <Typography sx={{
                                   alignSelf: 'end',
                                   display: 'flex', alignItems: 'center', fontSize: '.8rem',
                                   gap: '4px', background: '#A51717', width: 'fit-content', px: '5px',
                                   borderRadius: '20px'
                              }} ><AccessTimeIcon sx={{ fontSize: '15px' }} />{horaPublicacion( datos.publishedAt )}</Typography>
                         </Stack>

                    </Grid>
               </Grid>

          </>
     );
}

export default TabCardMin;