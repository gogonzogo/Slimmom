import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { setThemeMode } from "redux/theme/themeSlice";
import { selectThemeMode } from "redux/theme/themeSelectors";
import s from './ThemeButton.module.css';

const ThemeButton = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);
const [rotationAngle, setRotationAngle] = useState(0);

  const toggleTheme = () => {
    const newMode = themeMode === 'dark' ? 'light' : 'dark';
    dispatch(setThemeMode(newMode));
    setRotationAngle(rotationAngle + 360);
  };

    return (
        <div className={s.modeWrapper}>
        <div className={s.modeContainer} style={{ transform: `rotate(${rotationAngle}deg)` }}>
            <IconButton
                onClick={toggleTheme}
                aria-label={`Switch to toggle ${themeMode === 'dark' ? 'light' : 'dark'} mode`}
                aria-describedby='light or dark mode-label'
                className={s.modeIconContainer}
                style={{ transform: `rotate(-${rotationAngle}deg)` }}
            >
            {themeMode === 'dark'
                ? (
                        <FontAwesomeIcon icon={faMoon} style={{ color: 'var(--accent-bright-color)'}} className={`${s.lightModeIcon} ${s.modeIcons}`} />
                ) : (
                        <FontAwesomeIcon icon={faSun} style={{ color: 'var(--accent-bright-color)' }} className={`${s.darkModeIcon} ${s.modeIcons}`} />
                )
            }
            </IconButton>
            </div>
        </div>
    );
};

export default ThemeButton;

//icon={themeMode === 'dark' ? faMoon : faSun}