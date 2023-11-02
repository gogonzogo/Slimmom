// external
import { useSelector } from 'react-redux';
import { Box, Card, Divider, Typography } from '@mui/material';
// internal
import FooterAcct from '../../components/FooterAcct/FooterAcct';
import { useAuth } from '../../hooks/useAuth';
import { selectThemeMode } from 'redux/theme/themeSelectors';
import CustomIcon from 'components/CustomIcon/CustomIcon';
import s from './Footer.module.css'

function Footer() {
  const { loggedIn } = useAuth();
  const themeMode = useSelector(selectThemeMode);

  return (
    <Box className={`${s.footerContainer}`}>
      
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, right: 0,}}>
        <Card sx={{
          backgroundColor: themeMode === 'dark' ? '#2a1d45' : '#ffffff'
        }}>
          <Divider orientation="horizontal"
                sx={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'var(--accent-bright-color)'
            }} />
           {loggedIn ? (
            <>
              <FooterAcct />
            </>
            ) : (
              null)
          }
          <Box className={`${s.iconContainer}`} style={{ padding: loggedIn ? '0 10px 3px 10px' : '8px 10px 3px 10px'}}>
            <Typography className={s.developerText}>Developed with
              <span className={s.iconSpace}>
                <a href="https://github.com/gogonzogo/Final-Team-Project/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                  <CustomIcon className={`${s.icon}`}
                    iconName='heart' />
                  <span style={{ display: 'none' }}>
                  Link to the project on GitHub
                </span>
                </a>
              </span>
              by the ScrumSquad © 2023 | All Rights Reserved
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
    )
};
export default Footer;