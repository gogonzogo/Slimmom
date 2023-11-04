// external
import { useState } from "react";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
// internal
import useThemeToggle from "hooks/useThemeToggle";
import s from './ThemeButton.module.css';

const ThemeButton = () => {
  const { themeMode, toggleTheme } = useThemeToggle();
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [moonOpacity, setMoonOpacity] = useState(1);
  const [sunOpacity, setSunOpacity] = useState(1);

  const handleClick = () => {
    toggleTheme();
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
            onClick={handleClick}
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
