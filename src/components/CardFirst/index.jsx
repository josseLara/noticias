import { Box, Grid, Typography } from '@mui/material'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { useSelector, useDispatch } from 'react-redux';

import Stack from '@mui/joy/Stack';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useEffect, useState } from "react";
import { setDisLikes, setFavorites, setLikes } from "@/feactures/perfildatos";
import BookmarkIcon from '@mui/icons-material/Bookmark';


const handleLike = ( datos, dispatch ) => {
  dispatch( setLikes( datos ) )
}
const handleDisLike = ( datos, dispatch ) => {
  dispatch( setDisLikes( datos ) )
}
const handleFavorites = ( datos, dispatch ) => {
  dispatch( setFavorites( datos ) )
}


function CardFirst( { datos } ) {
  // --> obtener los datos
  let dispatch = useDispatch();
  let datosGeneral = useSelector( state => state.datos.datosGeneral );
  let compararLike = useSelector( state => state.perfil.likes );
  let compararDisLike = useSelector( state => state.perfil.disLikes );
  let compararFavorites = useSelector( state => state.perfil.favorites );
  let [active, setActive] = useState();
  let [activeDis, setActiveDis] = useState();
  let [activeFavorites, setActiveFavorites] = useState();
  
  // --> comparar si el boton like corresponde con la noticia
  useEffect( () => {
    setActive( compararLike ? compararLike.find( e => e.title == datos.title ) : null )
    setActiveDis( compararDisLike ? compararDisLike.find( e => e.title == datos.title ) : null )
    setActiveFavorites( compararFavorites ? compararFavorites.find( e => datos.title == datos.title ) : null )
  }, [] )


  return (

    <Grid item xs={4}>
      <Card
        orientation="horizontal"
        sx={{ width: '95%', display: 'flex', alignItems: 'center' }}
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img
              src={datos.urlToImage}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ px: 2 }}>
          <Typography mt={-2} sx={{ width: '120%', color: '#fff', fontFamily: 'poppins', fontSize: '1rem', fontWeight: 'bold', p: '5px', borderRadius: '10px', background: '#ffffff40' }} mb={0.5}>
            {datos.title}
          </Typography>
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
              }}

              > <ThumbUpIcon sx={{ width: 'fit-content', fontSize: '20px' }}
                className={active ? 'active' : null}
                onClick={( e ) => {
                  handleLike( datos, dispatch )
                  setActive( !active ? 'active' : null )

                }} />9</Typography>

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
                }} />9</Typography>

              <BookmarkIcon
                className={activeFavorites ? 'activeF' : null}
                onClick={( e ) => {
                  handleFavorites( datos, dispatch )
                  setActiveFavorites( !activeFavorites ? 'activeF' : null )
                }} />
            </Box>


          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardFirst;