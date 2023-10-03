import PropTypes from 'prop-types';
import css from './CustomButton.module.css';
import { Button as MuiButton } from '@mui/material';
import clsx from 'clsx';

const CustomButton = ({ color, size, margin, children, disabled, className, style, ...restProps }) => {
  return (
    <MuiButton
      className={clsx(
        css.Button,
        css[color],
        css[size],
        { [css.disabled]: disabled },
        className 
      )}
      style={style}
      type="submit"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </MuiButton>
  );
};

CustomButton.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string, 
  style: PropTypes.object,
};

export default CustomButton;
