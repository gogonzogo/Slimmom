import { useSelector } from 'react-redux';

import { selectThemeMode } from 'redux/theme/themeSelectors';
import { ReactComponent as LogoSVG } from './slimmom.svg';
import styles from './ImageLogo.module.css';
import sprite from '../Logo/sprite.svg';

const ImageLogo = () => {
  const themeMode = useSelector(selectThemeMode);
  console.log(themeMode);
  return (
    <div className={styles['imagelogo-container']}>
      {themeMode === 'dark'
        ? (<svg
              fill="currentColor"
              className={styles.imageLogo}
              alt="A waistline with a green measuring tape"
            >
              <use xlinkHref={`${sprite}.svg#slimMomDark`}/>
            </svg>
        ) : (
            <LogoSVG
              className={styles.imageLogo}
              alt="A waistline with a green measuring tape"
            />
        )}
    </div>
  );
};

export default ImageLogo;