import React from 'react';
import css from './CaloriesCalc.module.css';
import { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from 'components/Modal/Modal';
import ValidationPopup from '../ValidationPopup/ValidationPopup';
import { validateHeight, validateAge, validateCurrent, validateDesired, validateBlood }
from '../../redux/validation/calculateCalsSlice'

const CaloriesCalc = () => {
  const dispatch = useDispatch();
  const validHeight = useSelector((state) => state.calculate.isHeightValid)
  const validAge = useSelector(state => state.calculate.isAgeValid)
  const validcurrent = useSelector(state => state.calculate.isCurrentValid)
  const validDesired = useSelector(state => state.calculate.isDesiredValid)
  const validBlood = useSelector(state => state.calculate.isBloodValid)


  const isFormValid = validHeight && validAge && validcurrent && validDesired && validBlood ? true : false 


  
  const [validationPopups, setValidationPopups] = useState({
    weight: false,
    age: false,
    currentWeight: false,
    desiredWeight: false,
    bloodType: false
  });
  const [focusedField, setFocusedField] = useState(null);

  const toggleValidationPopup = (fieldName, visible) => {
    setValidationPopups({ ...validationPopups, [fieldName]: visible });
    console.log('isFormValid', isFormValid)
  };

    const validationReqs = useSelector((state) => state.calculate.validationReqs);


  const [modalState, setModalState] = useState({
    open: false,
    totalCalories: null,
    foodNotToEat: [],
  }); //modal state and setters

  const handleOpen = totalCalories => {
    setModalState({
      open: true,
      totalCalories: totalCalories,
      foodNotToEat: ['give', 'me', 'food'], //  change me
    });
  };
  const handleClose = () => {
    setModalState(prev => {
      return {
        ...prev,
        open: false,
      };
    });
    setTimeout(() => {
      // fixing effect, when during closing modal you see 0 kcal recommended daily calorie intake
      setModalState({ open: false, totalCalories: null, foodNotToEat: [] });
    }, 250);
  };

  const [formData, setFormData] = useState({
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodType: '',
  });

  const changeHandler = e => {
const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  switch (name) {
    case 'height':
      dispatch(validateHeight({ fieldValue: value }));
        break;
    case 'age':
      dispatch(validateAge({ fieldValue: value }));
        break;
    case 'currentWeight':
      dispatch(validateCurrent({ fieldValue: value }));
        break;
    case 'desiredWeight':
      dispatch(validateDesired({ fieldValue: value }));
      break;
    case 'bloodType':
      dispatch(validateBlood({ fieldValue: value }));
      // console.log('bloodType' )
      break;
    default:
        break;
    }
    setFocusedField(name);
    toggleValidationPopup(name, true);
  };

  const renderValidationPopup = () => {
    console.log('focusedField', focusedField)
    return (
      <ValidationPopup
        validationData={validationReqs[focusedField]}
        visible={!!focusedField}
      />
    );
  };

  const submitHandler = e => {
    e.preventDefault();
    const {height, age, currentWeight, desiredWeight, } = formData
    const totalCalories =
      10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight);
    // console.log(height);
    // console.log(age);
    // console.log(currentWeight);
    // console.log(desiredWeight);
    // console.log(bloodType);
    // console.log(totalCalories);

    handleOpen(totalCalories); // give me food
  };

  return (
    <>
      <div className={css.positionWrapper}>
        <div className={css.section}>
          <div className={css.calcWrapper}>
            <h1 className={css.heading}>Calculate your daily calorie</h1>
            <h1 className={css.heading}>intake right now</h1>

            <form className={css.calcform} onSubmit={submitHandler}>
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
                                InputLabelProps={{ style: { color: "#9B9FAA" } }}

                  type="tel"
                  inputprops={{ inputprops: { min: 122, max: 214 } }}
                  label="Height *"
                  variant="standard"
                  onChange={changeHandler}
                  value={formData.height}
                  name="height"
              onFocus={() => setFocusedField('height')}
              onBlur={() => setFocusedField(null)}
                />
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
                  InputLabelProps={{ style: { color: "#9B9FAA" } }}
                  type="tel"
                  inputprops={{ inputprops: { min: 18, max: 80 } }}
                  label="Age"
                  variant="standard"
                  onChange={changeHandler}
                  value={formData.age}
                  name="age"
                  onFocus={() => setFocusedField('age')}
              onBlur={() => setFocusedField(null)}
                />
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
                                InputLabelProps={{ style: { color: "#9B9FAA" } }}

                  type="tel"
                  inputprops={{ inputprops: { min: 34, max: 181 } }}
                  label="Current Weight"
                  variant="standard"
                  onChange={changeHandler}
                  value={formData.currentWeight}
                  name="currentWeight"
                  onFocus={() => setFocusedField('currentWeight')}
              onBlur={() => setFocusedField(null)}
                />
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
                                InputLabelProps={{ style: { color: "#9B9FAA" } }}

                  type="tel"
                  inputprops={{ inputprops: { min: 34, max: 181 } }}
                  label="Desired Weight"
                  variant="standard"
                  onChange={changeHandler}
                  value={formData.desiredWeight}
                  name="desiredWeight"
                  onFocus={() => setFocusedField('desiredWeight')}
              onBlur={() => setFocusedField(null)}
                />
                <FormLabel id="demo-radio-buttons-group-label">
                  Blood Type
                </FormLabel>

                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  value={formData.bloodType}
                  name="bloodType"
                  sx={{
                    flexDirection: 'row',
                  }}
                  onChange={changeHandler}
              onFocus={() => setFocusedField('bloodType')}
              onBlur={() => setFocusedField(null)}
                >
                  <FormControlLabel
                    value="A"
                    control={<Radio  sx={{
          '&.Mui-checked': {
            color: '#FC842D',
          },
        }} />}
                    label="A"
                  />
                  <FormControlLabel
                    value="B"
                    control={<Radio sx={{
          '&.Mui-checked': {
            color: '#FC842D',
          },
        }} />}
                    label="B"
                  />
                  <FormControlLabel
                    value="AB"
                    control={<Radio  sx={{
          '&.Mui-checked': {
            color: '#FC842D',
          },
        }}/>}
                    label="AB"
                  />
                  <FormControlLabel
                    value="O"
                    control={<Radio  sx={{
          '&.Mui-checked': {
            color: '#FC842D',
          },
        }}/>}
                    label="O"
                  />
                </RadioGroup>
              </div>

              {renderValidationPopup()}

              <Button
                sx={{
                  margin: '40px 0',
                  backgroundColor: '#FC842D',
                  width: '210px',
                  height: '43px',
                  dropShadow: '50% #FC842D80',
                  borderRadius: '30px',
                  fontFamily: 'Verdana',
                  fontSize: '14px',
                  fontWeight: '700',
                  lineHeight: '17px',
                  letterSpacing: '0.04em',
                  textAlign: 'center',
                  color: '#FFFFFF',
                }}
                type="submit"
                variant="contained"
                disabled={!isFormValid}
              >
                Start losing weight
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Modal handleClose={handleClose} modalState={modalState} />
    </>
  );
};

export default CaloriesCalc;
