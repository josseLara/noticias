import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { Box, Grid, TabPanel } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import { Typography } from '@mui/material';
import PerfilCard from '../PerfilCard';
import { useSelector } from 'react-redux';

function PerfilTab() {
     // --> Datos likes - favoritos
     let likes = useSelector( ( state ) => state.perfil.likes );
     let favorites = useSelector( ( state ) => state.perfil.favorites );

     return (
          <Tabs aria-label="tabs" defaultValue={0}>
               <Box
                    sx={{
                         width: '50%',
                         ml: '30%'
                    }}
               >
                    <TabList
                         variant="plain"
                         sx={{
                              '--List-padding': '0px',
                              '--List-radius': '0px',
                              '--List-item-minHeight': '48px',
                              [`& .${tabClasses.root}`]: {
                                   boxShadow: 'none',
                                   fontWeight: 'md',
                                   [`&.${tabClasses.selected}::before`]: {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        left: 'var(--List-item-paddingLeft)', // change to `0` to stretch to the edge.
                                        right: 'var(--List-item-paddingRight)', // change to `0` to stretch to the edge.
                                        bottom: 0,
                                        height: 3,
                                        bgcolor: 'red',
                                   },
                                   fontFamily: 'Poppins'
                              },
                         }}
                    >
                         <Tab>
                              <Stack
                                   direction="column"
                                   justifyContent="center"
                                   alignItems="center"
                                   spacing={1}
                              >
                                   <Typography variant='caption' sx={{ fontSize: '1.1rem', fontWeight: '500', opacity: .5 }}>{favorites ? favorites.length : 0}</Typography>
                                   <Typography variant='body1' sx={{ fontSize: '1.2rem', fontWeight: '600' }}>Favoritos</Typography>
                              </Stack>
                         </Tab>
                         <Tab>
                              <Stack
                                   direction="column"
                                   justifyContent="center"
                                   alignItems="center"
                                   spacing={1}
                              >
                                   <Typography variant='caption' sx={{ fontSize: '1.1rem', fontWeight: '500', opacity: .5 }}>{likes ? likes.length : 0}</Typography>
                                   <Typography variant='body1' sx={{ fontSize: '1.2rem', fontWeight: '600' }}>Me gusta</Typography>
                              </Stack>
                         </Tab>
                    </TabList>
               </Box>
               <TabPanel value={0} >
                    <Box mt={2}>
                         <Grid container>
                              {favorites ? favorites.map( ( e, i ) => {
                                   return (
                                        <Grid item >
                                             <PerfilCard likes={e} favorites={true} key={i * 200} />
                                        </Grid> )
                              } ) : null}

                         </Grid>
                    </Box>
               </TabPanel>
               <TabPanel value={1} >
                    <Box mt={2}>
                         <Grid container>
                              {likes ? likes.map( ( e, i ) => <Grid item><PerfilCard likes={e} key={i * 900} /> </Grid> ) : null}
                         </Grid>
                    </Box>
               </TabPanel>

          </Tabs>
     );
}

export default PerfilTab;