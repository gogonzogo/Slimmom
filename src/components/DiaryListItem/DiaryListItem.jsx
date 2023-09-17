import style from "./style.module.css";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';





function ProductListItem({ product , handleDelete }) {
  return (
    <ListItem  className={style.productListItem} >

      

      <ListItemText className={style.title}
        primary={<Typography className={style.titlePrimary}>{product.title}</Typography>} 
        />
      
      <ListItemText className={style.weight}
                     primary={<Typography className={style.titlePrimary}>{product.weight} g</Typography>}  
        />
                  
      <ListItemText  className={style.calories} 
                     primary={<Typography className={style.caloriesPrimary}>{product.calories}</Typography>} 
                   secondary={<Typography className={style.caloriesSecondary}>kcal</Typography>}
      />
      
      
      <IconButton  className={style.productDeleteButton}  aria-label="delete" onClick={() => handleDelete(product.productId)}>
                      <DeleteIcon  />
                    </IconButton>
        
                </ListItem>
    // <li  className={style.productListItem}>
    //   <span>
    //    ({product.title}) - ({product.weight}) - ({product.calories})
    //   </span>
    //   <button className={style.productDeleteButton}  onClick={() => handleDelete(product.productId)}>Delete</button>
    // </li>
  );
}

export default ProductListItem;