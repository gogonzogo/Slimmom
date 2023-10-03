import styles from './Logo.module.css';
import { Link } from 'react-router-dom';
import TextLogo from './TextLogo';
import ImageLogo from './ImageLogo';
import { useAuth } from '../../hooks/useAuth';
import useViewport from '../../hooks/useViewport';

const Logo = ({ showText }) => {
  const { loggedIn } = useAuth();
  const { width } = useViewport();

  return (
    <div className={styles['logo-container']}>
      <Link
        to="/Diary"
        className={styles.logoLink}
        aria-label="Link to the Dairy Page"
      >
        <ImageLogo />
        {(width >= 550 || loggedIn) && <TextLogo showText={showText} />}
      </Link>
    </div>
  );
};

export default Logo;
