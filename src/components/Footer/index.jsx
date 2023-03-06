import { Box } from "@mui/system";
import { Typography } from "@mui/material";

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function Footer() {
     return (
          <footer
               style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '10px', background: '#fff', color: '#000',
               }}>
               <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <FacebookIcon />
                    <TwitterIcon />
                    <WhatsAppIcon />
               </Box>
               <Box sx={{ position: 'relative' }}>
                    <Typography sx={{ fontSize: '1.5rem', mt: 2, fontFamily: 'poppins', fontWeight: 'bold' }}>News</Typography>
                    <Box sx={{
                         background: ' rgba(255, 0, 0, 0.582)', width: '30px',
                         height: '10px', position: 'absolute',
                         top: '40%'
                    }}></Box>
               </Box>
               <Box>
                    <Typography sx={{ display: 'flex', fontFamily: 'poppins', fontWeight: '600' }}><EmailIcon />news@gmail.com</Typography>
                    <Typography sx={{ display: 'flex', mt: 1, fontFamily: 'poppins', fontWeight: '600' }}><PhoneAndroidIcon />+154333287</Typography>
               </Box>
          </footer>
     );
}

export default Footer;