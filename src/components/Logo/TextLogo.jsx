import { useSelector } from 'react-redux';
import { ReactComponent as SlimSVG } from '../Logo/slim.svg';
import { ReactComponent as MomSVG } from '../Logo/mom.svg';
import styles from './TextLogo.module.css';
import useViewport from '../../hooks/useViewport';
import { selectThemeMode } from 'redux/theme/themeSelectors';
import CustomIcon from 'components/CustomIcon/CustomIcon';
const TextLogo = ({ showText }) => {
  const themeMode = useSelector(selectThemeMode)
  const { width } = useViewport();

  const showTextStyles = {
    opacity: showText ? '1' : width > 450 ? '1' : '0',
    transition: 'opacity 1s ease',
  };

  return (
    <div className={styles['textlogo-container']} style={showTextStyles}>
      {themeMode === 'dark'
        ? (
          <CustomIcon
            iconName='slim'
            className={styles.svgtext}
            alt="Text spelling slim"
            color='white'
          />)
        : (
          <SlimSVG className={styles.svgtext} alt="Text spelling slim" />
        )}
      <MomSVG className={styles.svgtext} alt="Text spelling mom" />
    </div>
  );
};

export default TextLogo;
