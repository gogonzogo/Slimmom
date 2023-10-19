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
  const [isClicked, setIsClicked] = useState(false);
  const [moonOpacity, setMoonOpacity] = useState(1);
  const [sunOpacity, setSunOpacity] = useState(1);

  const toggleTheme = () => {
    const newMode = themeMode === 'dark' ? 'light' : 'dark';
    dispatch(setThemeMode(newMode));
    setRotationAngle(rotationAngle + 360);
    setIsClicked(!isClicked);
    setMoonOpacity(0);
    setSunOpacity(0);

    setTimeout(() => {
      setMoonOpacity(1);
      setSunOpacity(1);
    }, 1500);
  };

  const buttonClass = themeMode === 'dark' ? s.darkClicked : s.lightClicked;
  const sunStyle = {
    color: 'var(--accent-bright-color)',
    opacity: sunOpacity,
    transition: "opacity 0.6s var(--transition-time-function)", 
  };

 const moonStyle = {
    color: 'var(--accent-bright-color)',
    opacity: moonOpacity,
    transition: "opacity 0.6s var(--transition-time-function)",
  };

  return (
      <div className={s.modeWrapper}>
        <div className={s.modeContainer} style={{ transform: `rotate(${rotationAngle}deg)` }}>
          <IconButton
            onClick={toggleTheme}
            aria-label={`Switch to toggle ${themeMode === 'dark' ? 'light' : 'dark'} mode`}
            aria-describedby='light or dark mode-label'
            className={`${s.modeIconContainer} ${buttonClass}`} 
            style={{ transform: `rotate(-${rotationAngle}deg)`}}
          >{themeMode === 'dark'
            ? ( 
              <FontAwesomeIcon
                icon={faMoon}
                style={moonStyle}
                className={`${s.modeIcons}`}
              />
            ) : (
              <FontAwesomeIcon
                icon={faSun}
                style={sunStyle}
                className={`${s.modeIcons}`}
              />
            )}
          </IconButton>
        </div>
      </div>
  );
};

export default ThemeButton;
