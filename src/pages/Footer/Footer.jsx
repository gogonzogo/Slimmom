// external
import { useSelector } from 'react-redux';
import { Box, Card, Divider, Typography } from '@mui/material';
// internal
import FooterAcct from '../../components/FooterAcct/FooterAcct';
import { useAuth } from '../../hooks/useAuth';
import { selectThemeMode } from 'redux/theme/themeSelectors';
import CustomIcon from 'components/CustomIcon/CustomIcon';
import s from './Footer.module.css'
// import useViewPort from 'hooks/useViewport';

function Footer() {
  const { loggedIn } = useAuth();
  const themeMode = useSelector(selectThemeMode);
  // const {width} = useViewPort();
  return (
    <>
      
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <Card sx={{
          backgroundColor: themeMode === 'dark' ? '#2a1d45' : '#ffffff'
        }}>
          {loggedIn ? (
            <>
              <Divider orientation="horizontal"
                sx={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'var(--accent-bright-color)'
                }} />
              <FooterAcct />
            </>
            ) : (
              null)
          }
          <Box className={`${s.iconContainer}`}>
            <Typography>Developed with<span className={s.iconSpace}>
              <CustomIcon className={`${s.icon}`}
              iconName='heart'
            /></span>
             by the ScrumSquad
            |© 2023 | All Rights Reserved </Typography>
          </Box>
        </Card>
      </Box>
    </>
    )
}


export default Footer;

// width >= 1280 ? 'transparent' : themeMode === 'dark' ? 'var(--accent-bright-color)' : 'var(--accent-dark-color)'
// height: width >= 1280 ? '0px' : '1px',