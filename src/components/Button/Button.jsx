import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';
import { Button as MuiButton} from '@mui/material'
import clsx from 'clsx';

const CustomButton = ({ color, children, disabled }) => {
return (

    <MuiButton className={clsx(css.Button, css[color], { [css.disabled]: disabled })}
        type="submit"
        disabled={disabled}
    >
        {children}
    </MuiButton>
   
  );
};

CustomButton.propTypes = {
  color: PropTypes.string.isRequired, // Ensure that color prop is required
    children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,  // Allow any content as children
};

export default CustomButton;
