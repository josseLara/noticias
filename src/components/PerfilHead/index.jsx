import { Box } from "@mui/joy";
import Stack from '@mui/joy/Stack';
import stylee from './index.module.css';

function PerfilHead() {
     return (
          <Box  sx={{width:'100%'}}>
               <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="start"
                    spacing={2}
                    sx={{position:'relative',width:'100%',height:'350px'}}
               >

                    <img src="https://images.pexels.com/photos/14366305/pexels-photo-14366305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         alt="img" className={stylee.img} />

                    <Stack
                         direction="row"
                         justifyContent="center"
                         alignItems="start"
                         spacing={2}
                         sx={{position:'relative',top:'-50px',left:'10px'}}
                         >
                         <Box sx={{position:'relative',width:'100px',height:'100px'}}>
                              <img src="https://images.pexels.com/photos/2445784/pexels-photo-2445784.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                   alt="perfil" className={stylee.circleImg} />
                         </Box>

                         <Stack
                              direction="column"
                              justifyContent="center"
                              alignItems="start"
                              spacing={1}
                              sx={{ color: '#fff', fontFamily: 'Poppins' }}
                         >
                              <h3 className={stylee.name}>Kevin exo</h3>
                              <p className={stylee.email}>Kevin@gmail.com</p>
                         </Stack>
                    </Stack>
               </Stack>

          </Box>
     );
}

export default PerfilHead;