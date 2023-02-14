
import { Box, Grid, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function EconomiaCards( { datosEconomicos } ) {

     return (
          <>
               <Grid container spacing={0}>
                    {datosEconomicos.articles.map( ( e, i ) => {
                         return (
                              <Grid item xs={i == 0 ? 8 : 4} sx={{ height: '100%' }} p={0} data-aos="flip-left"
                                   data-aos-easing="ease-out-cubic"
                                   data-aos-duration="2000">
                                   <Card sx={{ width: 'fit-content', margin: '5px', height: '100%', minHeight: '280px' }}  >
                                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
                                             <img src={e.urlToImage} style={{ width: '100%', height: i == 0 ? '170px' : '130px', objectFit: 'cover' }} />
                                             <Box ml={2} p={1}>
                                                  <Typography variant="h2" component="span" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                                       {e.title}
                                                  </Typography>
                                                  {/*  */}

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
          </>
     );
}



export default EconomiaCards;