import customTheme from "theme/theme";

// external
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { node } from 'prop-types';
// MUI
import { ThemeProvider } from "@emotion/react";

// internal

import { selectThemeMode } from "redux/theme/themeSelectors";
import { setThemeMode } from "redux/theme/themeSlice";

const ThemeWrapper = ({ children }) => {
    const dispatch = useDispatch();
    const themeMode = useSelector(selectThemeMode); 

    useEffect(() => { 
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            dispatch(setThemeMode(storedTheme));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('theme', themeMode);
    }, [themeMode]);

    const currentTheme = customTheme(themeMode)

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