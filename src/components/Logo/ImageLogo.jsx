import { ReactComponent as LogoSVG } from './slimmom.svg';
import styles from './ImageLogo.module.css';

const ImageLogo = () => {
  return (
    <div className={styles['imagelogo-container']}>
      <LogoSVG
        className={styles.imageLogo}
        alt="A waistline with a green measuring tape"
      />
    </div>
  );
};

export default ImageLogo;
