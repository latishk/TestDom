import React from 'react';
import './Layout.css';

const Notifications = () => {
  return (
    <div style={notificationStyle}>
      <div className='NotificationContainer' >
        <div className='DatePickerContainer_Title'>Notifications</div>
        {NumberList()}
      </div>
    </div>
  );
};

function NumberList(props) {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((item) =>
    <li key={"item-" + item}>
      {item}
    </li>
  );
  return <ul>{listItems}</ul>;
};

const notificationStyle = {
  padding: '10px'
};

export default Notifications;
