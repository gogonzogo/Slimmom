import { string } from 'prop-types';
import Sprite from './sprite.svg';

const CustomIcon = ({ iconName, color, className }) => {
    return (
        <svg fill={color} className={className}>
            <use href={Sprite + `#${iconName}`} />
        </svg>
    )
};

CustomIcon.propTypes = {
    iconName: string.isRequired,
    color: string,
    className: string
}
export default CustomIcon;