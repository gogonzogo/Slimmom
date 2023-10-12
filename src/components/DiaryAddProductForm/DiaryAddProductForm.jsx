import { useState } from 'react';
import { Autocomplete, TextField, Stack } from '@mui/material';
import css from './DiaryAddProductForm.module.css';
import { useDispatch } from 'react-redux';
import { addDiaryEntry, searchFoods } from '../../redux/user/userOperations';
import CustomButton from 'components/CustomButton/CustomButton';
import { useUser } from '../../hooks/useUser';
import { debounce } from 'lodash';
import { setFoodsList, setDiaryBackBtn } from 'redux/user/userSlice';
import useViewPort from 'hooks/useViewport';
import DiaryAddButton from 'components/DiaryAddButton/DiaryAddButton';
export default function DiaryAddProduct({ diaryBackBtn }) {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');
  const { calendarDate, allFoodsList } = useUser();
  const dispatch = useDispatch();
  const autoCompleteFoodsList = allFoodsList
    ? allFoodsList.map(food => food.title)
    : [];
  const { width } = useViewPort();
  const handleGramsChange = e => {
    setGrams(e.target.value);
  };
  const handleInputChange = e => {
    const userInput = e.target.value || '';
    if (e) {
      setProductName(userInput);
      debounceSearchFoods(userInput);
    }
  };
  const debounceSearchFoods = debounce(userInput => {
    dispatch(searchFoods(userInput));
  }, 500);
  const handleSubmit = e => {
    e.preventDefault();
    const foodItem = allFoodsList.find(item => item.title === productName);
    const calories = Math.ceil((foodItem.calories / 100) * grams) || 0;
    dispatch(addDiaryEntry({ calendarDate, productName, grams, calories }));
    dispatch(setFoodsList([]));
    setProductName('');
    setGrams('');
    dispatch(setDiaryBackBtn(!diaryBackBtn));
  };
  return (
    <div className={css.section}>
      <form className={css.diaryform} onSubmit={handleSubmit}>
        <div className={css.formdiv}>
          <Stack spacing={2}>
            <Autocomplete
              id="size-small-standard"
              sx={{
                '@media (min-width: 768px)': {
                  width: '240px',
                },
              }}
              freeSolo
              size="small"
              options={autoCompleteFoodsList}
              value={productName}
              onChange={(e, selectedObject) => {
                if (selectedObject !== null) setProductName(selectedObject);
              }}
              inputValue={productName}
              onInputChange={handleInputChange}
              renderInput={params => (
                <TextField
                  required
                  sx={{
                    fontFamily: 'Verdana',
                    fontSize: '14px',
                    fontWeight: '700',
                    lineHeight: '17px',
                    letterSpacing: '0.04em',
                    textAlign: 'left',
                    marginBottom: '8px',
                    '@media (min-width: 768px)': {
                      width: '240px',
                      marginBottom: '0',
                    },
                  }}
                  {...params}
                  variant="standard"
                  label="Enter product name"
                />
              )}
            />
          </Stack>
        </div>
        <div className={css.formdiv}>
          <TextField
            required
            sx={{
              fontFamily: 'Verdana',
              fontSize: '14px',
              fontWeight: '700',
              lineHeight: '17px',
              letterSpacing: '0.04em',
              textAlign: 'left',
              '@media (min-width: 768px)': {
                width: '106px',
                paddingBottom: '0',
                marginRight: '100px',
                marginLeft: '22px',
                textAlign: 'right',
              },
            }}
            id="standard-basic"
            label="Grams"
            variant="standard"
            type="number"
            value={grams}
            onChange={handleGramsChange}
          />
        </div>
        {width > 768 ? (
          <DiaryAddButton
            onClick={handleSubmit}
            disabled={productName === '' || grams === ''}
          />
        ) : (
          <CustomButton
            className={css.diaryFormBtn}
            color="orange"
            disabled={productName === '' || grams === ''}
          >
            Add
          </CustomButton>
        )}
      </form>
    </div>
  );
}
