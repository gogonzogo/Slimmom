
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

import { getArchiveDateinfo } from '../../redux/user/userOperations';

import { useDispatch } from 'react-redux';


function ArchiveByDate(props) {
    let userinfo = props.archivesData.userinfo
    let calcinfo = props.archivesData.calculatorData
    let diaryinf = props.archivesData.userArchive
    let daysItems = [];
    const dispatch = useDispatch();
    const [color, setColor] = useState(0);

    const alldates = props.archivesData.archiveinfo

    const handleChange = async e => {
        const { value } = e.target;
        setColor(e.target.value);
        const Archiveinfo = {
            archiveDate: alldates[value]._id.archiveDate,
            startDate: alldates[value]._id.startDate,
            endDate: alldates[value]._id.endDate
        }
        const response = await dispatch(getArchiveDateinfo(Archiveinfo));
        if (response) {

            userinfo = response.payload.userinfo
            calcinfo = response.payload.calculatorData
            diaryinf = response.payload.userArchive
        }

    }

    const createReport = async => {
        console.log('alldates', alldates)

        daysItems = [];
        alldates.forEach(function (alldate, index) {
            daysItems.push(<h5>{alldate.date}</h5>)
            let currentDay = `<table>
                <tr>
                    <th>Food Name </th>
                    <th>Grams</th>
                    <th>Calories</th>
                </tr>)`
            alldate.foodItems.forEach(function (food, index) {
                console.log('alldate.foodItems', alldate.foodItems)
                currentDay = currentDay + `<tr>  <th> {food.title} </th> <th> {food.weight} </th> <th> {food.calories} </th>  </tr >`

            })
            currentDay = currentDay + `</table>`
            daysItems.push(currentDay)

        })
    }


    createReport()
    console.log('alldates', alldates)

    let menuItems = [];
    diaryinf.forEach(function (alldate, index) {
        menuItems.push(<MenuItem key={index} value={index} >Archive Date {alldate._id.archiveDate}
            From {alldate._id.startDate} To  {alldate._id.endDate} </MenuItem>)

    })

    return (
        <>
            <div>


                <h1>archive by date</h1>
                <Select
                    sx={{
                        marginTop: 0,
                        width: 700,
                        height: 20,
                    }}
                    value={color}
                    onChange={handleChange}
                >
                    {menuItems}
                </Select>
            </div>

            <div>

                <h3>Dairy Archive Summary for </h3>
                <h5>{userinfo[0].name}   ({userinfo[0].email})</h5>
                <h5>Archived on {diaryinf[0]._id.archiveDate}</h5>
                <h5>{diaryinf[0]._id.startDate} through {diaryinf[0]._id.endDate}</h5>
                {calcinfo[0].calculatorEntries[0].calculatorEntry[0].unitOfMeasure === "S" ?
                    <>
                        <h5>Height:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].heightFeet.toString()}  Age:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].age.toString()}  BloodType:   {calcinfo[0].calculatorEntries[0].calculatorEntry[0].bloodType} </h5>
                        <h5>Current Weight:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].currentWeightLbs.toString()}  Desired Weight:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].desiredWeightLbs.toString()}</h5>
                    </> :
                    <>
                        <h5>Height:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].height.toString()}  feet {calcinfo[0].calculatorEntries[0].calculatorEntry[0].heightInch.toString()}  inches  Age:  {calcinfo[0].calculatorEntries[0].calculatorEntry[0].age.toString()}  BloodType:   {calcinfo[0].calculatorEntries[0].calculatorEntry[0].bloodType} </h5>
                        <h5>Current Weight:  {calcinfo[0].calculatorEntries[0].currentWeight.toString()}    Desired Weight:  {calcinfo[0].calculatorEntries[0].desiredWeight.toString()}</h5>
                    </>

                }
                {daysItems}
                {console.log('alldates', alldates)}



                {/* {alldates.map((item) => {
                    <>
                        <h5>{item.date}</h5>
                        <table>

                            <tr>
                                <th>Food Name </th>
                                <th>Grams</th>
                                <th>Calories</th>
                            </tr>
                        </table>
                    </>
                    return diaryinf
                })} */}

            </div>
        </>
    )
}

export default ArchiveByDate;
