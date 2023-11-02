
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { getArchiveDateinfo } from '../../redux/user/userOperations';
import { useDispatch } from 'react-redux';
import css from './ArchiveByDate.module.css';

function ArchiveByDate(props) {
    let dairyRate = 0
    let dayCalories = 0
    const [diaryinf, setDiaryinf] = useState(props.archivesData.archiveinfo)
    const userinfo = props.archivesData.userinfo
    const calcinfo = props.archivesData.calculatorInfo
    const alldates = props.archivesData.archiveDates
    const dispatch = useDispatch();
    const [archivePick, setArchivePick] = useState(0);


    const handleChange = async e => {
        const { value } = e.target;
        setArchivePick(e.target.value);
        const Archiveinfo = {
            archiveDate: alldates[value]._id.archiveDate,
            startDate: alldates[value]._id.startDate,
            endDate: alldates[value]._id.endDate
        }
        const response = await dispatch(getArchiveDateinfo(Archiveinfo));
        if (response) {
            setDiaryinf(response.payload.archiveReturnData)
        }

    }



    let menuItems = [];

    alldates.forEach(function (alldate, index) {
        menuItems.push(<MenuItem key={index} value={index} >Archive Date {alldate._id.archiveDate}
            From {alldate._id.startDate} To  {alldate._id.endDate} </MenuItem>)

    })

    return (
        <>
            <div className={css.report}>

                <div>
                    <h1>archive by date</h1>
                    <Select
                        sx={{
                            marginTop: 0,
                            width: 700,
                            height: 20,
                        }}
                        value={archivePick}
                        onChange={handleChange}
                    >
                        {menuItems}
                    </Select>
                </div>

                <div >
                    <h3 className={css.centerText}>Dairy Archive Summary for </h3>
                    <h5 className={css.centerText}>{userinfo[0].name}   ({userinfo[0].email})</h5>
                    <h5 className={css.centerText}>Archived on {diaryinf[0].archiveDate}</h5>
                    <h5 className={css.centerText}>{diaryinf[0].startDate} through {diaryinf[0].endDate}</h5>

                    {calcinfo[0].calculatorEntries[0].calculatorEntry[0].unitOfMeasure !== "S" ?
                        <>
                            <h5 className={css.centerText}>Height:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].height.toString()}cm  Age:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].age.toString()}  BloodType:   {calcinfo[0].calculatorEntries[0].calculatorEntry[0].bloodType} </h5>
                            <h5 className={css.centerText}>Current Weight:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].currentWeightLbs.toString()}kg  Desired Weight:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].desiredWeightLbs.toString()}kg</h5>
                        </> :
                        <>
                            <h5 className={css.centerText}>Height:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].heightFeet.toString()}  feet {calcinfo[0].calculatorEntries[0].calculatorEntry[0].heightInch.toString()}  inches  Age:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].age.toString()}  BloodType:   {calcinfo[0].calculatorEntries[0].calculatorEntry[0].bloodType} </h5>
                            <h5 className={css.centerText}>Current Weight:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].currentWeightLbs.toString()}lbs    Desired Weight:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].desiredWeightLbs.toString()}lbs</h5>
                        </>

                    }




                    {diaryinf.map((item, index) => (

                        <div>

                            {dayCalories = 0}
                            {dairyRate = item.dailyRate}


                            <div className={css.row}>
                                <h4 className={css.dateHeader}> {item.date}</h4>
                            </div>
                            <div className={css.row}>
                                <h4 className={css.firstColumn} >Food Name</h4>
                                <h4 className={css.otherColumn}> Grams</h4>
                                <h4 className={css.otherColumn}>Calories</h4>
                            </div>

                            {item.foodItems.map((food, rowID) =>
                                <>
                                    <div className={css.row} key={rowID}>

                                        <p key={`title-${index}`} className={css.firstColumn}>{food.title}</p>
                                        <p key={`weight-${index}`} className={css.otherColumn}>{food.weight}</p>
                                        <p key={`calories-${index}`} className={css.otherColumn}>{food.calories}</p>
                                    </div>
                                    {dayCalories = dayCalories + food.calories}

                                </>
                            )}

                            <div className={css.row}>
                                <p className={css.totalColumn}>
                                    Daily Rate:
                                </p>
                                <p className={css.totalColumn}>
                                    Calories consumed
                                </p>
                                <p className={css.totalColumn}>
                                    Remaining calories
                                </p>
                            </div>
                            <div className={css.row}>
                                <p className={css.totalColumn}>
                                    {dairyRate.toString()}
                                </p>
                                <p className={css.totalColumn}>
                                    {dayCalories.toString()}
                                </p>
                                <p className={css.totalColumn}>
                                    {(dairyRate * 1 - dayCalories * 1).toString()}
                                </p>
                            </div>


                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default ArchiveByDate;
