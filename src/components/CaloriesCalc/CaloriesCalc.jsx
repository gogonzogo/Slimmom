import React from 'react';
import css from './CaloriesCalc.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab, Tabs } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Modal from 'components/Modal/Modal';
import ValidationPopup from '../ValidationPopup/ValidationPopup';
import {
  validateHeight,
  validateAge,
  validateCurrent,
  validateDesired,
  validateBlood,
} from '../../redux/validation/calculateCalsSlice';
import {
  validateHeightFeet,
  validateHeightInch,
  validateCurrentLbs,
  validateDesiredLbs,
} from '../../redux/validation/calculateCalsSlice';
import { storeCalulator } from '../../redux/Calc/calcSlice';
import CustomButton from 'components/Button/Button';
import { CalNoEat, sendCalculator } from '../../redux/Calc/calcOperations';
import { useAuth } from '../../hooks/useAuth'

const CaloriesCalc = () => {
  const {loggedIn} = useAuth();
  const dispatch = useDispatch();
  const validHeight = useSelector(state => state.calculate.isHeightValid);
  const validAge = useSelector(state => state.calculate.isAgeValid);
  const validcurrent = useSelector(state => state.calculate.isCurrentValid);
  const validDesired = useSelector(state => state.calculate.isDesiredValid);
  const validBlood = useSelector(state => state.calculate.isBloodValid);
  const isFormValid =
    validHeight && validAge && validcurrent && validDesired && validBlood
      ? true
      : false;

  const validHeightFeet = useSelector(
    state => state.calculate.isHeightFeetValid
  );
  const validHeightInch = useSelector(
    state => state.calculate.isHeightInchValid
  );
  const validcurrentLbs = useSelector(
    state => state.calculate.isCurrentLbsValid
  );
  const validDesiredLbs = useSelector(
    state => state.calculate.isDesiredLbsValid
  );
  const isStandardFormValid =
    validHeightFeet &&
    validHeightInch &&
    validAge &&
    validcurrentLbs &&
    validDesiredLbs &&
    validBlood
      ? true
      : false;

  const returnedCal = useSelector(state => state.calCalories.cals.value);

  const [validationPopups, setValidationPopups] = useState({
    weight: false,
    age: false,
    currentWeight: false,
    desiredWeight: false,
    bloodType: false,
  });

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };
  const [focusedField, setFocusedField] = useState(null);

  const toggleValidationPopup = (fieldName, visible) => {
    setValidationPopups({ ...validationPopups, [fieldName]: visible });
  };

  const validationReqs = useSelector(state => state.calculate.validationReqs);

  const [modalState, setModalState] = useState({
    open: false,
    totalCalories: null,
    foodNotToEat: [],
  }); //modal state and setters

  const handleOpen = passinfo => {
    setModalState({
      open: true,
      totalCalories: passinfo.totalCalories,
      foodNotToEat: passinfo.notAllowedFood,
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
    height: returnedCal.height,
    age: returnedCal.age,
    currentWeight: returnedCal.currentWeight,
    desiredWeight: returnedCal.desiredWeight,
    bloodType: returnedCal.bloodType,
    heightFeet: returnedCal.heightFeet,
    heightInch: returnedCal.heightInch,
    currentWeightLbs: returnedCal.currentWeightLbs,
    desiredWeightLbs: returnedCal.desiredWeightLbs,
  });

  const changeHandler = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    switch (name) {
      case 'height':
        dispatch(validateHeight({ fieldValue: value }));
        break;
      case 'heightFeet':
        dispatch(validateHeightFeet({ fieldValue: value }));
        break;
      case 'heightInch':
        dispatch(validateHeightInch({ fieldValue: value }));
        break;
      case 'age':
        dispatch(validateAge({ fieldValue: value }));
        break;
      case 'currentWeight':
        dispatch(validateCurrent({ fieldValue: value }));
        break;
      case 'currentWeightLbs':
        dispatch(validateCurrentLbs({ fieldValue: value }));
        break;
      case 'desiredWeight':
        dispatch(validateDesired({ fieldValue: value }));
        break;
      case 'desiredWeightLbs':
        dispatch(validateDesiredLbs({ fieldValue: value }));
        break;
      case 'bloodType':
        dispatch(validateBlood({ fieldValue: value }));
        break;
      default:
        break;
    }
    if (currentTabIndex === 1) {
      const { heightFeet, heightInch, currentWeightLbs, desiredWeightLbs } =
        formData;
      setFormData(formData => {
        return {
          ...formData,
          height: (heightFeet * 12 + heightInch * 1) * 2.54,
          currentWeight: currentWeightLbs * 0.454,
          desiredWeight: desiredWeightLbs * 0.454,
        };
      });
    }
    setFocusedField(name);
    toggleValidationPopup(name, true);
  };

  const renderValidationPopup = () => {
    return (
      <ValidationPopup
        validationData={validationReqs[focusedField]}
        visible={focusedField}
      />
    );
  };

  const submitHandler = async e => {
    e.preventDefault();
    if (currentTabIndex === 1) {
      const { heightFeet, heightInch, currentWeightLbs, desiredWeightLbs } =
        formData;
      await setFormData(formData => {
        return {
          ...formData,
          height: (heightFeet * 12 + heightInch * 1) * 2.54,
          currentWeight: currentWeightLbs * 0.454,
          desiredWeight: desiredWeightLbs * 0.454,
        };
      });
    }

    const { height, age, currentWeight, desiredWeight, bloodType } = formData;
    dispatch(
      storeCalulator({
        height: height,
        age: age,
        currentWeight: currentWeight,
        desiredWeight: desiredWeight,
        bloodType: bloodType,
      })
    );
    const entedInfo = {
      currentWeight,
      height,
      age,
      desiredWeight,
      bloodType,
    };
    try {
      const response = await dispatch(CalNoEat(entedInfo));
      const passinfo = response.payload.data;
      
        if (loggedIn) {
          let convertBlood = 0
          switch (bloodType) {
            case 'A':
              convertBlood = 1;
              break;
            case 'B':
              convertBlood = 2;
              break;
            case 'AB':
              convertBlood = 3;
              break;
            case 'O':
              convertBlood = 4;
              break;
            default:
              convertBlood = 1;
              break;
          }
      
          let mestype = '';
          if (currentTabIndex === 0) { mestype = 'M' } else { mestype = 'M' }
          const CalculatorInfo = {
            height,
            age,
            bloodType: convertBlood,
            currentWeight,
            desiredWeight,
            totalCalories: passinfo.totalCalories,
            measurementType: mestype,
            originalWeight: 0

          };
          const Calcresponse = await dispatch(sendCalculator(CalculatorInfo));
        console.log(Calcresponse)
      }
      if (!loggedIn) {
        handleOpen(passinfo);
      }
    } catch (error) {
      console.error('returned Error', error.message);
    }
  };

  return (
    <>
      <div className={css.positionWrapper}>
        <div className={css.section}>
          <div className={css.calcWrapper}>
            <h1 className={css.heading}>Calculate your daily calorie</h1>
            <h1 className={css.heading}>intake right now</h1>

          <div className={css.tabs}>
              <Tabs 
                orientation="vertical"
              value={currentTabIndex}
                onChange={handleTabChange}
                indicatorColor='transparent'
              sx={{
                '& button': {
                  marginTop: '25px',
                  paddingTop: '15px',
                  width: "182px",
    padding: "1rem",
    margin: "2px",
    height: "44px",
    borderRadius: "30px",
    fontFamily: 'Verdana',
    fontSize: "14px",
    fontWeight: 700,
    textTransform: "capitalize",
    backgroundColor: '#fc842d',
    border: 'solid #fc842d',
                },
                '& button:focus' : {
                backgroundColor: '#ffffff',
    border: 'solid #fc842d',
    boxShadow: ' 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
                },
'& button:hover' : {
                backgroundColor: '#ffffff',
     color: '#fc842d',
    border: 'solid #fc842d',
    boxShadow: ' 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
                },
              }}
            >
              <Tab label="Metric" />
              <Tab label="Standard US" />
            </Tabs>
</div>

            {/* TAB 1 Contents */}
            {currentTabIndex === 0 && (
              <form className={css.calcform} onSubmit={submitHandler}>
                <div className={css.formdiv}>
                  <TextField
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused': {
                        '& > fieldset': {
                          borderColor: 'orange',
                        },
                      },
                      
                      fontFamily: 'Verdana',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '17px',
                      letterSpacing: '0.04em',
                      textAlign: 'left',
                      width: '272px',
                      paddingRight: '32px',
                    }}
                    margin="normal" 
                    InputLabelProps={{ style: { color: '#9B9FAA' } }}
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
                  {focusedField === 'height' && (
                    <ValidationPopup
                      validationData={validationReqs[focusedField]}
                      visible={focusedField}
                    />
                  )}
                  <TextField
                    sx={{
                      fontFamily: 'Verdana',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '17px',
                      letterSpacing: '0.04em',
                      textAlign: 'left',
                      width: '272px',
                      paddingRight: '32px',
                    }}
                    margin="normal" 
                    InputLabelProps={{ style: { color: '#9B9FAA' } }}
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
                  {focusedField === 'age' && (
                    <ValidationPopup
                      validationData={validationReqs[focusedField]}
                      visible={focusedField}
                    />
                  )}
                  <TextField
                    sx={{
                      fontFamily: 'Verdana',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '17px',
                      letterSpacing: '0.04em',
                      textAlign: 'left',
                      width: '272px',
                      paddingRight: '32px',
                    }}
                    margin="normal" 
                    InputLabelProps={{ style: { color: '#9B9FAA' } }}
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
                  {focusedField === 'currentWeight' && (
                    <ValidationPopup
                      validationData={validationReqs[focusedField]}
                      visible={focusedField}
                    />
                  )}
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
                      width: '272px',
                      paddingRight: '32px',
                    }}
                    margin="normal"
                    InputLabelProps={{ style: { color: '#9B9FAA' } }}
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
                  {focusedField === 'desiredWeight' && (
                    <ValidationPopup
                      validationData={validationReqs[focusedField]}
                      visible={focusedField}
                    />
                  )}
                  <FormLabel id="demo-radio-buttons-group-label"
                   sx={{
                       marginTop: '20px',
                    }}>
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
                      control={
                        <Radio
                          sx={{
                            '&.Mui-checked': {
                              color: '#FC842D',
                            },
                          }}
                        />
                      }
                      label="1"
                    />
                    <FormControlLabel
                      value="B"
                      control={
                        <Radio
                          sx={{
                            '&.Mui-checked': {
                              color: '#FC842D',
                            },
                          }}
                        />
                      }
                      label="2"
                    />
                    <FormControlLabel
                      value="AB"
                      control={
                        <Radio
                          sx={{
                            '&.Mui-checked': {
                              color: '#FC842D',
                            },
                          }}
                        />
                      }
                      label="3"
                    />
                    <FormControlLabel
                      value="O"
                      control={
                        <Radio
                          sx={{
                            '&.Mui-checked': {
                              color: '#FC842D',
                            },
                          }}
                        />
                      }
                      label="4"
                    />
                  </RadioGroup>
                  {focusedField === 'bloodType' && (
                    <ValidationPopup
                      validationData={validationReqs[focusedField]}
                      visible={focusedField}
                    />
                  )}
                </div>
                <CustomButton
                  color="orange"
                  size="wide"
                  disabled={!isFormValid}
                >
                  Start losing weight
                </CustomButton>
              </form>
            )}
            {/*  Standard US Contents */}
            {currentTabIndex === 1 && (
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
                      width: '272px',
                      paddingRight: '32px',
                      
                    }}
                    margin="normal"
                    InputLabelProps={{ style: { color: '#9B9FAA' } }}
                    type="tel"
                    label="Height Feet *"
                    variant="standard"
                    onChange={changeHandler}
                    value={formData.heightFeet}
                    name="heightFeet"
                    onFocus={() => setFocusedField('heightFeet')}
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
                      width: '272px',
                      paddingRight: '32px',
                    }}
                    margin="normal"
                    InputLabelProps={{ style: { color: '#9B9FAA' } }}
                    type="tel"
                    label="Height Inch *"
                    variant="standard"
                    onChange={changeHandler}
                    value={formData.heightInch}
                    name="heightInch"
                    onFocus={() => setFocusedField('heightInch')}
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
                      width: '272px',
                      paddingRight: '32px',
                    }}
                    margin="normal"
                    InputLabelProps={{ style: { color: '#9B9FAA' } }}
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
                      width: '272px',
                      paddingRight: '32px',
                    }}
                    margin="normal"
                    InputLabelProps={{ style: { color: '#9B9FAA' } }}
                    type="tel"
                    inputprops={{ inputprops: { min: 34, max: 181 } }}
                    label="Current Weight Lbs"
                    variant="standard"
                    onChange={changeHandler}
                    value={formData.currentWeightLbs}
                    name="currentWeightLbs"
                    onFocus={() => setFocusedField('currentWeightLbs')}
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
                      width: '272px',
                      paddingRight: '32px',
                    }}
                     margin="normal"
                    InputLabelProps={{ style: { color: '#9B9FAA' } }}
                    type="tel"
                    inputprops={{ inputprops: { min: 34, max: 181 } }}
                    label="Desired Weight Lbs"
                    variant="standard"
                    onChange={changeHandler}
                    value={formData.desiredWeightLbs}
                    name="desiredWeightLbs"
                    onFocus={() => setFocusedField('desiredWeightLbs')}
                    onBlur={() => setFocusedField(null)}
                  />
                  <FormLabel id="demo-radio-buttons-group-label"
                  sx={{
                  marginTop: '20px',
                    }}>
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
                      control={
                        <Radio
                          sx={{
                            '&.Mui-checked': {
                              color: '#FC842D',
                            },
                          }}
                        />
                      }
                      label="A"
                    />
                    <FormControlLabel
                      value="B"
                      control={
                        <Radio
                          sx={{
                            '&.Mui-checked': {
                              color: '#FC842D',
                            },
                          }}
                        />
                      }
                      label="B"
                    />
                    <FormControlLabel
                      value="AB"
                      control={
                        <Radio
                          sx={{
                            '&.Mui-checked': {
                              color: '#FC842D',
                            },
                          }}
                        />
                      }
                      label="AB"
                    />
                    <FormControlLabel
                      value="O"
                      control={
                        <Radio
                          sx={{
                            '&.Mui-checked': {
                              color: '#FC842D',
                            },
                          }}
                        />
                      }
                      label="O"
                    />
                  </RadioGroup>
                </div>

                {renderValidationPopup()}
                <CustomButton
                  color="orange"
                  size="wide"
                  disabled={!isStandardFormValid}
                
                >
                  Start losing weight
                </CustomButton>
              </form>
            )}
          </div>
        </div>
      </div>

      <Modal handleClose={handleClose} modalState={modalState} />
    </>
  );
};

export default CaloriesCalc;