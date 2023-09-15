import DiaryListItem from '../DiaryListItem/DiaryListItem';
//import style from './style.module.css';
import { useDispatch } from 'react-redux';
import { useProductStore } from '../../hooks/useProductStore';
import {
  fetchFoods,
  deleteFood,
} from 'redux/productStore/productStoreOperations';
import { useEffect } from 'react';
import * as React from 'react';
import List from '@mui/material/List';

function ProductList() {
  const foods = useProductStore();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  function handleDelete(productId) {
    dispatch(deleteFood(productId)).then(() => {
      dispatch(fetchFoods());
    });
  }

  return (
    <List>
      {foods.length > 0 &&
        foods.map(product => (
          <DiaryListItem
            key={product.productId}
            product={product}
            handleDelete={handleDelete}
          />
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
