// external
import { useDispatch, useSelector } from "react-redux";

// Styles
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

//internal
import { setThemeMode } from "redux/theme/themeSlice";
import { selectThemeMode } from "redux/theme/themeSelectors";



const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const themeMode = useSelector(selectThemeMode);
    
    const handleThemeToggle = () => {
        const newMode = themeMode === 'dark' ? 'light' : 'dark';
        dispatch(setThemeMode(newMode));
    }
    return (
        <IconButton
            onClick={handleThemeToggle}
            aria-label='light or dark mode'
            aria-describedby='light or dark mode-label'
        >
            {themeMode === 'dark'
                ? (
                    <FontAwesomeIcon icon={faMoon} style={{ color: "#fc842d", }} />
                ) : (
                    <FontAwesomeIcon icon={faSun} style={{ color: "#fc842d", }} />
                )
            }
        </IconButton>
    )
};
export default ThemeSwitch;