import { ReactComponent as SlimSVG } from '../Logo/slim.svg';
import { ReactComponent as MomSVG } from '../Logo/mom.svg';
import styles from './TextLogo.module.css';

const TextLogo = () => {
  return (
    <div className={styles['textlogo-container']}>
      <SlimSVG className={styles.svgtext} alt="Text spelling slim" />
      <MomSVG className={styles.svgtext} alt="Text spelling mom" />
    </div>
  );
};

export default TextLogo;
