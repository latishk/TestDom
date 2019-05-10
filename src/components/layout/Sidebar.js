import React from 'react';
import { MenuList, MenuItem } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';
import Middle from '../dashboard/Middle';

const Sidebar = () => {
  return (
    <MenuList style={menuList} className='z-depth-2'>
      <MenuItem style={menuItem} component={Link} to='/focusbox'>
        <NavLink to="/focusbox">
          News
        </NavLink>
      </MenuItem>

      <MenuItem style={menuItem}>
        Submit Request
      </MenuItem>

      <MenuItem  style={menuItem}>
      <NavLink exact to="/">
        Pay Dues
      </NavLink>
      </MenuItem>

      <MenuItem style={menuItem}>
      <NavLink to="/form">
        Visitor
      </NavLink>
      </MenuItem>

      <MenuItem style={menuItem}>
        Reservations
      </MenuItem>

      <MenuItem style={menuItem}>
        Schedule Events
      </MenuItem>
    </MenuList>
  );
};

const menuList = {
  borderRight: '0px solid #4fc3f7',
  width: '12%',
  height: '50%',
  position: 'relative',
  backgroundColor: '#fff',
  margin: '20px'
};

const menuItem = {
  // marginTop: '40px',
  // marginBottom: '40px',
  height: '50px',
  color: '#ffa726'
};

export default Sidebar;
