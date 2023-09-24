import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Stack } from '@mui/material';
import css from './DiaryAddProductForm.module.css';
import { useDispatch } from 'react-redux';
import { addDiaryEntry, searchFoods } from '../../redux/diary/diaryOperations';
import CustomButton from 'components/Button/Button';
import { useDiary } from '../../hooks/useDiary';
import { debounce } from 'lodash';
import { setFoodsList } from 'redux/diary/diarySlice';

export default function DiaryAddProduct() {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');
  const { calDate, foodsList } = useDiary();
  const dispatch = useDispatch();
  const uniqueTitle = Array.from(new Set(foodsList.map(item => item.title)));

  useEffect(() => {
    console.log(foodsList);
  }, [foodsList]);

  const handleSubmit = e => {
    e.preventDefault();
    const foodItem = foodsList.find(item => item.title === productName);
    console.log(foodItem)
    const calories = (foodItem.calories / 100) * grams || 0;

    dispatch(addDiaryEntry({ calDate, productName, grams, calories }));
    dispatch(setFoodsList([]));
    setProductName('');
    setGrams('');
  };

  const handleGramsChange = e => {
    setGrams(e.target.value);
  };

  const debounceSearchFoods = debounce(userInput => {
    dispatch(searchFoods(userInput));
  }, 400);

  const handleInputChange = e => {
    if (e) {
      const userInput = e.target.value || '';
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
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              id="size-small-standard"
              freeSolo
              size="small"
              options={uniqueTitle}
              value={productName}
              onChange={(e, newValue) => {
                setProductName(newValue);
              }}
              inputValue={productName}
              onInputChange={handleInputChange}
              sx={{ width: 300 }}
              renderInput={params => (
                <TextField
                  sx={{
                    width: '240px',
                    paddingRight: '32px',
                  }}
                  {...params}
                  variant="standard"
                  label="Enter product name*"
                  placeholder=""
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
              width: '240px',
              paddingRight: '32px',
            }}
            id="standard-basic"
            label="Grams"
            variant="standard"
            type="number"
            value={grams}
            onChange={handleGramsChange}
          />
        </div>
        <CustomButton color="orange">Add</CustomButton>
      </form>
    </div>
  );
}
