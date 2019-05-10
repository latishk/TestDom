import React from 'react';
import DatePicker from '../datePicker/DatePicker';

const UpcomingEvents = (props) => {
  return (
    <div style={upcomingEventsStyle}>
      <DatePicker fullDate={props.fullDate} onDayClick={props.onDayClick} />
    </div>
  );
};

const upcomingEventsStyle = {
  padding: '10px'
};

export default UpcomingEvents;
