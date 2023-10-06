// external
import { useDispatch, useSelector } from "react-redux";

// Styles
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

//internal
import { toggleTheme } from "redux/theme/themeSlice";
import { selectIsDarkMode } from "redux/theme/themeSelectors";



const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectIsDarkMode);
    
    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    }
    return (
        <IconButton
            onClick={handleThemeToggle}
            aria-label='light or dark mode'
            aria-describedby='light or dark mode-label'
        >
            {darkMode
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