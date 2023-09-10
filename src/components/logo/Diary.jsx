import React from 'react';
import AllProductsList from 'components/productsList/allProductsList/AllProductsList';
import DiaryAddProduct from 'components/DiaryAddProductForm/DiaryAddProductForm';

function Diary() {
  return (
    <div>Diary
      <DiaryAddProduct />
      <AllProductsList />
    </div>
  )
}

export default Diary