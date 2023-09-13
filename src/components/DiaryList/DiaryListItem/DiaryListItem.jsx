//import style from "./style.module.css";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';





function ProductListItem({ product , handleDelete }) {
  return (
    <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(product.productId)}>
                      <DeleteIcon  />
                    </IconButton>
                  }
    >

      <ListItemText sx={{mr:6, px:3}} >
      <ListItemText
                     primary={product.title} 
      />
      </ListItemText>
      <Divider variant="insert"  />


      
      <ListItemText sx={{ mr: 4, px: 2 }}>
      <ListItemText
                     primary={product.weight} 
      />
      </ListItemText>
      <Divider variant="insert"  />

      
                  <ListItemText sx={{mr:4, px:2}} >
      <ListItemText
                     primary={product.calories} 
      />
      </ListItemText>
      <Divider variant="insert"  />
        
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