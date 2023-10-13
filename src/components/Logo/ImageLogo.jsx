import { useSelector } from 'react-redux';

import { selectThemeMode } from 'redux/theme/themeSelectors';
import { ReactComponent as LogoSVG } from './slimmom.svg';
import styles from './ImageLogo.module.css';
import CustomIcon from 'components/CustomIcon/CustomIcon';

const ImageLogo = () => {
  const themeMode = useSelector(selectThemeMode);
  return (
    <div className={styles['imagelogo-container']}>
      {themeMode === 'dark'
        ? (<CustomIcon
              iconName ="slimMomDark"
              className={`${styles.imageLogo}`}
              // width="24" height="24"
              alt="A waistline with a green measuring tape"
            />
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