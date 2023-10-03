import { ReactComponent as SlimSVG } from '../Logo/slim.svg';
import { ReactComponent as MomSVG } from '../Logo/mom.svg';
import styles from './TextLogo.module.css';
import useViewport from '../../hooks/useViewport';

const TextLogo = ({ showText }) => {
  const { width } = useViewport();

  const showTextStyles = {
    opacity: showText ? '1' : width > 450 ? '1' : '0',
    transition: 'opacity 1s ease',
  };

  return (
    <div className={styles['textlogo-container']} style={showTextStyles}>
      <SlimSVG className={styles.svgtext} alt="Text spelling slim" />
      <MomSVG className={styles.svgtext} alt="Text spelling mom" />
    </div>
  );
};

export default TextLogo;
