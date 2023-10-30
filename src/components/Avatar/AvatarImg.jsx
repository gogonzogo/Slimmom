// external
import { useSelector } from "react-redux";
import Avatar from "boring-avatars";
import { Box } from "@mui/material";

// internal
import { selectAvatarData } from "redux/avatar/avatarSelectors";
import { selectUser } from "redux/auth/authSelectors";
import s from './AvatarImg.module.css'

const AvatarImg = () => {
    const avatarData = useSelector(selectAvatarData);
    const user = useSelector(selectUser);
    return (
        <div>
            <Box className={s.avatarWrapper}>
                {avatarData === null ? <Avatar /> :
                    <Avatar
                        alt={`users avatar ${user}`}
                        name={avatarData}
                        variant='beam'
                        size={30}
                        colors={['#7B6C96', '#9B9FAA', '#FC842D', '#337A02', '#E6E119']}
                    />}
            </Box>
        </div>
    )
};

export default AvatarImg;