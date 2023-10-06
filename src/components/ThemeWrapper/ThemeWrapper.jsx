// external
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { node } from 'prop-types';
// MUI
import { ThemeProvider } from "@emotion/react";

// internal
import { lightTheme, darkTheme } from "theme/theme";
import { selectIsDarkMode } from "redux/theme/themeSelectors";
import { toggleTheme } from "redux/theme/themeSlice";

const ThemeWrapper = ({ children }) => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectIsDarkMode); 

    useEffect(() => { 
        const setTheme = localStorage.getItem('theme');
        if (setTheme === 'dark') {
            dispatch(toggleTheme());
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const currentTheme = darkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            {children}
        </ThemeProvider>
    );
};

ThemeWrapper.propTypes = {
  children: node.isRequired,
};

export default ThemeWrapper;