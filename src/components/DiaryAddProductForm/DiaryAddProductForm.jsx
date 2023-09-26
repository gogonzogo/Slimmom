import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Stack } from '@mui/material';
import css from './DiaryAddProductForm.module.css';
import { useDispatch } from 'react-redux';
import { addDiaryEntry, searchFoods } from '../../redux/diary/diaryOperations';
import CustomButton from 'components/CustomButton/CustomButton';
import { useDiary } from '../../hooks/useDiary';
import { debounce } from 'lodash';
import { setFoodsList } from 'redux/diary/diarySlice';
import { setDiaryBackBtn } from 'redux/diary/diarySlice';

export default function DiaryAddProduct({ diaryBackBtn }) {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');
  const { calDate, foodsList, diaryList } = useDiary();
  const dispatch = useDispatch();
  const uniqueTitle = Array.from(new Set(foodsList.map(item => item.title)));

  useEffect(() => {
    console.log(foodsList);
  }, [foodsList]);

  const handleSubmit = e => {
    e.preventDefault();
    const foodItem = foodsList.find(item => item.title === productName);
    const calories = (foodItem.calories / 100) * grams || 0;

    dispatch(addDiaryEntry({ calDate, productName, grams, calories }));
    dispatch(setFoodsList([]));
    setProductName('');
    setGrams('');
    dispatch(setDiaryBackBtn(!diaryBackBtn));
    console.log(diaryList);
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
              freeSolo
              size="small"
              options={uniqueTitle}
              value={productName}
              onChange={(e, selectedObject) => {
                if (selectedObject !== null)
                setProductName(selectedObject);
              }}
              inputValue={productName}
              onInputChange={handleInputChange}
              renderInput={params => (
                <TextField
                  sx={{
                    fontSize: '14px',
                    marginBottom: '8px',
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
            }}
            id="standard-basic"
            label="Grams"
            variant="standard"
            type="number"
            value={grams}
            onChange={handleGramsChange}
          />
        </div>
        <CustomButton className={css.diaryFormBtn} color="orange">
          Add
        </CustomButton>
      </form>
    </div>
  );
}
