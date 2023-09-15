import DiaryListItem from '../DiaryListItem/DiaryListItem';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getfoods} from '../../../redux/productStore/productStoreSelectors';
import { fetchFoods, deleteFood } from '../../../redux/productStore/productStoreOperations';
import { useEffect } from 'react';
import * as React from 'react';
import List from '@mui/material/List';



function ProductList() {
  const products = useSelector(getfoods);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  function handleDelete  (productId)  {
    dispatch(deleteFood(productId)).then(() => {
      dispatch(fetchFoods());
    });
  };

  return (
    
     <List className={style.productList}>
              
                {products.length > 0 &&
                   products.map((product) => (
                    <DiaryListItem key={product.productId} product={product} handleDelete={handleDelete} />
                  ))}
              
      </List>
      

    // <ul className={style.productList}>
    //   {products.length > 0 &&
    //   products.map((product) => (
    //     <DiaryListItem key={product.productId} product={product} handleDelete={handleDelete} />
    //   ))}
    // </ul>
  );
}

export default ProductList;