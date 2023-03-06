import TabCard from "./TabCard";
import { Grid } from "@mui/material";
import TabCardMin from "./TabCardMin";
import Pagination from '@mui/material/Pagination';
import { useState } from "react";


function TabNoticias( { datos } ) {
     // --> Paginacion de las noticias
     let [pagination, setPagination] = useState( [1, 4] );
     let [clickPagination, setClickPagination] = useState( false );

     const handletPage = async ( e, v ) => {
          setPagination( [( 4 * v ) - 3, 4 * v] )
          setClickPagination( !clickPagination );
     }

     return (
          <>
               <Grid container mb={10} mt={4}>
                    <Grid item xs={5}>
                         <TabCard datos={datos.articles[( pagination[1] - 4 )]} clickPagination={clickPagination} />
                    </Grid>
                    <Grid item xs={7}>
                         {
                              ( datos.articles.slice( pagination[0], pagination[1] ) ).map( ( e,i ) => {
                                   return (
                                        <TabCardMin datos={e} clickPagination={clickPagination} key={i*1100}/>
                                   )
                              } )
                         }

                    </Grid>
               </Grid>
               <Pagination count={10} color="error"
                    sx={{
                         background: '#fff', width: 'fit-content',
                         borderRadius: '20px', ml: 'auto'
                    }}
                    onChange={( e, v ) => handletPage( e, v )}
               />
          </>

     );
}



export default TabNoticias;