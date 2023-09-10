import React from 'react';
import css from './CaloriesCalc.module.css';
import { useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ModalContainer from 'components/Modal/ModalContainer';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




const CaloriesCalc = () => {
  const [open, setOpen] = useState(false); //modal state and setters
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   const [value, setValue] = React.useState(0);


  const [stats, setStats] = useState({
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodType: '',
    heightFeet: '',
    heightinch: '',
    currentWeightLbs: '',
    desiredWeightLbs: '',
  });
   const { height, age, currentWeight, desiredWeight, bloodType,  heightFeet, heightinch, currentWeightLbs, desiredWeightLbs, } = stats;


const changeHandler = e => {
    setStats(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const changeHandler = e => {
  //   setStats({ ...stats, [e.target.name ]: [e.target.value] });
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const submitHandler = async e => {
    e.preventDefault();
  let { height, age, currentWeight, desiredWeight, bloodType,  heightFeet, heightinch, currentWeightLbs, desiredWeightLbs, } = stats;
    if (value === 1) {
      const cmHeight = (parseInt(heightFeet * 12) + parseInt(heightinch)) * 2.54;
      const kgWeightCurrent = currentWeightLbs * .454
      const kgWeightWant = desiredWeightLbs * .454

 await setStats(prevState => ({
      ...prevState,
   height: cmHeight,
   currentWeight: kgWeightCurrent,
   desiredWeight: kgWeightWant,
    }));
   }
    const totalCalories =
      10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight);

    
console.log('*************************************************')
console.log(stats)
 //   console.log(height);
//     console.log(age);
//     console.log(currentWeight);
//  console.log(desiredWeight);
     console.log(bloodType);
    console.log(totalCalories);
//     console.log(heightFeet);
//     console.log(heightinch);
// console.log(currentWeightLbs);
//     console.log(desiredWeightLbs);
    


    < ModalContainer />

    

    handleOpen(); //open modal when data was set to redux
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs sx={{"& button": {backgroundColor: "#FC842D"}, "& button:active": {color: "gray"} }} value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
    style: {
      backgroundColor: "#FC842D"
    }
  }}>
          <Tab label="Metric" {...a11yProps(0)} />
          <Tab label="US Units" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
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
              label="Height  cm"
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
              label="Current Weight kg"
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
              label="Desired Weight kg"
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
        </CustomTabPanel>
        
      <CustomTabPanel value={value} index={1}>
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
              label="Height Feet"
              variant="standard"
              onChange={changeHandler}
              value={heightFeet}
              name="heightFeet"
              required
              error={heightFeet !== '' && (heightFeet < 4 || heightFeet > 7)}
              helperText={
                heightFeet !== '' && (heightFeet < 4 || heightFeet > 7)
                  ? 'feet must be between 4 and 7.'
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
              inputprops={{ inputprops: { min: 122, max: 214 } }}
              label="Height Feet"
              variant="standard"
              onChange={changeHandler}
              value={heightinch}
              name="heightinch"
              required
              error={heightinch !== '' && (heightinch < 0 || heightinch > 12)}
              helperText={
                heightinch !== '' && (heightinch < 0 || heightinch > 12)
                  ? 'inches must be between 122cm and 214cm.'
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
              label="Current Weight lbs"
              variant="standard"
              onChange={changeHandler}
              value={currentWeightLbs}
              name="currentWeightLbs"
              error={
                currentWeightLbs !== '' &&
                (currentWeightLbs < 75 || currentWeightLbs > 400)
              }
              helperText={
                currentWeightLbs !== '' &&
                (currentWeightLbs < 75 || currentWeightLbs > 400)
                  ? 'Current Weight must be between 75lbs and 400lbs.'
                  : ' '
              }
              required
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
              label="Desired Weight lbs"
              variant="standard"
              onChange={changeHandler}
              value={desiredWeightLbs}
              name="desiredWeightLbs"
              required
              error={
                desiredWeightLbs !== '' &&
                (desiredWeightLbs < 75 ||
                  desiredWeightLbs > 400 ||
                  desiredWeightLbs > currentWeightLbs)
              }
              helperText={
                desiredWeightLbs !== '' &&
                (desiredWeightLbs < 75 ||
                  desiredWeightLbs > 400 ||
                  desiredWeightLbs > currentWeightLbs)
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
      <ModalContainer handleClose={handleClose} open={open} />
    </>
  );
};

export default CaloriesCalc;
