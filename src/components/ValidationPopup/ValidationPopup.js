import React from 'react';
import { Paper, List, ListItem, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import css from './ValidationPopup.module.css';

const ValidationPopup = ({ validationData, visible }) => {
  return (
    <Paper elevation={8} className={css.validationPopup}>
      <List className={css.validationPopupList} sx={{ width: '100%', maxWidth: 360 }}>
        {visible && validationData
          ? validationData.map((item, index) => {
              const reqKey = Object.keys(item)[0];
              const { id, message, met } = item[reqKey];
              const IconComponent = met ? CheckCircleOutlineIcon : ErrorOutlineIcon;
              const iconColor = met ? 'green' : 'red';
              return (
                <ListItem className={css.validationPopupItem} key={id} disableGutters>
                  <IconComponent className={css.validationPopupIcon} style={{ color: iconColor }} />
                  <ListItemText disableTypography primary={message} sx={{ fontSize: '12px' }} />
                </ListItem>
              );
            })
          : null}
      </List>
    </Paper>
  );
};

export default ValidationPopup;