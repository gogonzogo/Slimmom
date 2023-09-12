// external
//import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { IconButton, Toolbar } from '@mui/material';
import { Box, Typography } from '@mui/material';

//internal
/* import { selectUser } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import useViewPort from 'utils/hooks';*/

import Navigation from 'components/Navigation/Navigation';
import s from './UserInfo.module.css'

const UserInfo = () => {
    /*const dispatch = useDispatch();
    const userName = useSelector(selectUser);
     const { width } = useViewPort();
     const breakpoint = 767; */
    return (
        <Box>
            <Toolbar>
                <IconButton>
                    <CompareArrowsIcon/>
                </IconButton>
                <div className={s.links}>
                    <Navigation/>
                </div>
            </Toolbar>
            <Toolbar>
            <Typography>UserName
                {/* {userName} */}
            </Typography>
            <IconButton
                // onClick={() => dispatch(logOut())}
                // aria-label="logout"
            >
                <LogoutRoundedIcon/>
            </IconButton></Toolbar>
        </Box>
    )
};

export default UserInfo;