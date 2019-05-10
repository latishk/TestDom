import React from 'react';

const Leftbar = () => {
  return (
    <div style={leftbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>News</li>
        <li style={liStyle}>Submit Request</li>
        <li style={liStyle}>Pay Dues</li>
        <li style={liStyle}>Visitor</li>
        <li style={liStyle}>Reservations</li>
        <li style={liStyle}>Schedule Events</li>
      </ul>
    </div>
  );
};

const handleClick = (e) => {
  console.log(e);
}

const leftbarStyle = {
  alignSelf: 'flex-start'
};

const liStyle = {
  marginTop: '40px',
  marginLeft: '20px',
  marginBottom: '40px'
};

const ulStyle = {
  color: '#29b6f6',
  marginTop: '20px'
};

export default Leftbar;
