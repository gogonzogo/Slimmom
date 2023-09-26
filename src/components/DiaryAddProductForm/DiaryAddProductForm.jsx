import { useState } from 'react';
import { Autocomplete, TextField, Stack } from '@mui/material';
import css from './DiaryAddProductForm.module.css';
import { useDispatch } from 'react-redux';
import { addDiaryEntry, searchFoods } from '../../redux/diary/diaryOperations';
import CustomButton from 'components/CustomButton/CustomButton';
import { useDiary } from '../../hooks/useDiary';
import { debounce } from 'lodash';
import { setFoodsList } from 'redux/diary/diarySlice';
import { setDiaryBackBtn } from 'redux/diary/diarySlice';
import useViewPort from 'hooks/useViewport';
import DiaryAddButton from 'components/DiaryAddButton/DiaryAddButton';

export default function DiaryAddProduct({ diaryBackBtn }) {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');
  const { calDate, foodsList } = useDiary();
  const dispatch = useDispatch();
  const uniqueTitle = Array.from(new Set(foodsList.map(item => item.title)));
  const { width } = useViewPort();

  const handleSubmit = e => {
    e.preventDefault();
    const foodItem = foodsList.find(item => item.title === productName);
    const calories = Math.ceil((foodItem.calories / 100) * grams) || 0;

    dispatch(addDiaryEntry({ calDate, productName, grams, calories }));
    dispatch(setFoodsList([]));
    setProductName('');
    setGrams('');
    dispatch(setDiaryBackBtn(!diaryBackBtn));
  };

  const handleGramsChange = e => {
    setGrams(e.target.value);
  };

  const debounceSearchFoods = debounce(userInput => {
    dispatch(searchFoods(userInput));
  }, 400);

  const handleInputChange = e => {
    const userInput = e.target.value || '';
    if (e) {
      if (userInput === '') {
        // dispatch(setFoodsList([]));
      }
      setProductName(userInput);
      debounceSearchFoods(userInput);
    }
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
              options={uniqueTitle}
              value={productName}
              onChange={(e, selectedObject) => {
                if (selectedObject !== null) setProductName(selectedObject);
              }}
              inputValue={productName}
              onInputChange={handleInputChange}
              renderInput={params => (
                <TextField
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
                  label="Enter product name*"
                />
              )}
            />
          </Stack>
        </div>
        <div className={css.formdiv}>
          <TextField
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
            label="Grams*"
            variant="standard"
            type="number"
            value={grams}
            onChange={handleGramsChange}
          />
        </div>
        {width > 768 ? (
          <DiaryAddButton onClick={handleSubmit} />
        ) : (
          <CustomButton className={css.diaryFormBtn} color="orange">
            Add
          </CustomButton>
        )}
      </form>
    </div>
  );
}
