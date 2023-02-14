import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import { Box, Grid, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EconomiaCards from '@/components/EconomiaCards';
import style from '../styles/index.module.css';

let newsPaginas = [{
  name:'clarin',
  dominio:'clarin.com',
  img:'https://pbs.twimg.com/media/C2QJ3wnW8AAM8a9.jpg'
},{
  name:'La Nacion',
  dominio:'lanacion.com.ar',
  img:'https://arc-static.glanacion.com/pf/resources/images/logo-lanacion.svg?d=1120'
},{
  name:'La Gaceta',
  dominio:'lagaceta.com.ar',
  img:'https://www.lagaceta.com.ar/assets/2022/images/brand.svg'
},{
  name:'Infobae',
  dominio:'infobae.com',
  img:'https://www.infobae.com/pf/resources/images/logo_infobae_naranja.svg?d=1271'
},{
  name:'Ambito',
  dominio:'ambito.com',
  img:'https://www.ambito.com/css-custom/239/images/logo-239-2020v2.svg'
}]
export default function Home( { datos,datosEconomicos,datosDeporte } ) {
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
      <Grid container spacing={4}>
        {newsPaginas.map( ( e ) => {
          return ( <Grid item md='12'>
            <Card sx={{ width: '130px', margin: '5px' }} >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={e.img} width={50} height={50} />
                <Typography variant="h7" component="span" sx={{fontWeight:'700'}}>
                  {e.name}
                </Typography>
              </CardContent>
            </Card>

          </Grid> )
        } )}
      </Grid>

      {/* ................ */}
      <Typography variant='h3' component='h3' ml={2} my={2} className={style.titulo} sx={{ fontSize: '1.2rem' }}>
        Noticias del dia
      </Typography>
      {/* ............... */}
      <Grid container spacing={0}>
        {( datos.articles ).slice( 0, 3 ).map( ( e ) => {
          return (
            <Grid item xs={4} sx={{ height: '100%' }} p={0} data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <Card sx={{ width: 'fit-content', margin: '5px', height: '300px' }}  >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
                  <img src={e.urlToImage} style={{ width: '100%', height: '130px', objectFit: 'cover' }} />
                  <Box ml={2} p={1}>
                    <Typography variant="h2" component="span" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                      {e.title}
                    </Typography>
                    {/*  */}
                    <Grid container spacing={2} ml={'1px'} mt={'1px'}>
                      <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbUpIcon sx={{ width: '17px' }} color="success" />
                        <Typography variant="caption" ml={.3} color="success" sx={{ fontSize: '.7rem', opacity: .8, fontWeight: 600 }}>
                          122
                        </Typography>
                      </Grid>
                      <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbDownIcon sx={{ width: '17px' }} color="error" />
                        <Typography variant="caption" ml={.3} color="error" sx={{ fontSize: '.7rem', opacity: .8, fontWeight: 600 }}>
                          122
                        </Typography>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Box ml={5} mt={.5} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }} p={0}>
                      <AccessTimeIcon sx={{ width: 15 }} />
                      <Typography variant="caption" ml={.5} sx={{ fontSize: '.7rem', opacity: .8, fontWeight: 600 }}>
                        2h
                      </Typography>
                    </Box>
                  </Box>

                </CardContent>
              </Card>
            </Grid>
          )
        } )}
      </Grid>

      {/* ............... */}
      <Card sx={{ width: '98%', margin: '5px' }} data-aos="flip-up" >
        <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={datos.articles[4].urlToImage} width={250} height={250} />
          <Box ml={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant="caption" component="span" sx={{ fontSize: '.9rem' }}>
              {datos.articles[4].author}
            </Typography>
            <Typography variant="h1" component="h1" sx={{ fontSize: '1.9rem' }}>
              {datos.articles[4].title}
            </Typography>

            <Typography variant="body1" mt={1} component="h1" sx={{ fontSize: '1.1rem' }}>
              {datos.articles[4].content}
            </Typography>
          </Box>
        </CardContent>
        <CardActions disableSpacing>
          <Avatar alt="Eemy Sharp" src="/static/images/avatar/2.jpg" sx={{ bgcolor: 'blue' }} />
          <Button color="primary">Clarin</Button>
          <Tooltip title="Ver mas" sx={{ marginLeft: 'auto' }}>
            <IconButton>
              ir
              <ArrowForwardIosIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>

        {/* ....... noticias economicas ........ */}
        <Typography variant='h3' component='h3' ml={2} my={2} className={style.titulo} sx={{ fontSize: '1.2rem' }}>
        Economia
      </Typography>
      <EconomiaCards datosEconomicos={datosEconomicos}/>
      {/* ........ deportes ..... */}
      <Typography variant='h3' component='h3' ml={2} my={2} className={style.titulo} sx={{ fontSize: '1.2rem' }}>
        Deportes
      </Typography>
      <EconomiaCards datosEconomicos={datosDeporte}/>

    </Layout>
  )
}


export async function getServerSideProps( context ) {
  let data = await fetch( 'https://newsapi.org/v2/everything?pageSize=6&language=es&domains=lanacion.com.ar&apiKey=ce68154e45014bfdb3dc80fa072509c4' );
  let datos = await data.json();
  // 
  let economia = await fetch( 'https://newsapi.org/v2/top-headlines?pageSize=5&country=ar&category=business&apiKey=ce68154e45014bfdb3dc80fa072509c4' );
  let datosEconomicos = await economia.json();
  // 
  let deporte = await fetch( 'https://newsapi.org/v2/top-headlines?pageSize=5&country=ar&category=sports&apiKey=ce68154e45014bfdb3dc80fa072509c4' );
  let datosDeporte = await deporte.json();
  return {
    props: {
      datos,
      datosEconomicos,
      datosDeporte
    }, // will be passed to the page component as props
  }
}