import React from 'react';
import css from './caloriesCalc.module.css';
import { useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ModalContainer from 'components/Modal/ModalContainer';

const CaloriesCalc = () => {
  const [open, setOpen] = useState(false); //modal state and setters
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [stats, setStats] = useState({
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodType: '',
  });
  const { height, age, currentWeight, desiredWeight, bloodType } = stats;

  const changeHandler = e => {
    setStats({ ...stats, [e.target.name]: [e.target.value] });
  };

  const submitHandler = e => {
    e.preventDefault();
    const totalCalories =
      10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - currentWeight);
    console.log(height);
    console.log(age);
    console.log(currentWeight);
    console.log(desiredWeight);
    console.log(bloodType);
    console.log(totalCalories);

    handleOpen(); //open modal when data was set to redux
  };

  return (
    <>
      <div className={css.section}>
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
              type="tel"
              inputprops={{ inputprops: { min: 122, max: 214 } }}
              label="Height"
              variant="standard"
              onChange={changeHandler}
              value={height}
              name="height"
              required
              error={height !== '' && (height < 122 || height > 214)}
              helperText={
                height !== '' && (height < 122 || height > 214)
                  ? 'Height must be between 122cm and 214cm.'
                  : ' '
              }
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
              type="tel"
              inputprops={{ inputprops: { min: 18, max: 80 } }}
              label="Age"
              variant="standard"
              onChange={changeHandler}
              value={age}
              name="age"
              required
              error={age !== '' && (age < 18 || age > 80)}
              helperText={
                age !== '' && (age < 18 || age > 80)
                  ? 'Age must be between 18 and 80.'
                  : ' '
              }
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
              type="tel"
              inputprops={{ inputprops: { min: 34, max: 181 } }}
              label="Current Weight"
              variant="standard"
              onChange={changeHandler}
              value={currentWeight}
              name="currentWeight"
              error={
                currentWeight !== '' &&
                (currentWeight < 34 || currentWeight > 181)
              }
              helperText={
                currentWeight !== '' &&
                (currentWeight < 34 || currentWeight > 181)
                  ? 'Current Weight must be between 34kg and 181kg.'
                  : ' '
              }
              required
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
              type="tel"
              inputprops={{ inputprops: { min: 34, max: 181 } }}
              label="Desired Weight"
              variant="standard"
              onChange={changeHandler}
              value={desiredWeight}
              name="desiredWeight"
              required
              error={
                desiredWeight !== '' &&
                (desiredWeight < 34 ||
                  desiredWeight > 181 ||
                  desiredWeight > currentWeight)
              }
              helperText={
                desiredWeight !== '' &&
                (desiredWeight < 34 ||
                  desiredWeight > 181 ||
                  desiredWeight > currentWeight)
                  ? 'Desired Weight must be between 34kg and 181kg. & less then current weight'
                  : ' '
              }
            />
            <FormLabel id="demo-radio-buttons-group-label">
              Blood Type
            </FormLabel>

            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              value={bloodType}
              name="bloodType"
              sx={{
                '&, &.Mui-checked': {
                  color: '#FC842D',
                },
                flexDirection: 'row',
              }}
              onChange={changeHandler}
              required
            >
              <FormControlLabel
                value="A"
                control={<Radio />}
                label="A"
                sx={{
                  color: '#E0E0E0',
                  '&.Mui-checked': {
                    color: '#FC842D',
                  },
                }}
              />
              <FormControlLabel
                value="B"
                control={<Radio />}
                label="B"
                sx={{
                  color: '#E0E0E0',
                  '&.Mui-checked': {
                    color: '#FC842D',
                  },
                }}
              />
              <FormControlLabel
                value="AB"
                control={<Radio />}
                label="AB"
                sx={{
                  color: '#E0E0E0',
                  '&.Mui-checked': {
                    color: '#FC842D',
                  },
                }}
              />
              <FormControlLabel
                value="O"
                control={<Radio />}
                label="O"
                sx={{
                  color: '#E0E0E0',
                  '&.Mui-checked': {
                    color: 'rgba(252, 132, 45, 1)',
                  },
                }}
              />
            </RadioGroup>
          </div>
          <Button
            sx={{
              marginTop: '40px',
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
          >
            Start losing weight
          </Button>
        </form>
      </div>
      <ModalContainer handleClose={handleClose} open={open} />
    </>
  );
};

export default CaloriesCalc;
