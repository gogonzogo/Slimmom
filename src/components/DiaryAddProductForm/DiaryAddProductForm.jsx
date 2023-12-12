import { useState } from 'react';
import { Autocomplete, TextField, Stack } from '@mui/material';
import css from './DiaryAddProductForm.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addDiaryEntry, searchFoods } from '../../redux/user/userOperations';
import CustomButton from 'components/CustomButton/CustomButton';
import { useUser } from '../../hooks/useUser';
import { selectThemeMode } from 'redux/theme/themeSelectors';
import { throttle } from 'lodash';
import { clearAllFoodsSearchList, setDiaryBackBtn } from 'redux/user/userSlice';
import useViewPort from 'hooks/useViewport';
import DiaryAddButton from 'components/DiaryAddButton/DiaryAddButton';
import { toast } from 'react-toastify';

export default function DiaryAddProduct({ diaryBackBtn }) {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');
  const { calendarDate, allFoodsSearchList, calculator } = useUser();
  const dispatch = useDispatch();
  const autoCompleteFoodsList = allFoodsSearchList || [];

  const autoCompleteFoodsData = autoCompleteFoodsList.map((food, index) => ({
    key: index,
    title: food.title,
    groupBloodNotAllowed: food.groupBloodNotAllowed,
  }));
  const themeMode = useSelector(selectThemeMode);
  const { width } = useViewPort();

  const userBloodTypeIndex = () => {
    if (calculator.unitOfMeasure === 'M') {
      return calculator.bloodTypesMetric.indexOf(calculator.bloodType);
    } else {
      return calculator.bloodTypesStandard.indexOf(calculator.bloodType);
    }
  };
  const bloodTypeIndex = userBloodTypeIndex();
  const handleGramsChange = e => {
    if (e.target.value > 0 || e.target.value === '') {
      setGrams(e.target.value);

    } else {
      toast.warn('Grams can not be negative number or letters', {
        position: 'top-right',
        autoClose: 3000,
        className: 'error-toast ',
      });
    }
  };

  const handleInputChange = e => {
    if (e && e.target) {
      const userInput = e.target.value || '';
      setProductName(userInput);
      throttleSearchFoods(userInput);
    }
  };

  const throttleSearchFoods = throttle(userInput => {
    dispatch(searchFoods(userInput));
  }, 500);
  const handleSubmit = e => {
    try {
      e.preventDefault();
      const foodItem = allFoodsSearchList.find(
        item => item.title === productName
      );
      const calories = Math.ceil((foodItem.calories / 100) * grams) || 0;
      dispatch(addDiaryEntry({ calendarDate, productName, grams, calories }));
      dispatch(clearAllFoodsSearchList());
      setProductName('');
      setGrams('');
      dispatch(setDiaryBackBtn(!diaryBackBtn));
    } catch (error) {
      throw new Error(`Error submitting diary entry` + error.message);
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
              ListboxProps={{
                sx: {
                  backgroundColor: themeMode === 'dark' ? '#2a1d45' : '#ffffff'
                },
              }}
              freeSolo
              autoComplete
              includeInputInList
              filterSelectedOptions
              size="small"
              value={productName}
              onChange={(e, selectedObject) => {
                if (selectedObject !== null)
                  setProductName(selectedObject.title);
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
              noOptionsText="No locations"
              options={autoCompleteFoodsData}
              renderOption={(props, option) => {
                const notRecommended =
                  option.groupBloodNotAllowed[bloodTypeIndex];
                return (
                  // <li key={option.key}>

                  <li {...props} key={option.key}>
                    <div>
                      {notRecommended && (
                        <p className={css.notAllowedFood}>Not Recommended</p>
                      )}

                      {option.title}
                    </div>
                  </li>
                );
              }}
              getOptionLabel={option => option.title || ''}
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
