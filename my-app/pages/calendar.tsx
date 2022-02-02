import React from 'react';
import Calendar from '../components/calendar/calendar';
import Header from '../components/header';

const CalendarPage = (props :any) => {

    return (
        <>
            <Header pageName="My Calendar" />
            <div className="container">
                <Calendar/>
            </div>
        </>
    )
}


export default CalendarPage

