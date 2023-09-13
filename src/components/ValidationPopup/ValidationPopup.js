import css from './ValidationPopup.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Paper } from '@mui/material';

const ValidationPopup = ({ validationData }) => {

  return (
    <Paper elevation={8} className={css.validationPopup}>
      <List
        className={css.validationPopupList}
        sx={{ width: '100%', maxWidth: 360 }}
      >
        {validationData.map((item, index) => {
          const reqKey = Object.keys(item)[0];
          const { id, message, met } = item[reqKey];
          const IconComponent = met ? CheckCircleOutlineIcon : ErrorOutlineIcon;
          const iconColor = met ? 'green' : 'red';

          return (
            <ListItem
              className={css.validationPopupItem}
              key={id}
              disableGutters
            >
              <IconComponent
                className={css.validationPopupIcon}
                style={{ color: iconColor }}
              />
              <ListItemText
                disableTypography
                primary={message}
                sx={{ fontSize: '12px' }}
              />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default ValidationPopup;