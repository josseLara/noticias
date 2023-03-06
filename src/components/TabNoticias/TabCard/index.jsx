import stylee from './estilos.module.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, Typography } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setDisLikes, setFavorites, setLikes } from '@/feactures/perfildatos';

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
const handleLike = ( datos, dispatch ) => {
     dispatch( setLikes( datos ) )
}
const handleDisLike = ( datos, dispatch ) => {
     dispatch( setDisLikes( datos ) )
}
const handleFavorites = ( datos, dispatch ) => {
     dispatch( setFavorites( datos ) )
}
function TabCard( { datos, clickPagination } ) {
     let dispatch = useDispatch();
     let compararLike = useSelector( state => state.perfil.likes );
     let compararDisLike = useSelector( state => state.perfil.disLikes );
     let compararFavorites = useSelector( state => state.perfil.favorites );
     let [active, setActive] = useState();
     let [activeDis, setActiveDis] = useState();
     let [activeFavorites, setActiveFavorites] = useState();
     let [darLike, setDarLike] = useState( 0 );
     let [darDisLike, setDarDisLike] = useState( 0 );

     useEffect( () => {
          setActive( compararLike ? compararLike.find( e => e.title == datos.title ) : null )
          setActiveDis( compararDisLike ? compararDisLike.find( e => e.title == datos.title ) : null )
          setActiveFavorites( compararFavorites ? compararFavorites.find( e => e.title == datos.title ) : null )

     }, [] )
     useEffect( () => {
          setActive( compararLike ? compararLike.find( e => e.title == datos.title ) : null )
          setActiveDis( compararDisLike ? compararDisLike.find( e => e.title == datos.title ) : null )
          setActiveFavorites( compararFavorites ? compararFavorites.find( e => e.title == datos.title ) : null )
     },
          [clickPagination] )

     return (
          <>
               <img src={datos ? datos.urlToImage : ""}
                    alt="img"
                    className={stylee.img}
               />
               <h2 className={stylee.titulo}>{datos.title}</h2>
               <p className={stylee.contenido}>
                    {datos ? datos.content : ''}
               </p>
               <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    mt={2}
               >
                    <Box sx={{ display: 'flex' }}>
                         <Typography sx={{
                              alignSelf: 'end',
                              display: 'flex', alignItems: 'center', fontSize: '.8rem',
                              gap: '4px', width: 'fit-content', px: '5px',
                              borderRadius: '20px', opacity: .6
                         }}> <RemoveRedEyeIcon sx={{ width: 'fit-content', fontSize: '20px' }} />{100}</Typography>

                         {/* likes */}
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
                                   setDarLike( !active ? 1 : 0 )
                              }} />{20 + darLike}</Typography>

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
                                   setDarDisLike( !activeDis ? 1 : 0 )

                              }} />{9 + darDisLike}</Typography>

                         <BookmarkIcon
                              className={activeFavorites ? 'activeF' : null}
                              onClick={( e ) => {
                                   handleFavorites( datos, dispatch )
                                   setActiveFavorites( !activeFavorites ? 'activeF' : null )
                              }} />
                    </Box>

                    <Typography sx={{
                         alignSelf: 'end',
                         display: 'flex', alignItems: 'center', fontSize: '.8rem',
                         gap: '4px', background: '#A51717', width: 'fit-content', px: '8px', py: '5px',
                         borderRadius: '20px'
                    }}><AccessTimeIcon sx={{ fontSize: '15px' }} />{horaPublicacion( datos.publishedAt )}</Typography>
               </Stack>
          </>
     );
}

export default TabCard;