import styles from './Logo.module.css';
import { Link } from 'react-router-dom';
import TextLogo from './TextLogo';
import ImageLogo from './ImageLogo';
import { useAuth } from '../../hooks/useAuth';
import useViewport from '../../hooks/useViewport';

const Logo = ({ showText }) => {
  const { loggedIn } = useAuth();
  const { width } = useViewport();
  const linkTo = loggedIn ? '/Diary' : '/';
  const ariaLabel = loggedIn ? 'Link to the Diary Page' : 'Link to the Home Page';

  return (
    <div className={styles['logo-container']}>
      <Link
        to={linkTo}
        className={styles.logoLink}
        aria-label={ariaLabel}
      >
        <ImageLogo />
        {(width >= 550 || loggedIn) && <TextLogo showText={showText} />}
      </Link>
    </div>
  );
};

export default Logo;
