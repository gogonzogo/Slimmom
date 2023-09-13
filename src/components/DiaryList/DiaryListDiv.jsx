import ProductList from './DiaryList/DiaryList';
import { useDispatch } from 'react-redux';
import { deleteFood, fetchFoods } from '../../redux/productStore/productStoreOperations';





function DiaryListDiv() {

  const dispatch = useDispatch();
  

    
  
  function handleDelete  (productId)  {
    dispatch(deleteFood(productId)).then(() => {
      dispatch(fetchFoods());
    });
  };

  
  

  return (
    <div>
      <ProductList    handleDelete={handleDelete} />
    </div>
  );
}

export default DiaryListDiv;