// external
import { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { AppBar, IconButton, Toolbar } from '@mui/material';

//internal
/* import { selectUser } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import useViewPort from 'utils/hooks';*/

import Navigation from 'components/Navigation/Navigation';
import { TextLogo } from 'components/Logo/Logo';
import s from './UserInfo.module.css'


const UserInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    /*const dispatch = useDispatch();
    const userName = useSelector(selectUser);
     const { width } = useViewPort();
     const breakpoint = 767; */
    return (
        <AppBar position="static"
            sx={{boxShadow: 'none',}}
        >
            <Toolbar disableGutters={true}
                sx={{
                    padding: '0',
                }}
            >
            {!isOpen &&
                <div className={s.leftContent}>
                    <TextLogo />
                </div>}
                <div className={s.rightContent}>
                    <IconButton
                        className={s.arrowButton}
                        onClick={toggleNavbar}
                        sx={{
                        padding: '0',
                    }}
                    >
                       <CompareArrowsIcon/>
                    </IconButton>
                </div>
                <div>
                    <div>
                    {isOpen && <Navigation />} 
                    </div>
                </div>
            </Toolbar>
        </AppBar>   
    )
};

export default UserInfo;