import style from './style.module.css';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

function DiaryListItem({ product, handleDelete }) {
  return (
    <ListItem className={style.productListItem}>
      <ListItemText
        className={style.title}
        primary={
          <Typography className={style.titlePrimary}>
            {product.title}
          </Typography>
        }
      />

      <ListItemText
        className={style.weight}
        primary={
          <Typography className={style.titlePrimary}>
            {product.weight} g
          </Typography>
        }
      />

      <ListItemText
        className={style.calories}
        primary={
          <Typography className={style.caloriesPrimary}>
            {product.calories}
          </Typography>
        }
        secondary={
          <Typography className={style.caloriesSecondary}>kcal</Typography>
        }
      />

      <IconButton
        className={style.productDeleteButton}
        aria-label="delete"
        onClick={() => handleDelete(product._id)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default DiaryListItem;
