import { Grid } from "@mui/joy";
import { Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { setFavorites, setLikes } from "@/feactures/perfildatos";

// -->Elimina de Favoritos la noticia
let handleClose = ( datos, dispatch, favorites ) => {
     favorites ? dispatch( setFavorites( datos ) ) : dispatch( setLikes( datos ) );
}

function PerfilCard( { likes, favorites } ) {
     let dispatch = useDispatch();

     return (
          <Grid container sx={{ width: '250px', pl: '5px', mb: 2, maxWidth: '590px', mr: '10px' }}>
               <Grid item xs={12} sx={{ width: '100%' }} >
                    <CloseIcon sx={{ ml: 1, color: 'red', cursor: 'pointer', ml: '44%', width: '100%' }}
                         onClick={() => handleClose( likes, dispatch, favorites )}
                    />
               </Grid>
               <Grid xs={12}>
                    <img src={likes ? likes.urlToImage : null}
                         alt="noticia" style={{ width: '100%' }} />
               </Grid>
               <Grid item xs={12}>
                    <Typography variant="h1" sx={{ fontSize: '1.2rem', fontWeight: '700' }}>{likes ? likes.title : null}</Typography>
               </Grid>

          </Grid>
     );
}

export default PerfilCard;