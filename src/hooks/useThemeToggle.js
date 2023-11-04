import { useDispatch, useSelector } from "react-redux";
import { selectThemeMode } from "redux/theme/themeSelectors";
import { setThemeMode } from "redux/theme/themeSlice";

const useThemeToggle = () => {
    const dispatch = useDispatch();
    const themeMode = useSelector(selectThemeMode);
    
    const toggleTheme = () => {
        //toggle between light and dark mode
        const changeMode = themeMode === 'light' ? 'dark' : 'light'
        dispatch(setThemeMode(changeMode));
    };
    return {
        themeMode,
        toggleTheme
    };
};

export default useThemeToggle;