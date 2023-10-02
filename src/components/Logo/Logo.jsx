import styles from './Logo.module.css';
import { Link } from 'react-router-dom';
import TextLogo from './TextLogo';
import ImageLogo from './ImageLogo';

const Logo = () => {
  return (
    <div className={styles['logo-container']}>
      <Link to="/Diary" className={styles.logoLink} aria-label="Link to the Dairy Page">
        <ImageLogo />
        <TextLogo />
      </Link>
    </div>
  );
};

export default Logo;
