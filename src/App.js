import React, { Component } from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import UpcomingEvents from './components/layout/UpcomingEvents';
import Notifications from './components/layout/Notifications';
import Middle from './components/dashboard/Middle';
import SignIn from './components/auth/SignIn';

class App extends Component {
  constructor(props) {
    super(props);
    this.onDayClick = this.onDayClick.bind(this);
    this.state = {
      selectedDate: new Date()
    };
  }
  render() {
    const { selectedDate } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/signin' component={SignIn} />
        </div>
        <div className="container">
          <div style={container} className="center z-depth-2">
            <Sidebar />
            <Middle />
            <div>
              <UpcomingEvents fullDate={selectedDate} onDayClick={this.onDayClick} />
              <Notifications />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  onDayClick(newDay) {
    const {selectedDate} = this.state;

    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        newDay
      )
    })
  }
};

const container = {
  backgroundColor: '#fafafa',
  display: 'flex',
  justifyContent: 'flex-start',
  height: '100%'
};



export default App;
