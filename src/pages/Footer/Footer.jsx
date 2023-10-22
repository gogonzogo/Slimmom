// external
import { useSelector } from 'react-redux';
import { Box, Card, Divider } from '@mui/material';
// internal
import FooterAcct from '../../components/FooterAcct/FooterAcct';
import { useAuth } from '../../hooks/useAuth';
import { selectThemeMode } from 'redux/theme/themeSelectors';
import useViewPort from 'hooks/useViewport';

function Footer() {
  const { loggedIn } = useAuth();
  const themeMode = useSelector(selectThemeMode);
  const {width} = useViewPort();
  return (
    <>
      
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <Card sx={{
          backgroundColor:
            width >= 1280
              ? 'transparent' 
              : themeMode === 'dark' ? '#2a1d45' : '#ffffff'
        }}>
          {loggedIn ? (
            <>
              <Divider orientation="horizontal"
                sx={{
                  width: '100%',
                  height: width >= 1280 ? '0px' : '1px',
                  backgroundColor: width >= 1280 ? 'transparent' : themeMode === 'dark' ? 'var(--accent-bright-color)' : 'var(--accent-dark-color)'
                }} />
              <FooterAcct />
            </>
            ) : (
              null)
          }
        </Card>
      </Box>
    </>
    )
}


export default Footer;
