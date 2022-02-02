
import { AnyRecord } from "dns";
import moment from "moment";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import buildCalendar, { currMonthName, currYear, nextMonth, prevMonth } from "./service";

const Calendar = (props :any) => {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    const [dateOfUserClick, setDateOfUserClick] = useState(moment());
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])

    const isSelected = (day : any) => {
        return value.isSame(day, "day")
    }

    const beforeToday = (day: any) => {
        return day.isBefore(new Date(), 'day')
    }

    const toDay = (day : any) => {
        return day.isSame(new Date(), 'day')
    }
    const isHoliday = (day : any)  => {
        return day.day() === 0 || day.day() === 6
    }

    const dayStyle = (day: any) => {
        // if (beforeToday(day)) return "before"
        if (isSelected(day)) return "day selected"
        if (toDay(day)) return "day today"
        if (isHoliday(day)) return "day holiday"
        return "day"
    }
    const nameDayStyle = (index: any) =>{
            if (index === 0 || index === 6) return  "holiday"
     }

    const horliday = [moment(new Date(2021,11,31)),moment(new Date(2021,11,10))]

    const isHorliday = (day: any) =>{
            if (horliday.find(d => day.isSame( d, 'day'))){
                return day.isSame(horliday.find(d => day.isSame( d, 'day')), 'day')
            }
    }


    return (
        <CalendarStyle>
            <div className="header-calendar">
                <h1 className="pointer" onClick={() => { setValue(prevMonth(value)) }}>
                <i className ="fas fa-angle-left"></i>
            </h1>
                <div>
                    <h1>
                        {currMonthName(value)}
                        {currYear(value)}
                    </h1>
                </div>
                <h1 className="pointer"  onClick={() => { setValue(nextMonth(value)) }}>
                <i className ="fas fa-angle-right"></i>
            </h1>
            </div>

            <div className="day-name">
                {dayOfWeek.map((day , key) => <div key={key} className={`name ${nameDayStyle(key)}`}>
                    <p  className="p4">{day} </p>
                </div>)}
            </div>
            <div className="calendar">

                {calendar.map((week: any, key : number) => <div key={key} className="week">
                    {week.map((day : any, key : number) => <div key={key}
                        onClick={() => {
                            setValue(day),
                                props.onChange && props.onChange(day)
                        }}
                        className={` ${dayStyle(day)}`}
                        >
                        <div className="num-date">
                           <div className="circle"> {day.format("D").toString()}</div>
                        </div>
                        { isHorliday(day)  && (
                            <>
                                <div className="public-holiday" onClick={() => console.log("kimmee")}>Holiday</div>
                                <div className="public-holiday-mobile"></div>
                            </>
                            )}
                    </div>)}

                </div>)}
            </div>
        </CalendarStyle>

    )
}


export default Calendar

const CalendarStyle = styled.div`

.day-name{
    display: flex;
}
.calendar .week { 
    display: flex;
    width:100%;
}

.day {
    width:100%;
    min-height: 100px;
    cursor: pointer;
    margin: 5px;
    border: 0.5px solid var(--bs-gray-dark);
    border-radius: 20px;
    padding:10px;
}
.day:hover {
    border: 0.5px solid var(--bs-hover);
}

.selected { 
    border: 1px solid var(--bs-primary);
}

.holiday {
    border: 1px solid var(--bs-red);
    color : var(--bs-red);
}
.day .num-date{ 
    display: flex;
    text-align: right;
    justify-content: flex-end;
    margin-bottom: 5px;
}
.num-date > .circle{
    width:30px;
    height:30px;
    padding:5px;
    font-weight: bold;
}
.selected > .num-date > .circle{
    border-radius: 100%;
    background-color: var(--bs-primary);
    text-align:center;
    color: var(--bs-white)
}
.day-name > .name {
    width:100%;
    text-align: center;
}
.day-name > .name > p {
    margin-bottom: 0px;
    font-weight:bold;
}

.day-name > .name.holiday {
    border: 0px;
}
.day .public-holiday{
    background-color: var(--bs-red);
  
    color: var(--bs-white);
    text-align:center;
    border-radius:20px;
}
.public-holiday-mobile{
    display: none;
}
.header-calendar{ 
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom:20px;
}

@media only screen and (max-width: 425px) {
    .day{
        border-radius: 5px;
        min-height: 50px;
        padding:2px 2px;
        position: relative;
    }
    .selected > .num-date > .circle{
        border-radius: 100%;
        background-color: var(--bs-primary);
        text-align:center;
        color: var(--bs-white)
    }
    .num-date > .circle{
        width:20px;
        height:20px;
        padding: 0px;
        font-weight: bold;
    }
    .public-holiday{
        display: none;
    }
    .day .public-holiday-mobile{
        display: block;
        width: 15px;
        height: 15px;
        background-color: var(--bs-red);
        color: var(--bs-white);
        border-radius:20px;
        position: absolute;
        right: 2px;
    }
  }
`; 

